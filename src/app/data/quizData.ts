export interface Question {
  id: number;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  imageUrl?: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "YODY được thành lập vào ngày tháng năm nào?",
    options: [
      { key: "A", text: "25/04/2015" },
      { key: "B", text: "24/5/2015" },
      { key: "C", text: "24/05/2014" },
      { key: "D", text: "25/04/2014" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 2,
    question: "YODY ra mắt sự kiện Fashion Show đầu tiên vào năm nào?",
    options: [
      { key: "A", text: "2013" },
      { key: "B", text: "2014" },
      { key: "C", text: "2015" },
      { key: "D", text: "2016" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 3,
    question: "YODY đã chính thức nhận được bao nhiêu chứng nhận Kỷ lục Việt Nam?",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 4,
    question: "Đây là hình ảnh trong bộ sưu tập nào của YODY?",
    options: [
      { key: "A", text: "BST Mặc đẹp đón Tết 2015" },
      { key: "B", text: "BST Tết 2016" },
      { key: "C", text: "BST Tết Sum Vầy" },
      { key: "D", text: "BST Xuân Gắn Kết"}
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 5,
    question: "Cửa hàng YODY đầu tiên được mở tại địa chỉ nào?",
    options: [
      { key: "A", text: "64 Phạm Ngũ Lão" },
      { key: "B", text: "99 Trường Chinh" },
      { key: "C", text: "22 Chùa Bộc" },
      { key: "D", text: "45 Hồng Quang" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 6,
    question: "Văn phòng thăng hoa của YODY chính thức đi vào hoạt động từ năm nào?",
    options: [
      { key: "A", text: "2013" },
      { key: "B", text: "2014" },
      { key: "C", text: "2015" },
      { key: "D", text: "2016" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 7,
    question: "YODY là viết tắt của từ nào?",
    options: [
      { key: "A", text: "Youth & Destiny" },
      { key: "B", text: "Young & Dynamic" },
      { key: "C", text: "Year Of Dreamy" },
      { key: "D", text: "Young & Delight" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 8,
    question: "Sản phẩm áo gió 3C của YODY bao gồm những chữ C nào?",
    options: [
      { key: "A", text: "Chống thấm - Chống lạnh - Chống bụi" },
      { key: "B", text: "Cản gió - Cản nhiệt - Cản khuẩn" },
      { key: "C", text: "Cao cấp - Chất lượng - Co giãn" },
      { key: "D", text: "Cản gió - Cản bụi - Chống thấm nước"}
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 9,
    question: "Đâu không phải là 1 trong số những chiến dịch của YODY từ trước tới nay?",
    options: [
      { key: "A", text: "Bán hàng toàn dân" },
      { key: "B", text: "Sản phẩm chất lượng cao, dịch vụ 5 sao, giá bình dân" },
      { key: "C", text: "Bùng nổ doanh thu" },
      { key: "D", text: "Đánh phải thắng" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 10,
    question: "Cửa hàng YODY có diện tích lớn nhất và từng được công nhận là cửa hàng lớn nhất Việt Nam là cửa hàng nào?",
    options: [
      { key: "A", text: "YODY Thái Bình 3" },
      { key: "B", text: "YODY Buôn Ma Thuột" },
      { key: "C", text: "YODY Ngã Bảy" },
      { key: "D", text: "YODY Bắc Giang 3" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 11,
    question: "YODY lần lượt đặt chân vào Miền Trung và Miền Nam vào năm nào?",
    options: [
      { key: "A", text: "2014 - 2022" },
      { key: "B", text: "2017 - 2022" },
      { key: "C", text: "2018 - 2023" },
      { key: "D", text: "2015 - 2023" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 12,
    question: "Trong năm 2025, YODY đã bán được bao nhiêu sản phẩm áo Polo?",
    options: [
      { key: "A", text: "Gần 1 triệu sản phẩm" },
      { key: "B", text: "Trên 3 triệu sản phẩm" },
      { key: "C", text: "4 triệu sản phẩm" },
      { key: "D", text: "Xấp xỉ 2 triệu sản phẩm" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 13,
    question: "Đâu là đáp án đúng về tầm nhìn của YODY?",
    options: [
      { key: "A", text: "Make everyone look good - feel good"}
      { key: "B", text: "Tự do trong từng chuyển động" },
      { key: "C", text: "Everyday wear for everyone" },
      { key: "D", text: "Look good - Feel good" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 14,
    question: "Phần mềm bán hàng Unicorn được ra đời vào năm nào?",
    options: [
      { key: "A", text: "2021" },
      { key: "B", text: "2022" },
      { key: "C", text: "2023" },
      { key: "D", text: "2024" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 15,
    question: "YODY đã chính thức đổi màu thương hiệu từ Đen trắng thành Xanh vàng vào năm bao nhiêu?",
    options: [
      { key: "A", text: "2018" },
      { key: "B", text: "2020" },
      { key: "C", text: "2021" },
      { key: "D", text: "2022" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 16,
    question: "Năm 2016, YODY đã cán mốc bao nhiêu cửa hàng?",
    options: [
      { key: "A", text: "18 cửa hàng" },
      { key: "B", text: "20 cửa hàng" },
      { key: "C", text: "38 cửa hàng" },
      { key: "D", text: "48 cửa hàng" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 17,
    question: "Đâu không phải là KOL từng kết hợp cùng các BST của YODY?",
    options: [
      { key: "A", text: "Diễn viên Hồng Đăng - Hồng Diễm" },
      { key: "B", text: "Cầu thủ Văn Toàn" },
      { key: "C", text: "Diễn viên Bình An - Á hậu Phương Nga" },
      { key: "D", text: "Hoa hậu Đỗ Thị Hà" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 18,
    question: "YODY đã lọt vào Top 100 Doanh nghiệp có môi trường làm việc tốt nhất vào năm nào?",
    options: [
      { key: "A", text: "2021" },
      { key: "B", text: "2022" },
      { key: "C", text: "2023" },
      { key: "D", text: "2024" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 19,
    question: "Đây là hình ảnh trong BST nào của YODY?",
    options: [
      { key: "A", text: "Kết nối vạn vật" },
      { key: "B", text: "Kỷ nguyên mới" },
      { key: "C", text: "Chạm tới tương lai" },
      { key: "D", text: "Vững bước vươn xa" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 20,
    question: "Năm 2026 được YODY gọi là năm gì?",
    options: [
      { key: "A", text: "Tái sinh" },
      { key: "B", text: "Nền tảng" },
      { key: "C", text: "Bứt tốc" },
      { key: "D", text: "Đột phá" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
];

export interface ScoreResult {
  range: string;
  title: string;
  description: string;
  buttonText: string;
  emoji: string;
}

export const scoreResults: ScoreResult[] = [
  {
    range: "0-16",
    title: "Cảm ơn bạn đã tham gia hành trình SĂN DẤU YODY 🔍",
    description:
      'Có vẻ một vài “dấu vết” vẫn còn đang ẩn mình khá kỹ rồi! Đừng lo, mỗi câu hỏi là một mảnh ghép của hành trình 12 năm, và chúng ta hoàn toàn có thể khám phá lại bất cứ lúc nào tại [Landing page DÒNG THỜI GIAN YODY](https://dongthoigian.yody.io/)". \nCảm ơn bạn đã tham gia và hẹn gặp lại ở những hoạt động tiếp theo trong Hành trình Tuần lễ văn hoá Tháng 4 nhé! \nYODY xin cảm ơn!',
    buttonText: "Nâng tầm tư duy tại Culture Code 101",
    emoji: "🚀",
  },
  {
    range: "17-19",
    title: "Tư duy hệ thống của bạn rất ấn tượng!",
    description:
      'BWow, bạn đã đi rất xa trên hành trình SĂN DẤU YODY rồi 🔍Chỉ còn một chút nữa thôi là bạn đã có thể “phá đảo” toàn bộ dấu vết! Một vài chi tiết nhỏ có thể đã “đánh lừa” bạn, nhưng không sao, bạn có thể kiểm tra lại tất cả các cột mốc tại [Landing page DÒNG THỜI GIAN YODY](https://dongthoigian.yody.io/).\nCảm ơn bạn đã tham gia và hẹn gặp lại ở những hoạt động tiếp theo trong Hành trình Tuần lễ văn hoá Tháng 4 nhé! \nYODY xin cảm ơn!',
    buttonText: "Hoàn thiện hệ thống tại Culture Code 101",
    emoji: "⭐",
  },
  {
    range: "20",
    title: "Xuất sắc! Bạn là chuyên gia VHDN!",
    description:
      '🎉 XIN CHÚC MỪNG! \nBạn đã chính thức “phá tảng băng” thứ hai - minigame SĂN DẤU YODY! 🎉 Không chỉ là 20/20 điểm, mà còn là minh chứng cho việc bạn thực sự hiểu và đồng hành cùng hành trình của YODY qua từng cột mốc. Hành trình 12 năm vẫn còn rất nhiều câu chuyện thú vị đang chờ bạn khám phá thêm tại [Landing page DÒNG THỜI GIAN YODY](https://dongthoigian.yody.io/). Biết đâu bạn sẽ tìm thấy những “dấu ấn” mà mình chưa từng để ý trước đây 🔍 \nCảm ơn bạn đã tham gia và hẹn gặp lại ở những hoạt động tiếp theo trong Hành trình Tuần lễ văn hoá Tháng 4 nhé! \nYODY xin cảm ơn!!',
    buttonText: "Đăng ký Culture Code 101 ngay",
    emoji: "🏆",
  },
];

export function getScoreResult(score: number): ScoreResult {
  if (score <= 16) return scoreResults[0];
  if (score <= 19) return scoreResults[1];
  return scoreResults[2];
}
