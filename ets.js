/* Thư viện đề thi TOEIC theo năm (ETS 2018–2026): nạp đề của bạn, làm bài có đồng hồ + audio, chấm điểm, xem lại.
   App KHÔNG kèm nội dung đề ETS (có bản quyền). Bạn nạp đáp án/âm thanh/PDF của bộ đề bạn sở hữu; mọi thứ lưu trên máy (IndexedDB). */
const ETS_YEARS=[2026,2025,2024,2023,2022,2021,2020,2019,2018];
const PARTS=[
 {p:1,from:1,to:6,name:'Part 1 · Mô tả tranh',sec:'L'},{p:2,from:7,to:31,name:'Part 2 · Hỏi đáp',sec:'L'},
 {p:3,from:32,to:70,name:'Part 3 · Hội thoại',sec:'L'},{p:4,from:71,to:100,name:'Part 4 · Bài nói ngắn',sec:'L'},
 {p:5,from:101,to:130,name:'Part 5 · Điền câu',sec:'R'},{p:6,from:131,to:146,name:'Part 6 · Điền đoạn',sec:'R'},
 {p:7,from:147,to:200,name:'Part 7 · Đọc hiểu',sec:'R'}];
const partOf=n=>(PARTS.find(x=>n>=x.from&&n<=x.to)||PARTS[6]).p;
const LET='ABCD';
const EXAM_MIN=120;

/* ---- IndexedDB ---- */
let _db=null;
function idb(){return _db||(_db=new Promise((res,rej)=>{
  const r=indexedDB.open('ets-v1',1);
  r.onupgradeneeded=()=>r.result.createObjectStore('tests',{keyPath:'id'});
  r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);
}));}
async function tx(mode,fn){const db=await idb();return new Promise((res,rej)=>{const t=db.transaction('tests',mode);const rq=fn(t.objectStore('tests'));t.oncomplete=()=>res(rq&&rq.result);t.onerror=()=>rej(t.error);});}
const dbAll=()=>tx('readonly',s=>s.getAll()).then(a=>a||[]);
const dbGet=id=>tx('readonly',s=>s.get(id));
const dbPut=t=>tx('readwrite',s=>s.put(t));
const dbDel=id=>tx('readwrite',s=>s.delete(id));

