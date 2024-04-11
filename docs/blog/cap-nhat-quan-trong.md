---
title: Cập nhật vnstock phiên bản v0.2.8.5 bổ sung tính năng mới, cải thiện trải nghiệm
---

![vnstock cập nhật phiên bản mới 0.2.8.5 cho phép kết nối DNSE API dễ dàng](https://vnstock.site/wp-content/uploads/2023/11/vnstock-v0.2.8.5-1024x576.png)

Chào cộng đồng vnstock!

Chúng tôi hân hạnh chia sẻ bản cập nhật vnstock v0.2.8.5 cùng nhiều tính năng quan trọng. Dưới đây là những cập nhật mới nhất mà chúng tôi tin rằng sẽ nâng cao trải nghiệm sử dụng và mở rộng khả năng tương thích của vnstock trong hệ sinh thái Python của bạn:

## Cập nhật quan trọng

> Chi tiết nội dung các bản cập nhật vnstock, bạn có thể xem thêm tại [Lịch sử phiên bản](https://docs.vnstock.site/changes_log/)

**1. Hoàn Thiện Tích Hợp DNSE LIGHTSPEED API:**

![DNSE API tích hợp ngay trong thư viện vnstock](https://vnstock.site/wp-content/uploads/2023/11/DNSE-lightspeed-API-1-1024x1024.png)

DNSE API tích hợp ngay trong bản cập nhật vnstock 0.2.8.5

vnstock giờ đây hoàn thiện tích hợp với [DNSE LIGHTSPEED API](https://hdsd.dnse.com.vn/san-pham-dich-vu/api-lightspeed), cho phép bạn thực hiện đầy đủ các giao dịch cơ sở và phái sinh từ tài khoản chứng khoán DNSE một cách thuận tiện. Tất cả việc bạn cần làm là cài đặt phiên bản vnstock mới nhất, import các hàm được cung cấp vào dự án và bắt đầu trải nghiệm. Bạn sẽ không còn phải mất nhiều thời gian nghiên cứu tài liệu API để tự viết code nữa. Mã nguồn dự án được công khai, minh bạch và đáng tin cậy. Hệ thống các hàm tương tác với API giao dịch của DNSE được cấu trúc tinh gọn và chặt chẽ giúp bạn làm quen và sử dụng nhanh chóng.

DNSE và SSI là hai công ty chứng khoán cung cấp rộng rãi truy cập API miễn phí cho khách hàng phổ thông để giao dịch chứng khoán với thị trường cơ sở lẫn phái sinh một cách dễ dàng. Một lựa chọn khác cho API giao dịch là Chứng khoán BIDV (BSC), tuy nhiên hiện nay API đang bị hạn chế cung cấp theo hướng dẫn của Sở giao dịch chứng khoán. Bạn có thể đăng ký sử dụng API của DNSE dễ dàng với tài khoản và mật khẩu hiện có trên nền tảng web để tra cứu thông tin, Smart OTP hoặc OTP gửi qua email yêu cầu bắt buộc khi đặt, sửa, hủy lệnh giao dịch.

**2. Xuất Dữ Liệu Amibroker CSV:**

vnstock nay hỗ trợ xuất dữ liệu giá thành file CSV theo định dạng Amibroker, giúp bạn nạp dữ liệu một cách dễ dàng và tiện lợi cho quá trình phân tích bằng Amibroker qua Import Wizard. Bạn có thể dành thêm chút thời gian để hoàn thiện việc tự động nạp dữ liệu cho Amibroker để loại bỏ quá trình nạp dữ liệu thủ công mất thời gian nếu có thể. 

**3. Nâng Cấp Hàm Truy Xuất Dữ Liệu Giá:**

Hàm truy xuất dữ liệu giá được nâng cấp, giúp hỗ trợ phân tích kỹ thuật một cách thuận lợi hơn. Bạn có thể linh hoạt chọn nguồn dữ liệu DNSE hoặc TCBS tùy thuộc vào mục đích sử dụng. Ngoài ra, vnstock bổ sung tùy chọn giúp định dạng cách trình bày dữ liệu theo chuẩn phổ biến, tạo điều kiện thuận lợi cho tích hợp với các thư viện Python khác như TA-lib và thuật toán backtesting ngay khi cài đặt vnstock.

**4. Cập Nhật Dữ Liệu Intraday:**

Hàm truy xuất dữ liệu Intraday được cập nhật, mang lại sự linh hoạt cao hơn bằng cách cho phép bạn bật/tắt dữ liệu phân loại nhà đầu tư cho các giao dịch khớp lệnh. Việc này giúp người dùng có thêm sự lựa chọn phù hợp khi phân tích dữ liệu khớp lệnh trong ngày dễ dàng hơn.

**5. Hướng Dẫn Sử Dụng với Các Thư Viện Python Khác:**

Bạn sẽ tìm thấy hướng dẫn chi tiết về cách cài đặt và sử dụng vnstock với các gói thư viện Python phổ biến như TA-lib và backtesting (đang hoàn thiện), giúp bạn khai phá tối đa tiềm năng của gói phần mềm vnstock.

## Lời kết

vnstock cam kết tiếp tục phát triển để cung cấp cho bạn một gói công cụ toàn diện, dễ sử dụng và mạnh mẽ. Chúng tôi tin rằng những cải tiến này sẽ giúp nâng cao hiệu suất công việc của bạn trong nghiên cứu và đầu tư.

Cảm ơn bạn đã luôn đồng hành và ủng hộ vnstock. Hãy tiếp tục theo dõi để không bỏ lỡ những cập nhật tuyệt vời tiếp theo!
