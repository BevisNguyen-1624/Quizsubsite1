import questionImage1 from "../../imports/image-5.jpeg?url";

  
 
 export interface Question {
  id: number;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  questionimg?: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "YODY được thành lập vào ngày tháng năm nào?",
    options: [
      { key: "A", text: "25/04/2015" },
      { key: "B", text: "24/05/2015" },
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
      { key: "A", text: "Make everyone look good - feel good"},
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
    questionimg: `url("${questionImage1}")`,
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
    range: "0-19",
    title: "CHÚT XÍU NỮA LÀ THÀNH 'SIÊU THỢ SĂN' RỒI! 🕵️‍♂️",
    description: '<span style=\'display:block;text-align:center\'>Cảm ơn bạn đã cùng YODY <i>“ngược dòng thời gian”</i>.<br />Có vài dấu ấn lịch sử đang chơi trốn tìm hơi kỹ một chút thôi.<br />Đừng nản lòng nhé, hãy F5 lại tinh thần, quay lại <i>“phục thù”</i> và <i>“hốt”</i> trọn bộ dấu ấn ngay thôi nào!</span>',
    buttonText: "Khám phá thêm về hành trình YODY tại đây",
    emoji: "🚀",
  },
  {
    range: "20",
    title: "Chúc mừng bạn đã hoàn thành “Săn dấu YODY” với kết quả tuyệt đối! 🎉",
    description: '<span style=\'display:block;text-align:center\'>Hy vọng những câu hỏi vừa rồi đã mang đến cho bạn thêm một góc nhìn thú vị về hành trình 12 năm của YODY.<br />Hẹn gặp bạn ở những hoạt động tiếp theo của Tuần lễ Văn hoá Tháng 4.<br />YODY xin cảm ơn.</span>',
    buttonText: "Khám phá thêm về hành trình YODY tại đây",
    emoji: "🏆",
  },
];

export function getScoreResult(score: number): ScoreResult {
  if (score <= 19) return scoreResults[0];
  if (score = 20) return scoreResults[1];
}