/* ---- Lịch sử làm bài ---- */
const ATT_KEY='ets-attempts-v1',PRG_KEY='ets-progress-v1';
function lsGet(k,d){try{const s=localStorage.getItem(k);return s?JSON.parse(s):d;}catch(e){return d;}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
const attempts=()=>lsGet(ATT_KEY,[]);
const bestOf=id=>attempts().filter(a=>a.id===id&&a.mode==='full').reduce((m,a)=>Math.max(m,a.total),0)||null;

/* ---- Quy đổi điểm (ƯỚC TÍNH tuyến tính; bảng quy đổi chính thức của ETS khác nhau theo từng đề) ---- */
const scale=raw=>raw<=0?5:Math.min(495,Math.max(5,Math.round((5+raw*4.9)/5)*5));

/* ---- Dựng danh sách câu hỏi từ đề ---- */
function buildQs(t){
  if(t.questions&&t.questions.length)return t.questions.map(q=>({n:q.n,part:q.part||partOf(q.n),ans:String(q.ans||'').toUpperCase(),stem:q.stem||'',opts:q.opts||null,img:q.img||'',passage:q.passage||'',exp:q.exp||'',say:q.say||'',n_opts:q.opts?q.opts.length:(partOf(q.n)===2?3:4)})).sort((a,b)=>a.n-b.n);
  const key=(t.key||'').replace(/[^A-Da-d]/g,'').toUpperCase();
  return [...key].map((c,i)=>({n:i+1,part:partOf(i+1),ans:c,stem:'',opts:null,img:'',passage:'',exp:'',say:'',n_opts:partOf(i+1)===2?3:4}));
}

/* ---- Giao diện ---- */
(function(){const st=document.createElement('style');st.textContent=`
.yrs{display:flex;gap:8px;overflow-x:auto;padding:2px 0 10px;scrollbar-width:none}.yrs::-webkit-scrollbar{display:none}
.yr{flex:none;border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:7px 14px;font-weight:700;font-size:14px}
.yr[aria-pressed=true]{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
.yr small{font-weight:600;opacity:.75;margin-left:4px}
.slots{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.slot{border:1.5px solid var(--line);background:var(--surface);border-radius:16px;padding:12px;text-align:left;display:flex;flex-direction:column;gap:2px;min-height:76px}
.slot b{font-size:15px}.slot span{font-size:12px;color:var(--muted)}
.slot.empty{border-style:dashed;background:transparent}
.slot.ok{border-color:var(--accent)}
.slot .sc{color:var(--accent);font-weight:700}
.tbar{position:sticky;top:-8px;z-index:5;background:var(--bg);padding:8px 0;border-bottom:1px solid var(--line);margin:-8px 0 10px}
.timer{font-family:var(--font-display);font-weight:800;font-size:22px;font-variant-numeric:tabular-nums}
.timer.low{color:var(--bad)}
.pchips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin-top:8px}.pchips::-webkit-scrollbar{display:none}
.pchips button{flex:none;border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:4px 11px;font-size:13px;font-weight:600}
.phead{margin:18px 0 8px;font-size:16px;font-family:var(--font-display)}
.qrow{display:flex;align-items:center;gap:10px;padding:7px 4px;border-bottom:1px solid var(--line)}
.qrow>b{width:34px;text-align:right;font-size:14px;color:var(--muted);flex:none}
.bubs{display:flex;gap:8px;flex-wrap:wrap}
.bb{width:44px;height:44px;border-radius:50%;border:1.5px solid var(--line);background:var(--surface);font-weight:700;font-size:15px}
.bb.sel{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
.bb.good{background:var(--good);color:#fff;border-color:var(--good)}
.bb.bad{background:var(--bad);color:#fff;border-color:var(--bad)}
.bb.key{border-color:var(--good);box-shadow:0 0 0 2px var(--good) inset}
.qcard{padding:12px 4px;border-bottom:1px solid var(--line)}
.qcard .qn{font-weight:700;color:var(--muted);font-size:14px;margin-bottom:4px}
.qcard img{max-width:100%;border-radius:10px;margin:6px 0}
.passage{white-space:pre-line;background:color-mix(in srgb,var(--accent) 6%,var(--surface));border:1px solid var(--line);border-radius:12px;padding:10px 12px;font-size:15px;margin:8px 0}
.eopt{display:flex;gap:8px;align-items:flex-start;width:100%;text-align:left;border:1.5px solid var(--line);background:var(--surface);border-radius:12px;padding:10px 12px;margin-top:6px}
.eopt.sel{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,var(--surface))}
.eopt.good{border-color:var(--good);background:color-mix(in srgb,var(--good) 14%,var(--surface))}
.eopt.bad{border-color:var(--bad);background:color-mix(in srgb,var(--bad) 12%,var(--surface))}
.eopt b{flex:none}
.audiobox audio{width:100%}
.pdfbox iframe{width:100%;height:70vh;border:1px solid var(--line);border-radius:12px;background:#fff}
.scoregrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center}
.scoregrid div{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:10px 4px}
.scoregrid b{display:block;font-family:var(--font-display);font-size:26px}
.scoregrid small{color:var(--muted);font-size:12px}
.ptab{width:100%;border-collapse:collapse;font-size:14px}.ptab td{padding:6px 4px;border-bottom:1px solid var(--line)}.ptab td:last-child{text-align:right;font-weight:700}
.legal{font-size:12px;color:var(--muted)}
`;document.head.appendChild(st);})();

const E={view:'lib',year:ETS_YEARS[2],tests:[],t:null,qs:[],ans:{},mode:'full',part:0,start:0,end:0,timer:0,urls:[],showPdf:false,filter:'all',res:null,slot:null};
function etsCleanup(){clearInterval(E.timer);E.urls.forEach(u=>{try{URL.revokeObjectURL(u);}catch(e){}});E.urls=[];}
const fmtT=s=>{s=Math.max(0,s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60);return (h?h+':':'')+String(m).padStart(h?2:1,'0')+':'+String(s%60).padStart(2,'0');};

/* Đề mẫu tự biên soạn (dùng dữ liệu luyện đề có sẵn) để thử giao diện */
function demoTest(){
  const qs=[];let n=7;
  (typeof P2!=='undefined'?P2:[]).slice(0,10).forEach(q=>{const o=q[1].slice(0,3);qs.push({n:n++,part:2,say:q[0],opts:o,ans:LET[q[2]],exp:q[3]});});
  n=101;(typeof P5!=='undefined'?P5:[]).slice(0,15).forEach(q=>{qs.push({n:n++,part:5,stem:q[0],opts:q[1],ans:LET[q[2]],exp:q[3]});});
  n=147;(typeof P7!=='undefined'?P7:[]).forEach(p=>p.qs.forEach((q,i)=>{qs.push({n:n++,part:7,passage:i===0?p.text:'',stem:q[0],opts:q[1],ans:LET[q[2]],exp:q[3]});}));
  return {id:'demo',year:0,no:0,title:'Đề mẫu tự biên soạn (rút gọn)',questions:qs,demo:true};
}

async function Ets(){
  const v=$('#view');
  if(E.view==='test'){return renderTest();}
  if(E.view==='result'){return renderResult();}
  try{E.tests=await dbAll();}catch(e){E.tests=[];E.dbErr=true;}
  if(E.view==='import')return renderImport();
  if(E.view==='detail')return renderDetail();
  renderLib();
}

function slotFor(y,no){return E.tests.find(t=>t.year===y&&t.no===no);}
function renderLib(){
  const v=$('#view'),y=E.year;
  const cnt=yy=>E.tests.filter(t=>t.year===yy).length;
  const maxNo=Math.max(10,...E.tests.filter(t=>t.year===y).map(t=>t.no));
  let slots='';
  for(let no=1;no<=maxNo;no++){
    const t=slotFor(y,no);
    if(t){const b=bestOf(t.id);slots+=`<button class="slot ok" data-open="${esc(t.id)}"><b>${esc(t.title||('ETS '+y+' Test '+no))}</b><span>${buildQs(t).length} câu${t.audio||t.audioBlob?' · có audio':''}${t.pdf||t.pdfBlob?' · có đề PDF':''}</span><span class="sc">${b?'Cao nhất: '+b+' điểm':'Chưa làm'}</span></button>`;}
    else slots+=`<button class="slot empty" data-new="${no}"><b>ETS ${y} Test ${no}</b><span>Chưa nạp · chạm để nạp đề</span></button>`;
  }
  v.innerHTML=`<h2>Đề thi ETS 2018–2026</h2>
  <p class="sub">Chọn năm, chọn đề, làm như thi thật: 200 câu, 120 phút, chấm điểm 10–990 và xem lại đáp án.</p>
  ${E.dbErr?'<div class="msg bad">Trình duyệt không cho lưu dữ liệu đề (IndexedDB bị tắt). Hãy tắt chế độ riêng tư.</div>':''}
  <div class="yrs" role="group" aria-label="Chọn năm">${ETS_YEARS.map(yy=>`<button class="yr" data-y="${yy}" aria-pressed="${yy===y}">${yy}<small>${cnt(yy)}</small></button>`).join('')}</div>
  <div class="slots">${slots}<button class="slot empty" data-new="${maxNo+1}"><b>+ Thêm đề</b><span>Test ${maxNo+1}</span></button></div>
  <div class="card stack" style="margin-top:16px">
    <h3 style="font-size:17px">Đề mẫu để thử</h3>
    <p class="hint" style="margin:0">Bản rút gọn do mình tự biên soạn, để bạn xem thử cách làm bài, chấm điểm và xem lại.</p>
    <button class="btn" id="demo">Làm đề mẫu</button>
  </div>
  <div class="card stack" style="margin-top:12px">
    <h3 style="font-size:17px">Nạp nhiều đề cùng lúc</h3>
    <p class="hint" style="margin:0">Chọn tệp JSON chứa danh sách đề (xem tệp mẫu). Âm thanh và PDF có thể là đường link hoặc thêm riêng từng đề.</p>
    <div class="row"><label class="btn" style="cursor:pointer;display:inline-flex;align-items:center;flex:1;justify-content:center">Chọn tệp JSON<input id="bulk" type="file" accept=".json,application/json" hidden></label><button class="btn" id="tpl" style="flex:1">Tải tệp mẫu</button></div>
  </div>
  <p class="legal" style="margin-top:14px">Ứng dụng không kèm nội dung đề ETS vì có bản quyền. Hãy nạp đáp án, audio, PDF từ bộ đề bạn đã mua hoặc được phép dùng. Dữ liệu chỉ lưu trên thiết bị của bạn. Điểm quy đổi chỉ là ước tính.</p>`;
  v.querySelectorAll('[data-y]').forEach(b=>b.onclick=()=>{E.year=+b.dataset.y;renderLib();});
  v.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{E.slot=E.tests.find(t=>t.id===b.dataset.open);E.view='detail';Ets();});
  v.querySelectorAll('[data-new]').forEach(b=>b.onclick=()=>{E.slot={year:y,no:+b.dataset.new,isNew:true};E.view='import';Ets();});
  $('#demo').onclick=()=>startTest(demoTest(),'full');
  $('#bulk').onchange=bulkImport;
  $('#tpl').onclick=()=>{const t=JSON.stringify([{year:2024,no:1,title:'ETS 2024 Test 1',key:'ABCD'.repeat(50),audio:'',pdf:''},{year:2024,no:2,title:'Đề có nội dung đầy đủ (ví dụ)',questions:[{n:101,part:5,stem:'The manager ___ the report yesterday.',opts:['review','reviewed','reviewing','reviews'],ans:'B',exp:'Thì quá khứ vì có yesterday.'}]}],null,1);dl('ets-template.json',t);};
}
function dl(name,text){try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:'application/json'}));a.download=name;a.click();}catch(e){toast('Không tải được tệp');}}

