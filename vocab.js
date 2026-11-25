/* Từ vựng TOEIC theo chủ đề. Mỗi dòng: từ|loại|nghĩa|ví dụ|dịch ví dụ */
const VOCAB_TOPICS = {
"Văn phòng":`
colleague|n|đồng nghiệp|My colleague will cover my shift.|Đồng nghiệp sẽ làm thay ca của tôi.
memo|n|bản ghi nhớ nội bộ|A memo was sent to all staff.|Một bản ghi nhớ đã gửi tới toàn bộ nhân viên.
photocopier|n|máy photocopy|The photocopier is out of paper.|Máy photocopy hết giấy.
cubicle|n|ô làm việc|Her cubicle is next to the window.|Ô làm việc của cô ấy cạnh cửa sổ.
submit|v|nộp|Submit your report by noon.|Hãy nộp báo cáo trước trưa.
approve|v|phê duyệt|The manager approved the request.|Quản lý đã phê duyệt yêu cầu.
delegate|v|ủy quyền, giao việc|She delegated the task to her assistant.|Cô ấy giao việc cho trợ lý.
proofread|v|đọc soát lỗi|Please proofread the letter before sending.|Hãy đọc soát thư trước khi gửi.
forward|v|chuyển tiếp|I'll forward the email to you.|Tôi sẽ chuyển tiếp email cho bạn.
attach|v|đính kèm|Please attach your résumé.|Vui lòng đính kèm hồ sơ của bạn.
enclose|v|gửi kèm|I enclosed a copy of the invoice.|Tôi gửi kèm một bản hóa đơn.
correspondence|n|thư từ, giao dịch thư tín|Handle all client correspondence promptly.|Hãy xử lý thư từ khách hàng kịp thời.
supplies|n|vật tư văn phòng|We are low on office supplies.|Vật tư văn phòng sắp hết.
facilitate|v|tạo điều kiện, điều phối|She facilitated the weekly meeting.|Cô ấy điều phối cuộc họp hằng tuần.
adjourn|v|hoãn, bế mạc cuộc họp|The meeting adjourned at five.|Cuộc họp bế mạc lúc năm giờ.
minutes|n|biên bản họp|Who will take the minutes?|Ai sẽ ghi biên bản họp?
brainstorm|v|động não|The team brainstormed new ideas.|Cả nhóm động não tìm ý tưởng mới.
workstation|n|vị trí làm việc|Each workstation has a computer.|Mỗi vị trí làm việc có một máy tính.
break room|n|phòng nghỉ|Lunch is served in the break room.|Bữa trưa được phục vụ ở phòng nghỉ.
reception|n|quầy lễ tân|Leave the package at reception.|Hãy để gói hàng ở quầy lễ tân.
extension|n|số máy nhánh; gia hạn|Dial extension 204 for sales.|Bấm máy nhánh 204 để gặp phòng kinh doanh.
assign|v|giao, phân công|He was assigned to the Hanoi branch.|Anh ấy được phân công tới chi nhánh Hà Nội.
oversee|v|giám sát|She oversees the whole department.|Cô ấy giám sát cả phòng.
coordinate|v|phối hợp|We coordinate with the sales team.|Chúng tôi phối hợp với phòng kinh doanh.
urgent|adj|khẩn cấp|This is an urgent request.|Đây là yêu cầu khẩn cấp.
routine|adj|thường lệ|Routine maintenance is on Friday.|Bảo trì định kỳ vào thứ Sáu.
cabinet|n|tủ hồ sơ|File it in the cabinet.|Hãy lưu nó vào tủ hồ sơ.
clerk|n|nhân viên văn thư|The clerk stamped the form.|Nhân viên văn thư đóng dấu vào mẫu đơn.
draft|n|bản nháp|Send me the first draft.|Gửi tôi bản nháp đầu tiên.
revise|v|sửa đổi|Please revise the schedule.|Vui lòng sửa lại lịch trình.
`,
"Hợp đồng":`
contract|n|hợp đồng|The contract lasts two years.|Hợp đồng kéo dài hai năm.
party|n|bên (trong hợp đồng)|Both parties must sign the document.|Cả hai bên phải ký văn bản.
provision|n|điều khoản, quy định|A new provision was added.|Một điều khoản mới đã được thêm.
stipulate|v|quy định rõ|The contract stipulates a 30-day notice.|Hợp đồng quy định báo trước 30 ngày.
terminate|v|chấm dứt|Either side may terminate the agreement.|Mỗi bên đều có thể chấm dứt thỏa thuận.
void|adj|vô hiệu|The contract became void.|Hợp đồng trở nên vô hiệu.
binding|adj|có tính ràng buộc|This is a legally binding document.|Đây là văn bản có tính ràng buộc pháp lý.
breach|n|sự vi phạm|A breach of contract can cost money.|Vi phạm hợp đồng có thể tốn tiền.
liable|adj|có trách nhiệm pháp lý|The firm is liable for the damage.|Công ty chịu trách nhiệm cho thiệt hại.
liability|n|trách nhiệm pháp lý|The company limits its liability.|Công ty giới hạn trách nhiệm của mình.
amend|v|sửa đổi (văn bản)|They amended the agreement last week.|Họ đã sửa đổi thỏa thuận tuần trước.
revision|n|bản sửa đổi|The revision is attached.|Bản sửa đổi được đính kèm.
signature|n|chữ ký|Your signature is required here.|Cần chữ ký của bạn ở đây.
notarize|v|công chứng|The deed must be notarized.|Giấy tờ phải được công chứng.
enforce|v|thực thi|The law is strictly enforced.|Luật được thực thi nghiêm ngặt.
exempt|adj|được miễn|Charities are exempt from the tax.|Tổ chức từ thiện được miễn thuế.
compliance|n|sự tuân thủ|Compliance with safety rules is mandatory.|Tuân thủ quy tắc an toàn là bắt buộc.
mandatory|adj|bắt buộc|Attendance is mandatory.|Việc tham dự là bắt buộc.
mutual|adj|chung, qua lại|They reached a mutual agreement.|Họ đạt được thỏa thuận chung.
negotiation|n|cuộc đàm phán|Negotiations lasted three days.|Đàm phán kéo dài ba ngày.
settle|v|giải quyết, dàn xếp|They settled the dispute quickly.|Họ giải quyết tranh chấp nhanh chóng.
dispute|n|tranh chấp|The dispute went to court.|Tranh chấp được đưa ra tòa.
penalty|n|tiền phạt, hình phạt|A late penalty applies.|Áp dụng phạt trả chậm.
specify|v|nêu rõ|The form specifies the due date.|Mẫu đơn nêu rõ hạn nộp.
subsidiary|n|công ty con|It is a subsidiary of a larger firm.|Đó là công ty con của một tập đoàn lớn.
`,
"Tuyển dụng":`
recruit|v|tuyển dụng|We plan to recruit ten engineers.|Chúng tôi định tuyển mười kỹ sư.
vacancy|n|vị trí trống|There is a vacancy in accounting.|Phòng kế toán đang có vị trí trống.
position|n|vị trí công việc|She applied for the senior position.|Cô ấy ứng tuyển vị trí cấp cao.
reference|n|thư giới thiệu, người tham chiếu|Please provide two references.|Vui lòng cung cấp hai người tham chiếu.
résumé|n|sơ yếu lý lịch|Send your résumé to HR.|Hãy gửi sơ yếu lý lịch cho phòng nhân sự.
cover letter|n|thư xin việc|Include a cover letter with your résumé.|Hãy kèm thư xin việc cùng sơ yếu lý lịch.
hire|v|thuê, tuyển|They hired three new staff.|Họ đã tuyển ba nhân viên mới.
probation|n|thời gian thử việc|The probation period is two months.|Thời gian thử việc là hai tháng.
orientation|n|buổi định hướng nhân viên mới|Orientation begins at nine.|Buổi định hướng bắt đầu lúc chín giờ.
payroll|n|bảng lương|Payroll is processed monthly.|Bảng lương được xử lý hằng tháng.
benefits|n|phúc lợi|The job offers excellent benefits.|Công việc có phúc lợi rất tốt.
salary|n|lương|His salary increased last year.|Lương của anh ấy tăng năm ngoái.
raise|n|đợt tăng lương|She received a raise.|Cô ấy được tăng lương.
bonus|n|tiền thưởng|Employees get a year-end bonus.|Nhân viên nhận thưởng cuối năm.
overtime|n|làm thêm giờ|Overtime is paid at 1.5 times.|Làm thêm giờ được trả gấp rưỡi.
shift|n|ca làm việc|He works the night shift.|Anh ấy làm ca đêm.
transfer|v|chuyển công tác|She was transferred to Osaka.|Cô ấy được chuyển sang Osaka.
relocate|v|chuyển chỗ ở/làm việc|He agreed to relocate for the job.|Anh ấy đồng ý chuyển chỗ ở vì công việc.
promotion|n|sự thăng chức|He earned a promotion.|Anh ấy được thăng chức.
evaluate|v|đánh giá|Managers evaluate staff yearly.|Quản lý đánh giá nhân viên hằng năm.
appraisal|n|đánh giá hiệu suất|Her appraisal was excellent.|Đánh giá của cô ấy rất xuất sắc.
mentor|n|người hướng dẫn|My mentor gave me great advice.|Người hướng dẫn cho tôi lời khuyên tuyệt vời.
trainee|n|thực tập sinh|Trainees start on Monday.|Thực tập sinh bắt đầu vào thứ Hai.
internship|n|kỳ thực tập|She did an internship at a bank.|Cô ấy thực tập tại một ngân hàng.
dismiss|v|sa thải|He was dismissed for misconduct.|Anh ấy bị sa thải vì vi phạm.
requirement|n|yêu cầu|A degree is a requirement.|Bằng cấp là một yêu cầu.
eligible|adj|đủ điều kiện|You are eligible for a bonus.|Bạn đủ điều kiện nhận thưởng.
`,
"Tài chính":`
asset|n|tài sản|The firm sold several assets.|Công ty đã bán một số tài sản.
profit|n|lợi nhuận|Profits rose by eight percent.|Lợi nhuận tăng tám phần trăm.
loss|n|khoản lỗ|The company reported a loss.|Công ty báo cáo khoản lỗ.
earnings|n|thu nhập, lợi nhuận|Earnings exceeded expectations.|Thu nhập vượt kỳ vọng.
fiscal|adj|thuộc tài chính|The fiscal year ends in March.|Năm tài chính kết thúc vào tháng Ba.
quarter|n|quý|Sales grew in the second quarter.|Doanh số tăng trong quý hai.
forecast|n|dự báo|The forecast shows slow growth.|Dự báo cho thấy tăng trưởng chậm.
estimate|n|ước tính, báo giá|Get an estimate before you repair it.|Hãy lấy báo giá trước khi sửa.
audit|n|cuộc kiểm toán|An audit is planned for June.|Một cuộc kiểm toán dự kiến vào tháng Sáu.
accountant|n|kế toán viên|The accountant prepared the tax forms.|Kế toán viên chuẩn bị mẫu thuế.
tax|n|thuế|Prices include tax.|Giá đã bao gồm thuế.
fund|n|quỹ|The fund supports small businesses.|Quỹ hỗ trợ doanh nghiệp nhỏ.
invest|v|đầu tư|They invested in new equipment.|Họ đầu tư vào thiết bị mới.
investor|n|nhà đầu tư|Investors welcomed the news.|Nhà đầu tư đón nhận tin này.
dividend|n|cổ tức|Shareholders receive a dividend.|Cổ đông nhận cổ tức.
shareholder|n|cổ đông|Shareholders vote at the annual meeting.|Cổ đông bỏ phiếu tại họp thường niên.
overdue|adj|quá hạn|Your payment is overdue.|Khoản thanh toán của bạn đã quá hạn.
installment|n|đợt trả góp|Pay in three installments.|Trả thành ba đợt.
balance|n|số dư|Check your account balance online.|Hãy kiểm tra số dư tài khoản trực tuyến.
transaction|n|giao dịch|Each transaction is recorded.|Mỗi giao dịch đều được ghi lại.
withdraw|v|rút (tiền)|She withdrew cash from the ATM.|Cô ấy rút tiền mặt ở ATM.
interest|n|lãi suất|The loan has low interest.|Khoản vay có lãi suất thấp.
mortgage|n|khoản vay thế chấp|They took out a mortgage.|Họ vay thế chấp.
fee|n|phí|A small fee applies.|Có áp dụng một khoản phí nhỏ.
cost-effective|adj|tiết kiệm chi phí|This is a cost-effective solution.|Đây là giải pháp tiết kiệm chi phí.
cut|v|cắt giảm|The firm cut costs by ten percent.|Công ty cắt giảm chi phí mười phần trăm.
surplus|n|thặng dư|The budget showed a surplus.|Ngân sách có thặng dư.
deficit|n|thâm hụt|The deficit is shrinking.|Thâm hụt đang thu hẹp.
`,
"Ngân hàng":`
account|n|tài khoản|I'd like to open an account.|Tôi muốn mở một tài khoản.
checking account|n|tài khoản thanh toán|Fees apply to this checking account.|Tài khoản thanh toán này có phí.
savings|n|tiền tiết kiệm|Her savings grew quickly.|Tiền tiết kiệm của cô ấy tăng nhanh.
loan|n|khoản vay|He applied for a business loan.|Anh ấy xin khoản vay kinh doanh.
borrow|v|vay, mượn|They borrowed money from the bank.|Họ vay tiền từ ngân hàng.
lend|v|cho vay|Banks lend to small firms.|Ngân hàng cho các công ty nhỏ vay.
credit|n|tín dụng|Check your credit limit.|Hãy kiểm tra hạn mức tín dụng.
debit|n|ghi nợ|Use your debit card.|Hãy dùng thẻ ghi nợ.
statement|n|bản sao kê|Your statement arrives monthly.|Sao kê của bạn được gửi hằng tháng.
overdraft|n|thấu chi|An overdraft fee was charged.|Phí thấu chi đã bị tính.
transfer|n|chuyển khoản|The transfer takes a day.|Việc chuyển khoản mất một ngày.
wire|v|chuyển tiền qua ngân hàng|Please wire the funds today.|Vui lòng chuyển tiền trong hôm nay.
teller|n|giao dịch viên|The teller counted the cash.|Giao dịch viên đếm tiền mặt.
branch|n|chi nhánh|Visit our nearest branch.|Hãy đến chi nhánh gần nhất.
currency|n|tiền tệ|Exchange currency at the airport.|Đổi tiền tại sân bay.
exchange rate|n|tỷ giá|The exchange rate changes daily.|Tỷ giá thay đổi hằng ngày.
cashier|n|thu ngân|Pay the cashier at the front.|Thanh toán cho thu ngân ở phía trước.
verify|v|xác minh|We need to verify your identity.|Chúng tôi cần xác minh danh tính của bạn.
authorize|v|ủy quyền, cho phép|Authorize the payment online.|Hãy cho phép thanh toán trực tuyến.
PIN|n|mã PIN|Never share your PIN.|Đừng bao giờ chia sẻ mã PIN.
collateral|n|tài sản thế chấp|The loan needs collateral.|Khoản vay cần tài sản thế chấp.
maturity|n|ngày đáo hạn|The bond reaches maturity next year.|Trái phiếu đáo hạn vào năm sau.
credit score|n|điểm tín dụng|A high credit score helps you.|Điểm tín dụng cao có lợi cho bạn.
minimum payment|n|khoản thanh toán tối thiểu|Make at least the minimum payment.|Hãy trả ít nhất khoản tối thiểu.
`,
"Marketing":`
campaign|n|chiến dịch|The campaign targets young adults.|Chiến dịch nhắm vào người trẻ.
target|v|nhắm đến|We target busy professionals.|Chúng tôi nhắm đến dân văn phòng bận rộn.
brand|n|thương hiệu|It is a well-known brand.|Đó là thương hiệu nổi tiếng.
slogan|n|khẩu hiệu|Their slogan is easy to remember.|Khẩu hiệu của họ dễ nhớ.
commercial|n|quảng cáo trên TV/radio|The commercial aired during the game.|Quảng cáo được phát trong trận đấu.
billboard|n|biển quảng cáo|A billboard stands by the highway.|Một biển quảng cáo đứng cạnh đường cao tốc.
brochure|n|tờ rơi, sách giới thiệu|Pick up a brochure at the desk.|Hãy lấy một tờ giới thiệu ở quầy.
flyer|n|tờ rơi|Volunteers handed out flyers.|Tình nguyện viên phát tờ rơi.
sample|n|hàng mẫu|Free samples are available.|Có hàng mẫu miễn phí.
trend|n|xu hướng|Online shopping is a growing trend.|Mua sắm trực tuyến là xu hướng đang tăng.
market share|n|thị phần|The firm increased its market share.|Công ty tăng thị phần.
consumer|n|người tiêu dùng|Consumers prefer lower prices.|Người tiêu dùng thích giá thấp hơn.
demographic|n|nhóm nhân khẩu học|The ad suits this demographic.|Quảng cáo phù hợp nhóm này.
endorse|v|bảo chứng|A star endorsed the shoes.|Một ngôi sao bảo chứng cho đôi giày.
sponsor|n|nhà tài trợ|A bank is the main sponsor.|Một ngân hàng là nhà tài trợ chính.
feedback|n|phản hồi|We value your feedback.|Chúng tôi trân trọng phản hồi của bạn.
testimonial|n|lời chứng thực|The site shows customer testimonials.|Trang web có lời chứng thực của khách hàng.
loyalty|n|sự trung thành|Loyalty programs reward regular shoppers.|Chương trình khách hàng thân thiết thưởng người mua đều.
coupon|n|phiếu giảm giá|Use this coupon at checkout.|Dùng phiếu này khi thanh toán.
clearance|n|hàng xả kho|Clearance items are half price.|Hàng xả kho giảm một nửa.
rebate|n|tiền hoàn lại|Apply for a rebate online.|Đăng ký nhận tiền hoàn lại trực tuyến.
exclusive|adj|độc quyền|This is an exclusive offer.|Đây là ưu đãi độc quyền.
reputation|n|danh tiếng|The firm has a strong reputation.|Công ty có danh tiếng mạnh.
publicize|v|quảng bá|The event was publicized widely.|Sự kiện được quảng bá rộng rãi.
outlet|n|cửa hàng, điểm bán|The brand opened a new outlet.|Thương hiệu mở một điểm bán mới.
`,
"Mua sắm & giao hàng":`
purchase|v|mua|She purchased two tickets.|Cô ấy mua hai vé.
order|n|đơn hàng|Your order has shipped.|Đơn hàng của bạn đã được gửi.
receipt|n|biên lai|Keep your receipt for returns.|Hãy giữ biên lai để đổi trả.
exchange|v|đổi hàng|You may exchange it within 14 days.|Bạn có thể đổi trong 14 ngày.
return|v|trả lại|Return unused items for a refund.|Trả lại hàng chưa dùng để được hoàn tiền.
deliver|v|giao hàng|We deliver within two days.|Chúng tôi giao hàng trong hai ngày.
delivery|n|việc giao hàng|Delivery is free over $50.|Giao hàng miễn phí cho đơn trên 50 đô.
courier|n|người chuyển phát|A courier brought the documents.|Người chuyển phát mang tài liệu đến.
postage|n|bưu phí|Postage is included.|Đã bao gồm bưu phí.
tracking number|n|mã theo dõi vận đơn|Enter your tracking number.|Hãy nhập mã theo dõi vận đơn.
backorder|n|hàng đặt trước chờ nhập|The item is on backorder.|Mặt hàng đang chờ nhập.
in stock|adj|còn hàng|The jacket is in stock.|Chiếc áo khoác còn hàng.
out of stock|adj|hết hàng|That size is out of stock.|Cỡ đó đã hết hàng.
retail|n|bán lẻ|She works in retail.|Cô ấy làm trong ngành bán lẻ.
wholesale|n|bán buôn|We buy at wholesale prices.|Chúng tôi mua với giá bán buôn.
bulk|n|số lượng lớn|Buy in bulk to save money.|Mua số lượng lớn để tiết kiệm.
checkout|n|quầy thanh toán|Lines at checkout were long.|Hàng chờ ở quầy thanh toán rất dài.
cart|n|giỏ hàng|Add the item to your cart.|Thêm mặt hàng vào giỏ hàng.
payment method|n|phương thức thanh toán|Choose a payment method.|Hãy chọn phương thức thanh toán.
shipping|n|vận chuyển|Shipping takes three days.|Vận chuyển mất ba ngày.
packaging|n|bao bì|The packaging is recyclable.|Bao bì có thể tái chế.
damaged|adj|bị hư hỏng|The box arrived damaged.|Hộp đến nơi bị hư hỏng.
replacement|n|hàng thay thế|We will send a replacement.|Chúng tôi sẽ gửi hàng thay thế.
complaint|n|khiếu nại|File a complaint online.|Hãy gửi khiếu nại trực tuyến.
apologize|v|xin lỗi|We apologize for the delay.|Chúng tôi xin lỗi vì sự chậm trễ.
`,
"Du lịch":`
boarding pass|n|thẻ lên máy bay|Show your boarding pass at the gate.|Xuất trình thẻ lên máy bay ở cổng.
gate|n|cổng ra máy bay|Go to gate 12.|Hãy đến cổng 12.
baggage claim|n|khu nhận hành lý|Meet me at baggage claim.|Gặp tôi ở khu nhận hành lý.
customs|n|hải quan|Pass through customs first.|Hãy qua hải quan trước.
passport|n|hộ chiếu|Your passport must be valid.|Hộ chiếu của bạn phải còn hạn.
visa|n|thị thực|She applied for a work visa.|Cô ấy xin thị thực lao động.
fare|n|giá vé|The bus fare went up.|Giá vé xe buýt tăng.
one-way|adj|một chiều|I need a one-way ticket.|Tôi cần vé một chiều.
round-trip|adj|khứ hồi|A round-trip ticket costs $400.|Vé khứ hồi giá 400 đô.
connecting flight|n|chuyến bay nối chuyến|Our connecting flight was late.|Chuyến bay nối chuyến của chúng tôi bị trễ.
layover|n|thời gian quá cảnh|We had a four-hour layover.|Chúng tôi quá cảnh bốn tiếng.
cancel|v|hủy|The flight was canceled.|Chuyến bay bị hủy.
board|v|lên (tàu, xe, máy bay)|Passengers may now board.|Hành khách có thể lên máy bay.
aisle|n|lối đi|I prefer an aisle seat.|Tôi thích ghế cạnh lối đi.
check in|v|làm thủ tục|Check in two hours early.|Hãy làm thủ tục sớm hai tiếng.
check out|v|trả phòng|Guests must check out by noon.|Khách phải trả phòng trước trưa.
vacancy|n|phòng trống|The hotel has no vacancy.|Khách sạn hết phòng.
suite|n|phòng suite|They booked a suite.|Họ đặt một phòng suite.
amenities|n|tiện nghi|The hotel offers many amenities.|Khách sạn có nhiều tiện nghi.
sightseeing|n|tham quan|We went sightseeing in Hue.|Chúng tôi đi tham quan ở Huế.
guided tour|n|tour có hướng dẫn|Join a guided tour of the castle.|Hãy tham gia tour có hướng dẫn tham quan lâu đài.
excursion|n|chuyến đi chơi ngắn|We took an excursion to the island.|Chúng tôi có chuyến đi ra đảo.
souvenir|n|quà lưu niệm|She bought a souvenir.|Cô ấy mua một món quà lưu niệm.
shuttle|n|xe đưa đón|A shuttle runs to the airport.|Xe đưa đón chạy ra sân bay.
turbulence|n|nhiễu động|The plane hit turbulence.|Máy bay gặp nhiễu động.
depart|v|khởi hành|The train departs at six.|Tàu khởi hành lúc sáu giờ.
`,
"Nhà hàng":`
appetizer|n|món khai vị|We shared an appetizer.|Chúng tôi chia nhau một món khai vị.
entrée|n|món chính|The entrée comes with a salad.|Món chính kèm một đĩa salad.
dessert|n|món tráng miệng|Would you like dessert?|Bạn dùng tráng miệng không?
menu|n|thực đơn|May I see the menu?|Cho tôi xem thực đơn được không?
beverage|n|đồ uống|Beverages are free.|Đồ uống miễn phí.
cuisine|n|ẩm thực|She loves Thai cuisine.|Cô ấy thích ẩm thực Thái.
chef|n|đầu bếp|The chef created a new dish.|Đầu bếp tạo ra món mới.
waiter|n|nam phục vụ bàn|The waiter took our order.|Phục vụ ghi món cho chúng tôi.
tip|n|tiền boa|A tip is not required.|Không bắt buộc boa.
bill|n|hóa đơn|Can we have the bill?|Cho chúng tôi hóa đơn nhé?
catering|n|dịch vụ ăn uống|A firm provides catering.|Một công ty cung cấp dịch vụ ăn uống.
reserve|v|đặt trước|I reserved a table for four.|Tôi đã đặt bàn cho bốn người.
booking|n|việc đặt chỗ|Booking is required.|Bắt buộc đặt chỗ trước.
seating|n|chỗ ngồi|Outdoor seating is available.|Có chỗ ngồi ngoài trời.
special|n|món đặc biệt trong ngày|Today's special is soup.|Món đặc biệt hôm nay là súp.
vegetarian|adj|ăn chay|We offer vegetarian dishes.|Chúng tôi có món chay.
ingredient|n|nguyên liệu|Fresh ingredients matter.|Nguyên liệu tươi rất quan trọng.
recipe|n|công thức|She shared her recipe.|Cô ấy chia sẻ công thức.
buffet|n|tiệc đứng|Breakfast is a buffet.|Bữa sáng là tiệc đứng.
takeout|n|đồ mang đi|We ordered takeout.|Chúng tôi gọi đồ mang đi.
leftovers|n|đồ ăn thừa|Take the leftovers home.|Mang đồ thừa về nhà.
refill|n|rót thêm|Coffee refills are free.|Cà phê rót thêm miễn phí.
fully booked|adj|kín chỗ|The restaurant is fully booked.|Nhà hàng kín chỗ.
dine|v|dùng bữa|We dined at a local place.|Chúng tôi ăn tối ở một quán địa phương.
`,
"Sản xuất":`
assembly line|n|dây chuyền lắp ráp|The assembly line runs all day.|Dây chuyền lắp ráp chạy cả ngày.
factory|n|nhà máy|The factory employs 500 workers.|Nhà máy có 500 công nhân.
machinery|n|máy móc|New machinery was installed.|Máy móc mới đã được lắp đặt.
equipment|n|thiết bị|Check the equipment daily.|Kiểm tra thiết bị hằng ngày.
quality control|n|kiểm soát chất lượng|Quality control checks each unit.|Bộ phận kiểm soát chất lượng kiểm từng sản phẩm.
raw material|n|nguyên liệu thô|Raw materials cost more now.|Nguyên liệu thô giờ đắt hơn.
output|n|sản lượng|Output rose by 15 percent.|Sản lượng tăng 15 phần trăm.
capacity|n|công suất, sức chứa|The plant is at full capacity.|Nhà máy đang hoạt động hết công suất.
prototype|n|mẫu thử|They built a prototype.|Họ đã chế tạo một mẫu thử.
durable|adj|bền|The case is very durable.|Vỏ máy rất bền.
inspect|v|kiểm tra|Inspectors will inspect the site.|Thanh tra sẽ kiểm tra hiện trường.
inspection|n|cuộc kiểm tra|The inspection passed.|Cuộc kiểm tra đã đạt.
safety|n|an toàn|Wear a helmet for safety.|Đội mũ bảo hộ để an toàn.
hazard|n|mối nguy hiểm|Wet floors are a hazard.|Sàn ướt là mối nguy hiểm.
regulation|n|quy định|Follow all safety regulations.|Tuân thủ mọi quy định an toàn.
dispose|v|vứt bỏ, xử lý|Dispose of waste properly.|Xử lý rác thải đúng cách.
recycle|v|tái chế|Please recycle paper.|Vui lòng tái chế giấy.
blueprint|n|bản thiết kế|The blueprint shows the layout.|Bản thiết kế thể hiện bố cục.
lubricate|v|bôi trơn|Lubricate the parts monthly.|Bôi trơn các bộ phận hằng tháng.
component|n|linh kiện|Each component is tested.|Từng linh kiện đều được kiểm tra.
mass-produce|v|sản xuất hàng loạt|They mass-produce the toys.|Họ sản xuất hàng loạt đồ chơi.
supervise|v|giám sát|She supervises 20 workers.|Cô ấy giám sát 20 công nhân.
foreman|n|đốc công|The foreman gave instructions.|Đốc công đưa ra chỉ dẫn.
stockpile|v|tích trữ|They stockpiled spare parts.|Họ tích trữ phụ tùng.
`,
"Công nghệ":`
software|n|phần mềm|Update your software regularly.|Hãy cập nhật phần mềm thường xuyên.
hardware|n|phần cứng|The hardware is out of date.|Phần cứng đã lỗi thời.
database|n|cơ sở dữ liệu|The database holds all records.|Cơ sở dữ liệu lưu mọi hồ sơ.
download|v|tải xuống|Download the app for free.|Tải ứng dụng miễn phí.
upload|v|tải lên|Upload your photos here.|Tải ảnh của bạn lên đây.
firewall|n|tường lửa|A firewall protects the network.|Tường lửa bảo vệ mạng.
encrypt|v|mã hóa|Files are encrypted automatically.|Tệp được mã hóa tự động.
log in|v|đăng nhập|Log in with your email.|Đăng nhập bằng email của bạn.
browser|n|trình duyệt|Use the latest browser.|Dùng trình duyệt mới nhất.
device|n|thiết bị|The app works on any device.|Ứng dụng chạy trên mọi thiết bị.
wireless|adj|không dây|Wireless access is free.|Truy cập không dây miễn phí.
bandwidth|n|băng thông|We need more bandwidth.|Chúng tôi cần thêm băng thông.
server|n|máy chủ|The server crashed.|Máy chủ bị sập.
crash|v|bị treo, sập|The program crashed twice.|Chương trình bị treo hai lần.
glitch|n|lỗi nhỏ|A glitch delayed the launch.|Một lỗi nhỏ làm chậm buổi ra mắt.
update|n|bản cập nhật|The update fixes bugs.|Bản cập nhật sửa lỗi.
compatible|adj|tương thích|Is it compatible with Mac?|Nó có tương thích với Mac không?
automate|v|tự động hóa|They automated the process.|Họ tự động hóa quy trình.
digital|adj|kỹ thuật số|We are going digital.|Chúng tôi đang chuyển sang kỹ thuật số.
interface|n|giao diện|The interface is easy to use.|Giao diện dễ sử dụng.
user-friendly|adj|dễ sử dụng|The site is user-friendly.|Trang web dễ sử dụng.
cloud storage|n|lưu trữ đám mây|Save it to cloud storage.|Hãy lưu vào kho đám mây.
subscribe|v|đăng ký (dịch vụ)|Subscribe to our newsletter.|Đăng ký nhận bản tin của chúng tôi.
configure|v|cấu hình|Configure the settings first.|Hãy cấu hình cài đặt trước.
outage|n|sự cố mất điện/mạng|An outage lasted an hour.|Sự cố gián đoạn kéo dài một tiếng.
`,
"Y tế":`
appointment|n|cuộc hẹn|I have a dental appointment.|Tôi có hẹn khám răng.
prescription|n|đơn thuốc|Fill your prescription at the pharmacy.|Hãy mua thuốc theo đơn tại hiệu thuốc.
pharmacy|n|hiệu thuốc|The pharmacy closes at nine.|Hiệu thuốc đóng cửa lúc chín giờ.
symptom|n|triệu chứng|List your symptoms.|Hãy nêu các triệu chứng.
diagnose|v|chẩn đoán|The doctor diagnosed the flu.|Bác sĩ chẩn đoán cúm.
treatment|n|điều trị|The treatment takes a week.|Việc điều trị mất một tuần.
physician|n|bác sĩ|See a physician soon.|Hãy sớm gặp bác sĩ.
surgeon|n|bác sĩ phẫu thuật|The surgeon was experienced.|Bác sĩ phẫu thuật có kinh nghiệm.
patient|n|bệnh nhân|The patient is recovering.|Bệnh nhân đang hồi phục.
checkup|n|khám sức khỏe|Schedule an annual checkup.|Hãy lên lịch khám sức khỏe hằng năm.
insurance|n|bảo hiểm|Does insurance cover this?|Bảo hiểm có chi trả khoản này không?
coverage|n|phạm vi bảo hiểm|The plan offers full coverage.|Gói bảo hiểm có phạm vi đầy đủ.
claim|n|yêu cầu bồi thường|File a claim within 30 days.|Nộp yêu cầu bồi thường trong 30 ngày.
premium|n|phí bảo hiểm|The premium is paid monthly.|Phí bảo hiểm trả hằng tháng.
clinic|n|phòng khám|The clinic opens at eight.|Phòng khám mở lúc tám giờ.
dosage|n|liều dùng|Follow the recommended dosage.|Hãy tuân theo liều dùng khuyến nghị.
side effect|n|tác dụng phụ|Side effects are rare.|Tác dụng phụ rất hiếm.
allergy|n|dị ứng|He has a nut allergy.|Anh ấy dị ứng hạt.
recover|v|hồi phục|She recovered quickly.|Cô ấy hồi phục nhanh.
vaccine|n|vắc-xin|Get the flu vaccine.|Hãy tiêm vắc-xin cúm.
fitness|n|thể lực|The gym improves fitness.|Phòng tập cải thiện thể lực.
wellness|n|sức khỏe tổng thể|The firm runs a wellness program.|Công ty có chương trình chăm sóc sức khỏe.
referral|n|giấy giới thiệu|You need a referral to see him.|Bạn cần giấy giới thiệu để gặp anh ấy.
`,
"Nhà cửa & BĐS":`
lease|n|hợp đồng thuê|The lease ends in June.|Hợp đồng thuê kết thúc vào tháng Sáu.
tenant|n|người thuê nhà|Tenants must pay by the first.|Người thuê phải trả trước mùng một.
landlord|n|chủ nhà|The landlord fixed the roof.|Chủ nhà sửa mái.
rent|n|tiền thuê|Rent is due on Monday.|Tiền thuê đến hạn vào thứ Hai.
property|n|bất động sản|The property is for sale.|Bất động sản đang được rao bán.
real estate|n|bất động sản|She works in real estate.|Cô ấy làm trong ngành bất động sản.
utilities|n|tiện ích (điện nước)|Utilities are included in the rent.|Tiền điện nước đã gồm trong tiền thuê.
furnished|adj|có sẵn nội thất|The apartment is fully furnished.|Căn hộ đầy đủ nội thất.
spacious|adj|rộng rãi|The office is spacious.|Văn phòng rộng rãi.
renovate|v|cải tạo|They will renovate the lobby.|Họ sẽ cải tạo sảnh.
renovation|n|việc cải tạo|Renovations begin in May.|Việc cải tạo bắt đầu vào tháng Năm.
contractor|n|nhà thầu|The contractor built the deck.|Nhà thầu đã xây sàn gỗ.
construction|n|xây dựng|Construction will end by spring.|Việc xây dựng sẽ xong vào mùa xuân.
foundation|n|móng, nền tảng|The foundation was poured.|Móng đã được đổ.
permit|n|giấy phép|You need a building permit.|Bạn cần giấy phép xây dựng.
zoning|n|quy hoạch|Zoning rules limit height.|Quy hoạch giới hạn chiều cao.
occupancy|n|tỷ lệ lấp đầy|Occupancy is at 90 percent.|Tỷ lệ lấp đầy là 90 phần trăm.
vacate|v|dọn đi|Tenants must vacate by May.|Người thuê phải dọn đi trước tháng Năm.
down payment|n|tiền đặt cọc|The down payment is 20 percent.|Tiền đặt cọc là 20 phần trăm.
maintenance|n|bảo trì|Maintenance fixed the heater.|Bộ phận bảo trì sửa máy sưởi.
plumbing|n|hệ thống ống nước|The plumbing needs repair.|Hệ thống ống nước cần sửa.
facility|n|cơ sở vật chất|The facility has a gym.|Cơ sở có phòng gym.
premises|n|khuôn viên, mặt bằng|No smoking on the premises.|Cấm hút thuốc trong khuôn viên.
parking lot|n|bãi đỗ xe|Park in the north lot.|Hãy đỗ ở bãi phía bắc.
`,
"Sự kiện & hội nghị":`
conference|n|hội nghị|She spoke at the conference.|Cô ấy phát biểu tại hội nghị.
seminar|n|hội thảo|The seminar starts at ten.|Hội thảo bắt đầu lúc mười giờ.
workshop|n|buổi workshop|Join our free workshop.|Hãy tham gia workshop miễn phí.
keynote|n|bài phát biểu chính|The keynote address inspired everyone.|Bài phát biểu chính truyền cảm hứng cho mọi người.
exhibit|n|triển lãm|The exhibit opens Saturday.|Triển lãm mở cửa thứ Bảy.
booth|n|gian hàng|Visit our booth at the fair.|Hãy ghé gian hàng của chúng tôi tại hội chợ.
trade show|n|hội chợ thương mại|They met at a trade show.|Họ gặp nhau tại hội chợ thương mại.
register|v|đăng ký|Register online by Friday.|Đăng ký trực tuyến trước thứ Sáu.
registration|n|việc đăng ký|Registration closes soon.|Đăng ký sắp đóng.
attendee|n|người tham dự|Attendees receive a badge.|Người tham dự nhận thẻ.
venue|n|địa điểm tổ chức|The venue holds 500 people.|Địa điểm chứa 500 người.
banquet|n|tiệc lớn|A banquet follows the ceremony.|Tiệc lớn diễn ra sau buổi lễ.
ceremony|n|buổi lễ|The ceremony is at noon.|Buổi lễ diễn ra lúc trưa.
award|n|giải thưởng|He won an award.|Anh ấy giành giải thưởng.
honor|v|vinh danh|She was honored at the dinner.|Cô ấy được vinh danh tại bữa tối.
guest speaker|n|diễn giả khách mời|A guest speaker will attend.|Một diễn giả khách mời sẽ tham dự.
panel|n|ban thảo luận|Our panel discusses trade.|Ban thảo luận của chúng tôi bàn về thương mại.
session|n|phiên|The first session starts at nine.|Phiên đầu tiên bắt đầu lúc chín giờ.
reception|n|tiệc chiêu đãi|A reception will follow.|Sau đó có tiệc chiêu đãi.
RSVP|v|xác nhận tham dự|Please RSVP by Monday.|Vui lòng xác nhận tham dự trước thứ Hai.
invitation|n|lời mời|We sent out invitations.|Chúng tôi đã gửi lời mời.
organizer|n|người tổ chức|The organizer thanked everyone.|Người tổ chức cảm ơn mọi người.
fundraiser|n|sự kiện gây quỹ|The fundraiser raised $10,000.|Sự kiện gây quỹ thu 10.000 đô.
admission|n|vé vào cửa|Admission is free.|Vào cửa miễn phí.
`,
"Giải trí & truyền thông":`
audience|n|khán giả|The audience applauded.|Khán giả vỗ tay.
performance|n|buổi biểu diễn|The performance sold out.|Buổi biểu diễn đã hết vé.
rehearsal|n|buổi diễn tập|Rehearsal is at four.|Buổi diễn tập lúc bốn giờ.
gallery|n|phòng trưng bày|The gallery shows local art.|Phòng trưng bày giới thiệu nghệ thuật địa phương.
museum|n|bảo tàng|The museum opens daily.|Bảo tàng mở cửa hằng ngày.
critic|n|nhà phê bình|Critics praised the film.|Giới phê bình khen bộ phim.
review|n|bài đánh giá|The book got good reviews.|Cuốn sách nhận đánh giá tốt.
broadcast|v|phát sóng|The game will be broadcast live.|Trận đấu sẽ được phát sóng trực tiếp.
journalist|n|nhà báo|The journalist interviewed her.|Nhà báo đã phỏng vấn cô ấy.
article|n|bài báo|Read the article on page two.|Hãy đọc bài báo ở trang hai.
editor|n|biên tập viên|The editor changed the title.|Biên tập viên đổi tiêu đề.
publish|v|xuất bản|They published a new novel.|Họ xuất bản một tiểu thuyết mới.
subscription|n|gói đăng ký|Renew your subscription today.|Gia hạn gói đăng ký hôm nay.
press release|n|thông cáo báo chí|A press release was issued.|Một thông cáo báo chí đã được phát hành.
interview|n|cuộc phỏng vấn|The interview aired Friday.|Cuộc phỏng vấn lên sóng thứ Sáu.
documentary|n|phim tài liệu|The documentary won a prize.|Phim tài liệu giành giải.
premiere|n|buổi công chiếu|The premiere is next week.|Buổi công chiếu vào tuần sau.
cast|n|dàn diễn viên|The cast includes new actors.|Dàn diễn viên có các gương mặt mới.
exhibition|n|cuộc triển lãm|The exhibition draws crowds.|Triển lãm thu hút đông người.
screening|n|buổi chiếu phim|There is a screening tonight.|Tối nay có buổi chiếu phim.
sold out|adj|hết vé|The concert is sold out.|Buổi hòa nhạc đã hết vé.
headline|n|tiêu đề báo|The headline caught my eye.|Tiêu đề báo thu hút tôi.
`,
"Giao thông":`
commute|v|đi làm hằng ngày|She commutes by train.|Cô ấy đi làm bằng tàu.
traffic|n|giao thông|Traffic was heavy.|Giao thông rất đông.
detour|n|đường vòng|Take the detour on Elm Street.|Đi đường vòng ở phố Elm.
intersection|n|ngã tư|Turn left at the intersection.|Rẽ trái ở ngã tư.
pedestrian|n|người đi bộ|Pedestrians use the bridge.|Người đi bộ dùng cây cầu.
roadwork|n|công trình đường|Roadwork will cause delays.|Công trình đường sẽ gây chậm trễ.
highway|n|đường cao tốc|The highway is closed.|Đường cao tốc bị đóng.
platform|n|sân ga|The train leaves from platform 3.|Tàu rời từ sân ga số 3.
timetable|n|lịch tàu xe|Check the bus timetable.|Hãy xem lịch xe buýt.
passenger|n|hành khách|Passengers must wear seatbelts.|Hành khách phải thắt dây an toàn.
vehicle|n|phương tiện|Vehicles must stop here.|Phương tiện phải dừng ở đây.
rental|n|việc thuê|A car rental costs $40 a day.|Thuê xe giá 40 đô một ngày.
fuel|n|nhiên liệu|Fuel prices rose.|Giá nhiên liệu tăng.
toll|n|phí cầu đường|The toll is two dollars.|Phí cầu đường là hai đô.
carpool|v|đi chung xe|Employees carpool to work.|Nhân viên đi chung xe đến chỗ làm.
shipment|n|chuyến hàng|The shipment arrives Tuesday.|Chuyến hàng đến vào thứ Ba.
freight|n|hàng hóa vận chuyển|Freight costs have risen.|Chi phí vận chuyển hàng đã tăng.
cargo|n|hàng hóa|The ship carries cargo.|Con tàu chở hàng hóa.
dock|n|bến tàu|Trucks wait at the dock.|Xe tải chờ ở bến.
runway|n|đường băng|The runway is being repaired.|Đường băng đang được sửa.
terminal|n|nhà ga|Go to Terminal 2.|Hãy đến nhà ga số 2.
reroute|v|đổi tuyến|Buses were rerouted.|Xe buýt đã đổi tuyến.
`,
"Dịch vụ khách hàng":`
customer service|n|dịch vụ khách hàng|Call customer service for help.|Gọi dịch vụ khách hàng để được giúp.
inquiry|n|yêu cầu hỏi thông tin|We answered your inquiry.|Chúng tôi đã trả lời yêu cầu của bạn.
assist|v|hỗ trợ|How may I assist you?|Tôi có thể hỗ trợ gì cho bạn?
representative|n|đại diện|A representative will call you.|Một đại diện sẽ gọi cho bạn.
satisfaction|n|sự hài lòng|Customer satisfaction is our goal.|Sự hài lòng của khách hàng là mục tiêu.
inconvenience|n|sự bất tiện|We regret the inconvenience.|Chúng tôi xin lỗi vì sự bất tiện.
resolve|v|giải quyết|We resolved the issue today.|Chúng tôi đã giải quyết vấn đề hôm nay.
warranty|n|bảo hành|The warranty lasts a year.|Bảo hành kéo dài một năm.
refund|n|hoàn tiền|You will get a full refund.|Bạn sẽ được hoàn tiền đầy đủ.
follow up|v|theo dõi tiếp|I'll follow up next week.|Tôi sẽ theo dõi tiếp tuần sau.
appreciate|v|trân trọng|We appreciate your patience.|Chúng tôi trân trọng sự kiên nhẫn của bạn.
patience|n|sự kiên nhẫn|Thank you for your patience.|Cảm ơn sự kiên nhẫn của bạn.
helpline|n|đường dây hỗ trợ|Call the helpline.|Hãy gọi đường dây hỗ trợ.
hold|v|giữ máy|Please hold for a moment.|Xin vui lòng giữ máy một lát.
voicemail|n|hộp thư thoại|Leave a message on voicemail.|Hãy để lại lời nhắn trong hộp thư thoại.
ticket|n|phiếu yêu cầu hỗ trợ|Your ticket has been opened.|Phiếu hỗ trợ của bạn đã được mở.
escalate|v|chuyển cấp cao hơn|We escalated the issue.|Chúng tôi chuyển vấn đề lên cấp cao hơn.
courtesy|n|sự lịch sự|As a courtesy, we offer coffee.|Như một sự ưu đãi, chúng tôi mời cà phê.
`,
"Môi trường & Cộng đồng":`
sustainable|adj|bền vững|We use sustainable materials.|Chúng tôi dùng vật liệu bền vững.
conserve|v|bảo tồn, tiết kiệm|Conserve water in summer.|Hãy tiết kiệm nước vào mùa hè.
renewable|adj|tái tạo được|Solar is a renewable energy.|Mặt trời là năng lượng tái tạo.
emission|n|khí thải|Emissions dropped by ten percent.|Khí thải giảm mười phần trăm.
pollution|n|ô nhiễm|Pollution affects health.|Ô nhiễm ảnh hưởng sức khỏe.
volunteer|n|tình nguyện viên|Volunteers cleaned the beach.|Tình nguyện viên dọn bãi biển.
donate|v|quyên góp|She donated books to the library.|Cô ấy tặng sách cho thư viện.
charity|n|tổ chức từ thiện|The charity helps children.|Tổ chức từ thiện giúp trẻ em.
community|n|cộng đồng|The community center reopened.|Trung tâm cộng đồng mở lại.
resident|n|cư dân|Residents voted on the plan.|Cư dân bỏ phiếu cho kế hoạch.
municipal|adj|thuộc thành phố|The municipal park is free.|Công viên của thành phố miễn phí.
authority|n|nhà chức trách|Local authorities closed the road.|Chính quyền địa phương đóng đường.
initiative|n|sáng kiến|The city launched a recycling initiative.|Thành phố khởi động sáng kiến tái chế.
landscape|n|cảnh quan|The park has a lovely landscape.|Công viên có cảnh quan đẹp.
wildlife|n|động vật hoang dã|Protect local wildlife.|Hãy bảo vệ động vật hoang dã địa phương.
energy-efficient|adj|tiết kiệm năng lượng|Buy energy-efficient lights.|Hãy mua đèn tiết kiệm năng lượng.
`,
"Chung (tần suất cao)":`
acquire|v|giành được, mua lại|The firm acquired a rival.|Công ty mua lại một đối thủ.
adequate|adj|đủ, thỏa đáng|Is the lighting adequate?|Ánh sáng có đủ không?
adjust|v|điều chỉnh|Adjust the seat height.|Điều chỉnh độ cao ghế.
advance|n|sự tiến bộ; trước|Book in advance.|Hãy đặt trước.
affect|v|ảnh hưởng|Weather may affect the flight.|Thời tiết có thể ảnh hưởng chuyến bay.
aim|v|nhắm tới|We aim to finish by May.|Chúng tôi đặt mục tiêu xong trước tháng Năm.
anticipate|v|dự đoán, mong đợi|We anticipate strong sales.|Chúng tôi dự đoán doanh số mạnh.
apparent|adj|rõ ràng|The error was apparent.|Lỗi đã rõ ràng.
appropriate|adj|phù hợp|Wear appropriate clothing.|Hãy mặc trang phục phù hợp.
assume|v|cho rằng|I assume you've read it.|Tôi cho rằng bạn đã đọc rồi.
authentic|adj|chính hãng|This is an authentic painting.|Đây là bức tranh chính hãng.
cautious|adj|thận trọng|Be cautious with new software.|Hãy thận trọng với phần mềm mới.
clarify|v|làm rõ|Can you clarify the rule?|Bạn làm rõ quy định giúp được không?
commit|v|cam kết|We commit to quality.|Chúng tôi cam kết chất lượng.
concern|n|mối lo ngại|Safety is a major concern.|An toàn là mối lo ngại lớn.
conduct|v|tiến hành|They conducted a survey.|Họ tiến hành một khảo sát.
consecutive|adj|liên tiếp|It rained for three consecutive days.|Trời mưa ba ngày liên tiếp.
consistent|adj|nhất quán|Her work is consistent.|Công việc của cô ấy nhất quán.
contribute|v|đóng góp|Everyone contributed ideas.|Mọi người đều đóng góp ý tưởng.
convenient|adj|thuận tiện|The shop is convenient.|Cửa hàng rất thuận tiện.
crucial|adj|then chốt|Timing is crucial.|Thời điểm là then chốt.
currently|adv|hiện nay|We are currently hiring.|Hiện chúng tôi đang tuyển dụng.
dedicated|adj|tận tụy|She is a dedicated nurse.|Cô ấy là y tá tận tụy.
definitely|adv|chắc chắn|I will definitely attend.|Tôi chắc chắn sẽ tham dự.
delay|v|trì hoãn|The storm delayed the train.|Cơn bão làm tàu chậm.
detail|n|chi tiết|Please check every detail.|Hãy kiểm tra từng chi tiết.
determine|v|xác định|We must determine the cause.|Chúng ta phải xác định nguyên nhân.
effective|adj|hiệu quả|The new plan is effective.|Kế hoạch mới hiệu quả.
eliminate|v|loại bỏ|Eliminate unnecessary steps.|Loại bỏ các bước không cần thiết.
emphasize|v|nhấn mạnh|He emphasized safety.|Anh ấy nhấn mạnh sự an toàn.
enhance|v|nâng cao|Enhance your skills.|Nâng cao kỹ năng của bạn.
ensure|v|đảm bảo|Ensure all doors are locked.|Hãy đảm bảo mọi cửa đã khóa.
estimate|v|ước tính|We estimate 200 guests.|Chúng tôi ước tính 200 khách.
expand|v|mở rộng|The firm plans to expand.|Công ty định mở rộng.
extend|v|gia hạn, kéo dài|They extended the deadline.|Họ gia hạn hạn chót.
feature|n|tính năng|It has many features.|Nó có nhiều tính năng.
flexible|adj|linh hoạt|We offer flexible hours.|Chúng tôi có giờ làm linh hoạt.
frequently|adv|thường xuyên|He frequently travels abroad.|Anh ấy thường đi nước ngoài.
guarantee|v|đảm bảo|We guarantee fast delivery.|Chúng tôi đảm bảo giao nhanh.
implement|v|triển khai|They implemented a new policy.|Họ triển khai chính sách mới.
indicate|v|cho thấy|Data indicate a rise.|Dữ liệu cho thấy sự tăng.
initial|adj|ban đầu|The initial cost is low.|Chi phí ban đầu thấp.
likely|adj|có khả năng|It is likely to rain.|Có khả năng trời mưa.
mention|v|đề cập|She mentioned the price.|Cô ấy đề cập giá.
moderate|adj|vừa phải|Prices are moderate.|Giá cả vừa phải.
obtain|v|đạt được, lấy|Obtain a permit first.|Hãy xin giấy phép trước.
occur|v|xảy ra|The error occurred twice.|Lỗi xảy ra hai lần.
participate|v|tham gia|Everyone may participate.|Ai cũng có thể tham gia.
permit|v|cho phép|Smoking is not permitted.|Không được phép hút thuốc.
precisely|adv|chính xác|Arrive at precisely nine.|Hãy đến đúng chín giờ.
prefer|v|thích hơn|I prefer the morning flight.|Tôi thích chuyến bay buổi sáng hơn.
prevent|v|ngăn ngừa|Prevent accidents.|Ngăn ngừa tai nạn.
previous|adj|trước đó|See the previous page.|Xem trang trước.
primarily|adv|chủ yếu|We sell primarily online.|Chúng tôi bán chủ yếu trực tuyến.
promptly|adv|kịp thời|Reply promptly.|Hãy trả lời kịp thời.
properly|adv|đúng cách|Install it properly.|Hãy lắp đặt đúng cách.
provide|v|cung cấp|We provide free parking.|Chúng tôi cung cấp chỗ đỗ xe miễn phí.
publicly|adv|công khai|It was announced publicly.|Nó được công bố công khai.
range|n|phạm vi|A wide range of products.|Nhiều loại sản phẩm.
reduce|v|giảm|Reduce waste.|Giảm rác thải.
regarding|prep|liên quan đến|A question regarding payment.|Một câu hỏi liên quan đến thanh toán.
relevant|adj|liên quan|Provide relevant details.|Hãy cung cấp chi tiết liên quan.
remain|v|vẫn còn|Few seats remain.|Còn ít ghế.
remarkable|adj|đáng chú ý|A remarkable result.|Một kết quả đáng chú ý.
represent|v|đại diện|She represents the firm.|Cô ấy đại diện công ty.
reserve|v|đặt trước, giữ|Reserve a seat.|Đặt trước một chỗ.
resume|v|tiếp tục|Work will resume Monday.|Công việc sẽ tiếp tục vào thứ Hai.
retain|v|giữ lại|Retain your receipt.|Hãy giữ lại biên lai.
reveal|v|tiết lộ|The report revealed errors.|Báo cáo tiết lộ các lỗi.
roughly|adv|khoảng chừng|Roughly 50 people came.|Khoảng 50 người đã đến.
secure|v|đảm bảo, giành được|She secured a new client.|Cô ấy giành được khách hàng mới.
select|v|chọn|Select one option.|Chọn một lựa chọn.
severe|adj|nghiêm trọng|Severe delays are expected.|Dự kiến chậm trễ nghiêm trọng.
sufficient|adj|đủ|We have sufficient funds.|Chúng tôi có đủ quỹ.
suitable|adj|phù hợp|Find a suitable date.|Tìm một ngày phù hợp.
temporary|adj|tạm thời|A temporary worker.|Một nhân viên tạm thời.
thorough|adj|kỹ lưỡng|A thorough review.|Một cuộc rà soát kỹ lưỡng.
transmit|v|truyền|Transmit the file.|Truyền tệp.
undergo|v|trải qua|It will undergo repairs.|Nó sẽ được sửa chữa.
unique|adj|độc đáo|A unique design.|Thiết kế độc đáo.
utilize|v|sử dụng|Utilize every space.|Tận dụng mọi không gian.
valid|adj|còn hiệu lực|The coupon is valid till May.|Phiếu còn hiệu lực đến tháng Năm.
vary|v|khác nhau|Prices vary by size.|Giá khác nhau theo cỡ.
withdraw|v|rút lại|He withdrew his offer.|Anh ấy rút lại lời đề nghị.
`,
"Giới từ & liên từ (Part 5)":`
although|conj|mặc dù|Although it rained, we went.|Mặc dù trời mưa, chúng tôi vẫn đi.
despite|prep|bất chấp|Despite the delay, we arrived.|Bất chấp sự chậm trễ, chúng tôi vẫn tới.
whereas|conj|trong khi (đối lập)|He is shy, whereas she is outgoing.|Anh ấy nhút nhát, trong khi cô ấy cởi mở.
unless|conj|trừ khi|Unless you call, I'll wait.|Trừ khi bạn gọi, tôi sẽ chờ.
provided that|conj|với điều kiện|Provided that you pay, we ship.|Với điều kiện bạn trả tiền, chúng tôi sẽ gửi.
in case of|prep|trong trường hợp|In case of fire, use the stairs.|Khi có cháy, hãy dùng cầu thang bộ.
due to|prep|do, bởi vì|Due to rain, the event moved.|Do mưa, sự kiện được dời.
owing to|prep|do|Owing to illness, he stayed home.|Do bệnh, anh ấy ở nhà.
prior to|prep|trước khi|Prior to departure, check in.|Trước khi khởi hành, hãy làm thủ tục.
subsequent to|prep|sau khi|Subsequent to the meeting, we left.|Sau cuộc họp, chúng tôi rời đi.
in accordance with|prep|theo đúng|Act in accordance with the rules.|Hành động theo đúng quy định.
in addition to|prep|ngoài ra|In addition to salary, there are perks.|Ngoài lương còn có phúc lợi.
as long as|conj|miễn là|Come as long as you're free.|Hãy đến miễn là bạn rảnh.
whether|conj|liệu rằng|I wonder whether he knows.|Tôi tự hỏi liệu anh ấy có biết.
since|conj|kể từ khi|Since May, sales rose.|Kể từ tháng Năm, doanh số tăng.
throughout|prep|suốt|It rained throughout the day.|Trời mưa suốt cả ngày.
within|prep|trong vòng|Reply within two days.|Trả lời trong vòng hai ngày.
until|prep|cho đến khi|Wait until noon.|Chờ đến trưa.
by|prep|trước, muộn nhất là|Finish by Friday.|Hoàn thành trước thứ Sáu.
between|prep|giữa (hai)|Between you and me.|Giữa tôi và bạn.
among|prep|giữa (nhiều)|Among the staff, she is the best.|Trong số nhân viên, cô ấy giỏi nhất.
regardless of|prep|bất kể|Open to all, regardless of age.|Mở cho mọi người, bất kể tuổi.
instead of|prep|thay vì|Take the bus instead of a taxi.|Đi xe buýt thay vì taxi.
rather than|conj|hơn là|Call rather than email.|Hãy gọi hơn là gửi email.
nevertheless|adv|tuy nhiên|Nevertheless, we proceeded.|Tuy nhiên, chúng tôi vẫn tiến hành.
furthermore|adv|hơn nữa|Furthermore, it is cheaper.|Hơn nữa, nó rẻ hơn.
therefore|adv|vì vậy|Therefore, we canceled.|Vì vậy, chúng tôi hủy.
otherwise|adv|nếu không thì|Hurry, otherwise you'll miss it.|Nhanh lên, nếu không bạn sẽ lỡ.
meanwhile|adv|trong khi đó|Meanwhile, the team waited.|Trong khi đó, nhóm chờ.
`,
"Cụm động từ & collocation":`
look into|v|điều tra, xem xét|We will look into the matter.|Chúng tôi sẽ xem xét vấn đề.
carry out|v|thực hiện|They carried out the plan.|Họ thực hiện kế hoạch.
set up|v|thiết lập|Set up a meeting.|Sắp xếp một cuộc họp.
turn down|v|từ chối|She turned down the offer.|Cô ấy từ chối lời đề nghị.
take over|v|tiếp quản|He took over the project.|Anh ấy tiếp quản dự án.
fill out|v|điền (mẫu)|Fill out this form.|Điền vào mẫu này.
fill in for|v|làm thay|I'll fill in for you.|Tôi sẽ làm thay bạn.
put off|v|hoãn lại|Don't put off the work.|Đừng hoãn công việc.
call off|v|hủy bỏ|The match was called off.|Trận đấu bị hủy.
run out of|v|hết (thứ gì)|We ran out of paper.|Chúng tôi hết giấy.
come up with|v|nghĩ ra|She came up with an idea.|Cô ấy nghĩ ra một ý tưởng.
get along with|v|hòa hợp|He gets along with everyone.|Anh ấy hòa hợp với mọi người.
keep track of|v|theo dõi|Keep track of expenses.|Theo dõi chi tiêu.
make a decision|v|đưa ra quyết định|Make a decision today.|Đưa ra quyết định hôm nay.
reach an agreement|v|đạt được thỏa thuận|They reached an agreement.|Họ đạt được thỏa thuận.
meet a deadline|v|kịp hạn chót|We met the deadline.|Chúng tôi kịp hạn chót.
take effect|v|có hiệu lực|The rule takes effect Monday.|Quy định có hiệu lực từ thứ Hai.
place an order|v|đặt hàng|Place an order online.|Đặt hàng trực tuyến.
make a reservation|v|đặt chỗ|Make a reservation today.|Đặt chỗ trong hôm nay.
in charge of|adj|phụ trách|She is in charge of sales.|Cô ấy phụ trách kinh doanh.
be responsible for|v|chịu trách nhiệm cho|He is responsible for safety.|Anh ấy chịu trách nhiệm an toàn.
be subject to|v|có thể bị, tùy thuộc|Prices are subject to change.|Giá có thể thay đổi.
be eligible for|v|đủ điều kiện|You are eligible for a refund.|Bạn đủ điều kiện hoàn tiền.
be scheduled to|v|được lên lịch|The talk is scheduled to start at 9.|Buổi nói chuyện được lên lịch lúc 9 giờ.
be expected to|v|được kỳ vọng|Sales are expected to rise.|Doanh số được kỳ vọng tăng.
be committed to|v|cam kết với|We are committed to quality.|Chúng tôi cam kết chất lượng.
`
};
