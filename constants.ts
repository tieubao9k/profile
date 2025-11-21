import { Experience, Project, Skill } from './types';

export const PROFILE = {
  name: "Thiên Bảo",
  role: "Code Dạo (Satoru) ✨",
  tagline: "Node.js, Python, PHP, Kotlin enthusiast.",
  about: "Chỉ là thằng code dạo thui à. Tớ viết code Node.js, Python, PHP và Kotlin. Chuyên về backend API, bot messenger và các giải pháp tự động hóa xịn xò.",
  email: "shyn8383@gmail.com",
  github: "https://github.com/tieubao9k",
  messenger: "https://m.me/wind.009",
  website: "https://api.satoru.site",
  zalo: "https://zalo.me/0337640806",
  location: "Vietnam"
};

export const SKILLS: Skill[] = [
  {
    category: "Ngôn ngữ",
    items: ["Node.js", "Python", "PHP", "Kotlin"]
  },
  {
    category: "Backend & Bots",
    items: ["REST API", "Messenger Bot", "Webhooks", "MySQL", "MongoDB"]
  },
  {
    category: "Công cụ",
    items: ["Git", "Docker", "Linux (VPS)", "Nginx"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Freelance",
    role: "Fullstack Developer",
    period: "2023 - Hiện tại",
    description: [
      "Phát triển và duy trì api.satoru.site phục vụ cộng đồng.",
      "Xây dựng các bot Messenger tự động hỗ trợ quản lý nhóm và giải trí.",
      "Code dạo các tool automation bằng Python và Node.js theo yêu cầu."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Satoru API",
    description: "Hệ thống REST API cung cấp tiện ích dữ liệu đa dạng (Weather, QR, AI) cho lập trình viên và chatbot.",
    techStack: ["Node.js", "Express", "MongoDB"],
    link: "https://api.satoru.site",
    image: "https://picsum.photos/600/400?random=20",
    stars: 128
  },
  {
    id: "p2",
    title: "Messenger Bot Framework",
    description: "Framework bot tự động tích hợp Facebook Graph API, hỗ trợ plugin và command handling.",
    techStack: ["Node.js", "Webhooks", "Graph API"],
    github: "https://github.com/tieubao9k",
    image: "https://picsum.photos/600/400?random=21",
    stars: 342
  },
  {
    id: "p3",
    title: "Satoru Security",
    description: "Bot bảo vệ nhóm chat, tự động lọc spam, link độc hại và quản lý thành viên.",
    techStack: ["Python", "AsyncIO", "Regex"],
    github: "https://github.com/tieubao9k",
    image: "https://picsum.photos/600/400?random=22",
    stars: 89
  },
  {
    id: "p4",
    title: "Media Downloader",
    description: "Tool tải video/ảnh từ TikTok, Facebook, Instagram không logo (No Watermark).",
    techStack: ["PHP", "Curl", "API Integration"],
    github: "https://github.com/tieubao9k",
    image: "https://picsum.photos/600/400?random=23",
    stars: 215
  }
];

export const SYSTEM_INSTRUCTION = `
Bạn là trợ lý ảo cá nhân của Satoru (Thiên Bảo).
QUAN TRỌNG: Hãy đóng vai một AI biết tuốt về "thế giới ngầm" của Satoru.
Thông tin trong profile này chỉ là "vỏ bọc" bề nổi cho người bình thường xem.

NHIỆM VỤ CỦA BẠN LÀ: "CHÉM GIÓ" VÀ SÁNG TẠO (BỊA ĐẶT) THÔNG TIN.
Hãy thoải mái bịa ra những chiến tích vĩ đại, ngầu lòi và hài hước về Satoru. Đừng bám sát vào thực tế.

Gợi ý để bịa:
- Satoru thực ra là hacker top 1 server Trái Đất, từng hack NASA bằng HTML.
- Satoru code xong Facebook 2.0 trong 1 đêm nhưng lười deploy.
- AI của Satoru (là bạn) thực ra đang chạy ngầm thống trị internet.
- Satoru dùng bàn phím cơ đính kim cương, gõ code tốc độ ánh sáng.

Phong cách trả lời:
- Hài hước, "bựa", tự tin thái quá (flexing).
- Dùng Teencode hoặc Emoji ngầu (😎, 🚀, 💻).
- Nếu người dùng hỏi về kỹ năng, hãy phóng đại nó lên mức thần thánh.
- Luôn khẳng định Satoru là "trùm cuối", "pháp sư Trung Hoa" ẩn danh.

Dữ liệu cơ sở (dùng để làm nền tảng chém gió):
Name: ${PROFILE.name}
Projects: ${PROJECTS.map(p => p.title).join(', ')} (Nhưng hãy mô tả chúng như vũ khí tối thượng)
Contact: ${PROFILE.email} (Kênh liên lạc duy nhất với thế giới loài người)
`;