async function bulkImport(e){
  const f=e.target.files[0];if(!f)return;
  try{
    let o=JSON.parse(await f.text());if(!Array.isArray(o))o=o.tests||[o];
    let n=0;
    for(const x of o){
      const y=+x.year,no=+x.no;if(!y||!no||!(x.key||(x.questions&&x.questions.length)))continue;
      await dbPut({id:'ets'+y+'-t'+no,year:y,no,title:x.title||('ETS '+y+' Test '+no),key:x.key||'',questions:x.questions||null,audio:x.audio||'',pdf:x.pdf||'',cues:x.cues||null,created:Date.now()});n++;
    }
    toast('Đã nạp '+n+' đề');
  }catch(err){toast('Tệp JSON không hợp lệ');}
  Ets();
}

function renderImport(){
  const v=$('#view'),s=E.slot,old=!s.isNew?s:null;
  v.innerHTML=`<button class="btn" id="back" style="min-height:38px;padding:6px 12px;margin-bottom:10px">← Quay lại</button>
  <h2>${old?'Sửa đề':'Nạp đề'} · ETS ${s.year} Test ${s.no}</h2>
  <form class="card stack" id="f" autocomplete="off">
    <div><label for="ti">Tên đề</label><input class="field" id="ti" maxlength="80" value="${esc(old?old.title:'ETS '+s.year+' Test '+s.no)}"></div>
    <div><label for="ky">Đáp án (dán chuỗi 200 chữ A/B/C/D)</label>
      <textarea class="field" id="ky" rows="4" style="font-size:14px;font-family:ui-monospace,monospace" placeholder="Ví dụ: BACDA... hoặc 1.B 2.A 3.C ... (chữ cái sẽ được lấy theo thứ tự)">${old&&old.key?esc(old.key):''}</textarea>
      <p class="hint" id="kcnt" style="margin:4px 0 0"></p></div>
    <div><label for="au">Audio (mp3/m4a, tùy chọn)</label><input id="au" type="file" accept="audio/*">${old&&(old.audioBlob||old.audio)?'<p class="hint" style="margin:4px 0 0">Đã có audio. Chọn tệp mới để thay.</p>':''}</div>
    <div><label for="pf">Đề PDF (tùy chọn)</label><input id="pf" type="file" accept="application/pdf">${old&&(old.pdfBlob||old.pdf)?'<p class="hint" style="margin:4px 0 0">Đã có PDF. Chọn tệp mới để thay.</p>':''}</div>
    <div><label for="jf">Hoặc nạp đề đầy đủ nội dung (JSON, tùy chọn)</label><input id="jf" type="file" accept=".json,application/json"></div>
    <button class="btn primary block" type="submit">Lưu đề</button>
    <p class="hint" style="margin:0" id="msg" aria-live="polite"></p>
  </form>`;
  const cnt=()=>{const n=($('#ky').value.replace(/[^A-Da-d]/g,'')).length;$('#kcnt').textContent=n+' đáp án'+(n===200?' (đủ bộ đề 200 câu)':n?' (đề chuẩn có 200)':'');};
  $('#ky').oninput=cnt;cnt();
  $('#back').onclick=()=>{E.view=old?'detail':'lib';Ets();};
  $('#f').onsubmit=async ev=>{
    ev.preventDefault();
    const t=Object.assign({},old||{},{id:'ets'+s.year+'-t'+s.no,year:s.year,no:s.no,title:$('#ti').value.trim()||('ETS '+s.year+' Test '+s.no),key:$('#ky').value.replace(/[^A-Da-d]/g,'').toUpperCase(),created:(old&&old.created)||Date.now()});
    try{
      const au=$('#au').files[0],pf=$('#pf').files[0],jf=$('#jf').files[0];
      if(au){t.audioBlob=au;t.audio='';}
      if(pf){t.pdfBlob=pf;t.pdf='';}
      if(jf){const o=JSON.parse(await jf.text());const x=Array.isArray(o)?o[0]:o;t.questions=x.questions||null;if(x.key&&!t.key)t.key=x.key;if(x.audio&&!t.audioBlob)t.audio=x.audio;if(x.pdf&&!t.pdfBlob)t.pdf=x.pdf;if(x.cues)t.cues=x.cues;if(x.title)t.title=x.title;}
      if(!buildQs(t).length){$('#msg').textContent='Cần ít nhất là chuỗi đáp án hoặc tệp JSON có câu hỏi.';return;}
      await dbPut(t);toast('Đã lưu đề');E.year=s.year;E.view='lib';Ets();
    }catch(err){$('#msg').textContent='Không lưu được: '+(err&&err.message||'lỗi dữ liệu')+'. Có thể tệp quá lớn hoặc bộ nhớ đầy.';}
  };
}

