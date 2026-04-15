export interface Question {
  id: number;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question:
      "Theo Edgar Schein, thành tố nào sau đây KHÔNG thuộc vào nhóm 'Biểu hiện quan sát được' của văn hóa doanh nghiệp?",
    options: [
      { key: "A", text: "Kiến trúc và không gian làm việc." },
      {
        key: "B",
        text: "Các giả định ngầm định (Underlying Assumptions).",
      },
      { key: "C", text: "Nghi lễ và lễ kỷ niệm." },
      { key: "D", text: "Cách thức xưng hô và ngôn ngữ sử dụng." },
    ],
    correctAnswer: "B",
    explanation:
      "Các giả định ngầm định (Assumptions) nằm ở tầng sâu nhất, không thể quan sát trực tiếp. Artifacts là tầng bề mặt (trang phục, nghi lễ, hành vi xưng hô...) và hoàn toàn có thể quan sát được.",
  },
  {
    id: 2,
    question:
      "Mô hình 3 tầng văn hóa của Edgar Schein bao gồm những tầng nào theo thứ tự từ ngoài vào trong?",
    options: [
      {
        key: "A",
        text: "Artifacts → Espoused Values → Underlying Assumptions.",
      },
      { key: "B", text: "Core Values → Behaviors → Symbols." },
      { key: "C", text: "Vision → Mission → Values." },
      { key: "D", text: "Beliefs → Norms → Behaviors." },
    ],
    correctAnswer: "A",
    explanation:
      "Mô hình Schein gồm 3 tầng: Tầng 1 - Artifacts (biểu hiện bề mặt), Tầng 2 - Espoused Values (giá trị tuyên bố), Tầng 3 - Underlying Assumptions (giả định ngầm định sâu nhất, khó thay đổi nhất).",
  },
  {
    id: 3,
    question:
      "Đâu là dấu hiệu cho thấy văn hóa doanh nghiệp đang được hình thành 'by default' (mặc nhiên) thay vì 'by design' (có chủ đích)?",
    options: [
      { key: "A", text: "Doanh nghiệp có bộ core values được công bố rõ ràng." },
      {
        key: "B",
        text: "Nhân viên hành động dựa trên 'cảm tính' và thói quen không được định hướng.",
      },
      {
        key: "C",
        text: "Ban lãnh đạo thường xuyên tổ chức các buổi đào tạo văn hóa.",
      },
      {
        key: "D",
        text: "Có hệ thống đánh giá năng lực hành vi hàng năm.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Khi nhân viên hành động theo cảm tính và thói quen không được định hướng, đó là dấu hiệu văn hóa đang hình thành mặc nhiên. Văn hóa 'by design' đòi hỏi sự chủ đích rõ ràng từ lãnh đạo và cả một hệ thống vận hành đồng bộ.",
  },
  {
    id: 4,
    question:
      "Trong hệ thống tư duy VHDN, 'Core Values' (giá trị cốt lõi) khác với 'Espoused Values' (giá trị tuyên bố) ở điểm nào?",
    options: [
      {
        key: "A",
        text: "Core Values là do ban lãnh đạo đặt ra, Espoused Values do nhân viên tự xác định.",
      },
      {
        key: "B",
        text: "Core Values được thể hiện qua hành vi thực tế, Espoused Values chỉ là tuyên bố trên giấy tờ.",
      },
      {
        key: "C",
        text: "Core Values thay đổi theo chiến lược, Espoused Values cố định theo thời gian.",
      },
      { key: "D", text: "Không có sự khác biệt, hai khái niệm này đồng nghĩa." },
    ],
    correctAnswer: "B",
    explanation:
      "Core Values thực sự là những giá trị được thể hiện qua hành vi hàng ngày. Espoused Values là những gì tổ chức tuyên bố nhưng chưa chắc đã thực hành. Khoảng cách giữa hai điều này là dấu hiệu của văn hóa thiếu nhất quán.",
  },
  {
    id: 5,
    question:
      "Yếu tố nào được coi là QUAN TRỌNG NHẤT trong việc xây dựng văn hóa doanh nghiệp bền vững?",
    options: [
      {
        key: "A",
        text: "Ngân sách đầu tư cho các hoạt động team building.",
      },
      {
        key: "B",
        text: "Hành vi và cách ứng xử của người lãnh đạo.",
      },
      {
        key: "C",
        text: "Số lượng nhân viên tham gia các khóa đào tạo.",
      },
      { key: "D", text: "Môi trường và cơ sở vật chất văn phòng." },
    ],
    correctAnswer: "B",
    explanation:
      "Lãnh đạo chính là 'kiến trúc sư' của văn hóa. Những gì lãnh đạo làm, khen thưởng, trừng phạt và chú ý đến sẽ định hình văn hóa mạnh hơn bất kỳ tuyên bố hay chính sách nào.",
  },
  {
    id: 6,
    question:
      "Theo tư duy hệ thống, điều gì xảy ra khi một doanh nghiệp có 'culture gap' (khoảng cách văn hóa)?",
    options: [
      {
        key: "A",
        text: "Nhân viên làm việc hiệu quả hơn do có sự cạnh tranh nội bộ.",
      },
      {
        key: "B",
        text: "Doanh nghiệp dễ dàng thích nghi với sự thay đổi thị trường.",
      },
      {
        key: "C",
        text: "Hành vi thực tế của tổ chức mâu thuẫn với giá trị tuyên bố, gây mất niềm tin.",
      },
      { key: "D", text: "Văn hóa trở nên đa dạng và phong phú hơn." },
    ],
    correctAnswer: "C",
    explanation:
      "Culture gap tạo ra sự mâu thuẫn giữa 'nói' và 'làm'. Điều này gây mất niềm tin nội bộ, giảm gắn kết nhân viên và làm suy yếu thương hiệu tuyển dụng của doanh nghiệp.",
  },
  {
    id: 7,
    question:
      "Trong mô hình '4 Cấp độ Trưởng thành Văn hóa', cấp độ nào thể hiện tổ chức đã đạt đến mức văn hóa tự vận hành như một hệ điều hành?",
    options: [
      { key: "A", text: "Cấp độ 1 - Văn hóa ngẫu nhiên (by default)." },
      { key: "B", text: "Cấp độ 2 - Văn hóa nhận thức." },
      { key: "C", text: "Cấp độ 3 - Văn hóa có chủ đích (by design)." },
      { key: "D", text: "Cấp độ 4 - Văn hóa tự vận hành." },
    ],
    correctAnswer: "D",
    explanation:
      "Cấp độ 4 là đỉnh cao khi văn hóa đã ăn sâu vào ADN tổ chức và tự vận hành không cần kiểm soát thường xuyên. Đây là khi văn hóa thực sự trở thành lợi thế cạnh tranh bền vững.",
  },
  {
    id: 8,
    question:
      "Phương pháp nào hiệu quả nhất để 'giải mã' văn hóa hiện tại của một doanh nghiệp?",
    options: [
      { key: "A", text: "Đọc bản sứ mệnh và tầm nhìn của công ty." },
      {
        key: "B",
        text: "Quan sát hành vi thực tế, câu chuyện được kể và những gì được khen/phạt.",
      },
      { key: "C", text: "Khảo sát ý kiến nhân viên về văn hóa công ty." },
      {
        key: "D",
        text: "Phân tích báo cáo tài chính và kết quả kinh doanh.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Văn hóa thực sự nằm ở những gì xảy ra hàng ngày. Quan sát các câu chuyện kể, nghi lễ, biểu tượng và đặc biệt là hành vi được khen thưởng/trừng phạt sẽ tiết lộ văn hóa thực của tổ chức.",
  },
  {
    id: 9,
    question:
      "Tại sao việc biến Core Values thành 'Năng lực cốt lõi' (Core Competencies) lại quan trọng trong hệ thống VHDN?",
    options: [
      {
        key: "A",
        text: "Giúp doanh nghiệp tiết kiệm chi phí đào tạo nhân viên.",
      },
      {
        key: "B",
        text: "Làm cho văn hóa trở nên cụ thể, đo lường được và có thể phát triển.",
      },
      {
        key: "C",
        text: "Tạo ra sự cạnh tranh lành mạnh giữa các phòng ban.",
      },
      {
        key: "D",
        text: "Đáp ứng yêu cầu của nhà đầu tư và cổ đông.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Khi Core Values được chuyển hóa thành năng lực hành vi cụ thể, chúng có thể đo lường, đánh giá và phát triển. Điều này biến văn hóa từ khái niệm trừu tượng thành công cụ quản trị thực tế.",
  },
  {
    id: 10,
    question:
      "Điều nào sau đây ĐÚNG nhất về mối quan hệ giữa văn hóa doanh nghiệp và chiến lược kinh doanh?",
    options: [
      {
        key: "A",
        text: "Chiến lược luôn quan trọng hơn văn hóa trong việc quyết định thành công.",
      },
      {
        key: "B",
        text: "Văn hóa và chiến lược hoàn toàn độc lập, không ảnh hưởng lẫn nhau.",
      },
      {
        key: "C",
        text: "Văn hóa mạnh có thể 'nuốt chửng' chiến lược nếu không được quản trị đúng cách.",
      },
      {
        key: "D",
        text: "Chỉ cần có chiến lược tốt, văn hóa sẽ tự hình thành phù hợp.",
      },
    ],
    correctAnswer: "C",
    explanation:
      "Peter Drucker từng nói 'Culture eats strategy for breakfast'. Văn hóa mạnh nhưng không phù hợp có thể phá hoại chiến lược tốt nhất. Ngược lại, văn hóa mạnh và phù hợp là đòn bẩy giúp chiến lược thành công.",
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
    range: "0-3",
    title: "Bắt đầu hành trình khám phá!",
    description:
      'Bạn đang ở điểm xuất phát — và đó là điều hoàn toàn bình thường! Văn hóa doanh nghiệp là một hệ thống phức tạp, đòi hỏi thời gian để thấu hiểu. Nếu bạn thấy mình đang trả lời dựa trên "cảm tính", văn hóa tổ chức nơi bạn làm việc có thể đang được hình thành ngẫu nhiên (by default) thay vì có chủ đích (by design).\n\nTại Culture Code 101, chúng tôi không thảo luận về lý thuyết suông. Chúng tôi cung cấp Hệ thống Giải mã & Thực thi chuẩn mực: từ 3 Biểu hiện quan sát được (Schein), 4 Cấp độ Trưởng thành (Dashboard), đến Phương pháp luận biến Core Values thành Năng lực cốt lõi.\n\nĐừng để Văn hóa là một khái niệm trừu tượng. Hãy biến nó thành một Hệ điều hành chính xác cho sự tăng trưởng!',
    buttonText: "Khám phá Culture Code 101",
    emoji: "🌱",
  },
  {
    range: "4-6",
    title: "Bạn đang trên đúng hướng!",
    description:
      'Bạn đã có nền tảng nhất định về tư duy hệ thống VHDN — nhưng vẫn còn nhiều "điểm mù" cần được soi sáng. Hiểu lý thuyết chỉ là bước đầu; thách thức thực sự là biến kiến thức thành hành động có hệ thống.\n\nTại Culture Code 101, chúng tôi không thảo luận về lý thuyết suông. Chúng tôi cung cấp Hệ thống Giải mã & Thực thi chuẩn mực: từ 3 Biểu hiện quan sát được (Schein), 4 Cấp độ Trưởng thành (Dashboard), đến Phương pháp luận biến Core Values thành Năng lực cốt lõi.\n\nĐừng để Văn hóa là một khái niệm trừu tượng. Hãy biến nó thành một Hệ điều hành chính xác cho sự tăng trưởng!',
    buttonText: "Nâng tầm tư duy tại Culture Code 101",
    emoji: "🚀",
  },
  {
    range: "7-9",
    title: "Tư duy hệ thống của bạn rất ấn tượng!",
    description:
      'Bạn nắm vững phần lớn nền tảng tư duy hệ thống về VHDN — đây là một lợi thế cạnh tranh thực sự! Tuy nhiên, biết là chưa đủ; sự khác biệt nằm ở khả năng TRIỂN KHAI và XÂY DỰNG hệ thống văn hóa trong thực tế tổ chức.\n\nTại Culture Code 101, chúng tôi không thảo luận về lý thuyết suông. Chúng tôi cung cấp Hệ thống Giải mã & Thực thi chuẩn mực: từ 3 Biểu hiện quan sát được (Schein), 4 Cấp độ Trưởng thành (Dashboard), đến Phương pháp luận biến Core Values thành Năng lực cốt lõi.\n\nĐừng để Văn hóa là một khái niệm trừu tượng. Hãy biến nó thành một Hệ điều hành chính xác cho sự tăng trưởng!',
    buttonText: "Hoàn thiện hệ thống tại Culture Code 101",
    emoji: "⭐",
  },
  {
    range: "10",
    title: "Xuất sắc! Bạn là chuyên gia VHDN!",
    description:
      'Điểm tuyệt đối! Bạn đã nắm vững toàn bộ nền tảng tư duy hệ thống VHDN theo mô hình Culture Code. Đây là một thành tựu đáng tự hào và cho thấy bạn đã có tư duy rất sắc bén về quản trị văn hóa doanh nghiệp.\n\nTại Culture Code 101, chúng tôi không thảo luận về lý thuyết suông. Chúng tôi cung cấp Hệ thống Giải mã & Thực thi chuẩn mực: từ 3 Biểu hiện quan sát được (Schein), 4 Cấp độ Trưởng thành (Dashboard), đến Phương pháp luận biến Core Values thành Năng lực cốt lõi.\n\nBạn đã sẵn sàng biến Văn hóa thành Hệ điều hành chính xác cho sự tăng trưởng của tổ chức!',
    buttonText: "Đăng ký Culture Code 101 ngay",
    emoji: "🏆",
  },
];

export function getScoreResult(score: number): ScoreResult {
  if (score <= 3) return scoreResults[0];
  if (score <= 6) return scoreResults[1];
  if (score <= 9) return scoreResults[2];
  return scoreResults[3];
}