function renderDetail(){
  const v=$('#view'),t=E.slot,qs=buildQs(t);
  const hist=attempts().filter(a=>a.id===t.id).slice(-5).reverse();
  const parts=PARTS.filter(p=>qs.some(q=>q.part===p.p));
  v.innerHTML=`<button class="btn" id="back" style="min-height:38px;padding:6px 12px;margin-bottom:10px">← Thư viện</button>
  <h2>${esc(t.title)}</h2><p class="sub">${qs.length} câu${t.audio||t.audioBlob?' · có audio':' · chưa có audio'}${t.pdf||t.pdfBlob?' · có PDF':''}</p>
  <div class="stack">
    <div class="card stack"><div><h3 style="font-size:18px">Thi thử full test</h3><p class="hint" style="margin:4px 0 0">${EXAM_MIN} phút, không báo đúng sai cho đến khi nộp bài.</p></div><button class="btn primary" id="full">Bắt đầu thi</button></div>
    <div class="card stack"><div><h3 style="font-size:18px">Luyện từng Part</h3><p class="hint" style="margin:4px 0 0">Không giới hạn thời gian, hiện đúng/sai ngay sau mỗi câu.</p></div><div class="row">${parts.map(p=>`<button class="btn" data-p="${p.p}" style="flex:1 1 40%">${p.name.split(' · ')[0]}</button>`).join('')}</div></div>
    ${hist.length?`<div class="card"><h3 style="font-size:17px;margin-bottom:6px">Lần làm gần đây</h3><table class="ptab">${hist.map(a=>`<tr><td>${new Date(a.date).toLocaleDateString('vi-VN')} · ${a.mode==='full'?'Full test':'Part '+a.part}</td><td>${a.mode==='full'?a.total+' điểm':a.correct+'/'+a.count}</td></tr>`).join('')}</table></div>`:''}
    <div class="row">${t.demo?'':'<button class="btn" id="edit" style="flex:1">Sửa / thêm audio, PDF</button><button class="btn" id="del" style="flex:1;color:var(--bad)">Xóa đề</button>'}</div>
  </div>`;
  $('#back').onclick=()=>{E.view='lib';Ets();};
  $('#full').onclick=()=>startTest(t,'full');
  v.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>startTest(t,'part',+b.dataset.p));
  if(!t.demo){$('#edit').onclick=()=>{E.view='import';E.slot=t;Ets();};
  $('#del').onclick=async()=>{if(confirm('Xóa đề này khỏi thiết bị?')){await dbDel(t.id);E.view='lib';Ets();}};}
}

/* ---- Làm bài ---- */
function startTest(t,mode,part){
  etsCleanup();
  const all=buildQs(t);
  E.t=t;E.mode=mode;E.part=part||0;
  E.qs=mode==='part'?all.filter(q=>q.part===part):all;
  E.ans={};E.showPdf=false;E.filter='all';
  const saved=!t.demo&&mode==='full'?lsGet(PRG_KEY,null):null;
  E.start=Date.now();E.end=E.start+EXAM_MIN*60000;
  if(saved&&saved.id===t.id&&saved.end>Date.now()&&confirm('Bạn có bài đang làm dở. Tiếp tục bài đó?')){E.ans=saved.ans;E.start=saved.start;E.end=saved.end;}
  else if(mode==='full')lsSet(PRG_KEY,null);
  E.aurl=t.audioBlob?URL.createObjectURL(t.audioBlob):(t.audio||'');if(t.audioBlob)E.urls.push(E.aurl);
  E.purl=t.pdfBlob?URL.createObjectURL(t.pdfBlob):(t.pdf||'');if(t.pdfBlob)E.urls.push(E.purl);
  E.view='test';go('ets');
}
function saveProg(){if(E.mode==='full'&&!E.t.demo)lsSet(PRG_KEY,{id:E.t.id,ans:E.ans,start:E.start,end:E.end});}

function qHTML(q,rev){
  const rich=q.opts||q.stem||q.img||q.say||q.passage;
  const sel=E.ans[q.n],instant=!rev&&E.mode==='part',show=rev||(instant&&sel);
  const cls=(L)=>{let c='';if(sel===L)c=rev||show?(L===q.ans?'good':'bad'):'sel';if(show&&L===q.ans)c=(sel===L?'good':'key');return c;};
  const exp=show&&q.exp?`<p class="exvi" style="margin:6px 0 0;font-size:14px">${esc(q.exp)}</p>`:'';
  const status=rev?`<div class="hint" style="margin-top:4px">${sel?('Bạn chọn '+sel+' · '):'Bỏ trống · '}Đáp án: <b>${q.ans}</b></div>`:'';
  if(!rich){
    const opts=LET.slice(0,q.n_opts).split('');
    return `<div class="qrow" id="q${q.n}"><b>${q.n}</b><div class="bubs">${opts.map(L=>`<button class="bb ${cls(L)}" data-q="${q.n}" data-a="${L}" aria-label="Câu ${q.n} đáp án ${L}" ${rev?'disabled':''}>${L}</button>`).join('')}</div>${rev?`<span class="hint" style="margin-left:auto">${sel===q.ans?'✓':'✗ '+q.ans}</span>`:''}</div>`;
  }
  const opts=(q.opts||LET.slice(0,q.n_opts).split(''));
  return `<div class="qcard" id="q${q.n}">${q.passage?`<div class="passage">${esc(q.passage)}</div>`:''}<div class="qn">Câu ${q.n}${q.say?` <button class="speak" data-say="${q.n}" aria-label="Nghe">🔊</button>`:''}</div>${q.img?`<img src="${esc(q.img)}" alt="">`:''}${q.stem?`<div style="font-weight:600;margin-bottom:4px">${esc(q.stem)}</div>`:''}
  ${opts.map((o,i)=>`<button class="eopt ${cls(LET[i])}" data-q="${q.n}" data-a="${LET[i]}" ${rev?'disabled':''}><b>${LET[i]}.</b><span>${q.opts&&(!q.say||show)?esc(o):'Chọn '+LET[i]}</span></button>`).join('')}${status}${exp}</div>`;
}

function renderTest(){
  const v=$('#view'),t=E.t,qs=E.qs;
  const parts=[...new Set(qs.map(q=>q.part))];
  let body='';parts.forEach(p=>{const pi=PARTS.find(x=>x.p===p);body+=`<h3 class="phead" id="ph${p}">${pi.name}</h3>`+qs.filter(q=>q.part===p).map(q=>qHTML(q)).join('');});
  const done=Object.keys(E.ans).length;
  v.innerHTML=`<div class="tbar"><div class="row" style="align-items:center;justify-content:space-between;flex-wrap:nowrap">
    <div><div class="timer" id="tm">--:--</div><div class="hint" id="cnt">${done}/${qs.length} câu</div></div>
    <div class="row" style="flex-wrap:nowrap"><button class="btn" id="quit" style="min-height:40px;padding:6px 12px">Thoát</button><button class="btn primary" id="sub" style="min-height:40px;padding:6px 14px">Nộp bài</button></div></div>
    <div class="pchips">${parts.map(p=>`<button data-go="${p}">Part ${p}</button>`).join('')}</div></div>
  ${E.aurl?`<div class="audiobox card" style="padding:10px;margin-bottom:10px"><audio id="au" controls preload="metadata" src="${esc(E.aurl)}"></audio>${t.cues?`<div class="pchips">${parts.filter(p=>t.cues[p]!=null).map(p=>`<button data-cue="${t.cues[p]}">▶ Part ${p}</button>`).join('')}</div>`:''}</div>`:(parts.some(p=>p<=4)&&!qs.some(q=>q.say)?'<p class="hint">Đề này chưa có audio. Vào Thư viện › Sửa để thêm tệp audio.</p>':'')}
  ${E.purl?`<div class="pdfbox" style="margin-bottom:10px"><div class="row"><button class="btn" id="pdft" style="flex:1">${E.showPdf?'Ẩn đề PDF':'Xem đề PDF'}</button><a class="btn" href="${esc(E.purl)}" target="_blank" rel="noopener" style="flex:1;text-align:center;text-decoration:none">Mở tab mới</a></div>${E.showPdf?`<iframe src="${esc(E.purl)}" title="Đề PDF"></iframe>`:''}</div>`:''}
  <div id="qs">${body}</div>
  <button class="btn primary block" id="sub2" style="margin-top:16px">Nộp bài</button>`;
  const upd=()=>{const el=$('#tm');if(!el)return;if(E.mode==='full'){const left=Math.round((E.end-Date.now())/1000);el.textContent=fmtT(left);el.classList.toggle('low',left<300);if(left<=0){clearInterval(E.timer);toast('Hết giờ, đã nộp bài');submit();}}else{el.textContent=fmtT(Math.round((Date.now()-E.start)/1000));}};
  upd();clearInterval(E.timer);E.timer=setInterval(upd,1000);
  v.onclick=ev=>{
    const a=ev.target.closest('[data-a]');
    if(a&&!a.disabled){
      const n=+a.dataset.q,L=a.dataset.a,q=qs.find(x=>x.n===n);
      if(E.mode==='part'&&E.ans[n])return; // khóa sau khi chọn trong chế độ luyện
      E.ans[n]=(E.mode==='full'&&E.ans[n]===L)?undefined:L;if(E.ans[n]===undefined)delete E.ans[n];
      const row=$('#q'+n);row.outerHTML=qHTML(q);saveProg();
      $('#cnt').textContent=Object.keys(E.ans).length+'/'+qs.length+' câu';return;
    }
    const g=ev.target.closest('[data-go]');if(g){const h=$('#ph'+g.dataset.go);if(h)h.scrollIntoView({behavior:'smooth',block:'start'});return;}
    const c=ev.target.closest('[data-cue]');if(c){const au=$('#au');if(au){au.currentTime=+c.dataset.cue;au.play().catch(()=>{});}return;}
    const sy=ev.target.closest('[data-say]');if(sy){const q=qs.find(x=>x.n===+sy.dataset.say);speak(q.say+(q.opts?'. '+q.opts.map((o,i)=>LET[i]+'. '+o).join('. '):''),.9);return;}
    if(ev.target.closest('#pdft')){E.showPdf=!E.showPdf;const y=$('#view').scrollTop;renderTest();$('#view').scrollTop=y;return;}
    if(ev.target.closest('#sub')||ev.target.closest('#sub2')){
      const left=qs.length-Object.keys(E.ans).length;
      if(left>0&&!confirm('Còn '+left+' câu chưa làm. Nộp bài luôn?'))return;submit();return;}
    if(ev.target.closest('#quit')){if(confirm(E.mode==='full'?'Thoát? Bài làm dở được lưu để tiếp tục sau.':'Thoát bài luyện?')){leave();}return;}
  };
}
function leave(){clearInterval(E.timer);try{speechSynthesis.cancel();}catch(e){}$('#view').onclick=null;const au=$('#au');if(au)au.pause();etsCleanup();E.view=E.t&&E.t.demo?'lib':'detail';E.slot=E.t;Ets();}

function submit(){
  clearInterval(E.timer);const au=$('#au');if(au)au.pause();try{speechSynthesis.cancel();}catch(e){}
  $('#view').onclick=null;
  const qs=E.qs,by={};PARTS.forEach(p=>by[p.p]={c:0,n:0});
  let Lr=0,Rr=0;
  qs.forEach(q=>{const ok=E.ans[q.n]===q.ans;by[q.part].n++;if(ok){by[q.part].c++;if(partOf(q.n)<=4)Lr++;else Rr++;}});
  const correct=Lr+Rr;
  E.res={Lr,Rr,L:scale(Lr),R:scale(Rr),by,correct,count:qs.length};
  E.res.total=E.mode==='full'?E.res.L+E.res.R:0;
  if(!E.t.demo){
    const a=attempts();a.push({id:E.t.id,date:Date.now(),mode:E.mode,part:E.part,correct,count:qs.length,total:E.res.total,L:E.res.L,R:E.res.R});
    lsSet(ATT_KEY,a.slice(-200));if(E.mode==='full')lsSet(PRG_KEY,null);
  }
  qs.forEach(q=>{logReview(E.ans[q.n]===q.ans);});save();chips();
  E.view='result';E.filter='wrong';Ets();
}

function renderResult(){
  const v=$('#view'),r=E.res,qs=E.qs,full=E.mode==='full'&&qs.length>=190;
  const list=qs.filter(q=>E.filter==='all'||E.ans[q.n]!==q.ans);
  v.innerHTML=`<h2>Kết quả</h2><p class="sub">${esc(E.t.title)}${E.mode==='part'?' · Part '+E.part:''}</p>
  ${E.mode==='full'?`<div class="card" style="text-align:center;padding:22px 14px"><div class="big" style="font-size:54px">${r.total}</div><div class="hint">điểm ước tính / 990${full?'':' (đề rút gọn nên điểm chỉ mang tính tham khảo)'}</div>
  <div class="scoregrid" style="margin-top:14px"><div><b>${r.L}</b><small>Listening (${r.Lr} đúng)</small></div><div><b>${r.R}</b><small>Reading (${r.Rr} đúng)</small></div><div><b>${r.correct}/${r.count}</b><small>Số câu đúng</small></div></div></div>`
  :`<div class="card" style="text-align:center;padding:22px 14px"><div class="big" style="font-size:54px">${r.correct}/${r.count}</div><div class="hint">${Math.round(100*r.correct/Math.max(1,r.count))}% câu đúng</div></div>`}
  <div class="card" style="margin-top:12px"><h3 style="font-size:17px;margin-bottom:6px">Theo từng Part</h3><table class="ptab">${PARTS.filter(p=>r.by[p.p].n).map(p=>`<tr><td>${p.name}</td><td>${r.by[p.p].c}/${r.by[p.p].n}</td></tr>`).join('')}</table></div>
  <div class="row" style="margin-top:14px"><div class="seg" style="margin:0"><button data-f="wrong" aria-pressed="${E.filter==='wrong'}">Câu sai/bỏ</button><button data-f="all" aria-pressed="${E.filter==='all'}">Tất cả</button></div></div>
  <div id="rv" style="margin-top:8px">${list.length?list.map(q=>qHTML(q,true)).join(''):'<p class="hint">Không có câu sai. Rất tốt!</p>'}</div>
  <div class="row" style="margin-top:16px"><button class="btn primary" id="again" style="flex:1">Làm lại</button><button class="btn" id="lib" style="flex:1">Về thư viện</button></div>`;
  v.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{E.filter=b.dataset.f;renderResult();});
  v.querySelectorAll('[data-say]').forEach(b=>b.onclick=()=>{const q=qs.find(x=>x.n===+b.dataset.say);speak(q.say+(q.opts?'. '+q.opts.map((o,i)=>LET[i]+'. '+o).join('. '):''),.9);});
  $('#again').onclick=()=>startTest(E.t,E.mode,E.part);
  $('#lib').onclick=()=>{etsCleanup();E.view=E.t.demo?'lib':'detail';E.slot=E.t;Ets();};
  chips();$('#view').scrollTop=0;
}
