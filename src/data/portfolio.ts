export type SectionId =
  | "hero"
  | "profile"
  | "projects"
  | "career"
  | "contact";

export type ProfileMode = {
  id: string;
  label: string;
  prompt: string;
  headline: string;
  subcopy: string;
  accent: string;
  highlightedStacks: string[];
  highlightedRoles: string[];
};

export type ProjectKind = "service" | "repository";

export type ShowcaseRepo = {
  name: string;
  description: string;
  repoUrl?: string;
  homepage?: string;
  kind: ProjectKind;
  language?: string;
  stack?: string[];
  role?: string;
  context?: string;
};

export const sectionOrder: SectionId[] = [
  "hero",
  "profile",
  "projects",
  "career",
  "contact",
];

export const sectionLabels: Record<SectionId, string> = {
  hero: "랜딩",
  profile: "프로필",
  projects: "대표 저장소",
  career: "경력",
  contact: "연락처",
};

export const roleHistory = [
  { order: "01", label: "플랫폼 엔지니어", value: "레티클즈" },
  { order: "02", label: "AI 엔지니어", value: "WonStudio" },
  { order: "03", label: "재학중 (2024~)", value: "청강문화산업대" },
];

export const techStack = [
  "Unreal Engine",
  "Unity",
  "PyTorch",
  "TensorFlow",
  "WebGL",
  "Three.js",
  "C++ / CUDA",
  "React",
  "Tailwind",
];

export const profileModes: ProfileMode[] = [
  {
    id: "dev",
    label: "Dev",
    prompt: "콘텐츠 개발자",
    headline: "AI와 3D 엔진을 함께 다루는 콘텐츠 개발자",
    subcopy:
      "기획, 그래픽스, 인터랙션, AI 프로토타이핑을 연결해 작동하는 결과물로 만듭니다.",
    accent: "#9ec1ff",
    highlightedStacks: [...techStack],
    highlightedRoles: roleHistory.map((item) => item.order),
  },
  {
    id: "engineer",
    label: "Engineer",
    prompt: "소프트웨어 엔지니어",
    headline: "빠르게 만들고 완성까지 책임지는 엔지니어",
    subcopy:
      "새로운 기술을 익혀 구현 가능한 구조로 정리하고, 배포 가능한 결과물까지 만듭니다.",
    accent: "#9ec1ff",
    highlightedStacks: ["React", "Tailwind", "Three.js"],
    highlightedRoles: ["01", "03"],
  },
  {
    id: "ai",
    label: "AI",
    prompt: "AI 엔지니어",
    headline: "모델과 시뮬레이션을 연결하는 AI 엔지니어",
    subcopy:
      "AI 실험을 데모에서 끝내지 않고 그래픽스·상호작용과 연결한 프로토타입으로 확장합니다.",
    accent: "#86a9ff",
    highlightedStacks: ["PyTorch", "TensorFlow", "C++ / CUDA"],
    highlightedRoles: ["02", "03"],
  },
  {
    id: "ta",
    label: "TA",
    prompt: "Technical Artist",
    headline: "그래픽 감각과 엔진 이해를 잇는 TA",
    subcopy:
      "언리얼 기반 시네마틱과 셰이더 작업에서 아트와 엔진 사이의 번역기 역할을 맡아왔습니다.",
    accent: "#78b8ff",
    highlightedStacks: ["Unreal Engine", "WebGL", "Three.js"],
    highlightedRoles: ["01", "02"],
  },
];

export const showcaseRepos: ShowcaseRepo[] = [
  {
    name: "Vibeton",
    description:
      "사진을 여름 휴가 테마의 키링 디자인으로 변환하고, 스티커와 각인 요소까지 편집하는 AI 이미지 서비스.",
    repoUrl: "https://github.com/JunnnnyWon/JobKorea_Vibeton",
    kind: "repository",
    language: "TypeScript",
    stack: ["React", "Express", "Gemini"],
    role: "AI 이미지 편집",
  },
  {
    name: "comfyui-modal",
    description:
      "Modal GPU 클라우드에서 ComfyUI를 자동 배포하고, 사이드바에서 모델 관리와 GPU 선택까지 처리하는 도구.",
    repoUrl: "https://github.com/JunnnnyWon/comfyui-modal",
    kind: "repository",
    language: "Python",
    stack: ["Python", "ComfyUI", "Modal"],
    role: "GPU 워크플로",
  },
  {
    name: "moido",
    description:
      "공유 장소를 함께 계획하는 협업형 지도 플래너. AI 기반 경로 추천을 지원한다.",
    repoUrl: "https://github.com/JunnnnyWon/moido",
    homepage: "https://moido-prototype.netlify.app",
    kind: "service",
    language: "TypeScript",
    stack: ["TypeScript", "Maps", "AI"],
    role: "Collaborative planner",
    context: "공모전 프로젝트",
  },
  {
    name: "style-expression-mvp",
    description: "스타일 표현 기능을 검증하기 위한 웹 MVP 프로토타입.",
    repoUrl: "https://github.com/JunnnnyWon/style-expression-mvp",
    homepage: "https://style-expression-mvp.vercel.app",
    kind: "repository",
    language: "TypeScript",
    stack: ["TypeScript", "React", "MVP"],
    role: "웹 프로토타입",
  },
  {
    name: "pixel-fourcut",
    description: "픽셀 스타일 네컷 사진을 만드는 파이썬 도구.",
    repoUrl: "https://github.com/JunnnnyWon/pixel-fourcut",
    kind: "repository",
    language: "Python",
    stack: ["Python", "Pillow", "Image tool"],
    role: "크리에이티브 유틸리티",
  },
];

export const operatingServices: ShowcaseRepo[] = [
  {
    name: "Atlas",
    description:
      "웹소설과 게임과가 협업해 만든 웹소설 창작 도구. 한 줄 주제에서 작품 구조, 설정집, 원고 편집, 제출 자료까지 연결합니다.",
    homepage: "https://atlas-novel.online",
    kind: "service",
    language: "TypeScript",
    stack: ["Next.js", "AI", "Story workspace"],
    role: "소설 창작 도구",
    context: "전공 간 융복합 프로젝트",
  },
  {
    name: "Moido",
    description:
      "함께 장소를 계획하고 공유하는 협업형 지도 플래너. 실제 배포된 프로토타입으로 장소 탐색과 일정 구성을 연결합니다.",
    repoUrl: "https://github.com/JunnnnyWon/moido",
    homepage: "https://moido-prototype.netlify.app",
    kind: "service",
    language: "TypeScript",
    stack: ["Maps", "AI", "Collaboration"],
    role: "협업형 플래너",
    context: "공모전 프로젝트",
  },
  {
    name: "PLA Return",
    description:
      "Meshy AI로 만든 3D 모델을 친환경 필라멘트 출력과 주문, 배송까지 연결하는 3D 제작 서비스.",
    homepage: "https://plareturn.space/app/",
    kind: "service",
    language: "TypeScript",
    stack: ["Meshy AI", "3D", "Commerce"],
    role: "3D 제작 서비스",
    context: "지원사업 운영 서비스",
  },
];

export const supportPrograms = [
  "청강 크리에이티브 AI 지원사업",
  "로컬임팩트 지원사업",
  "K-Tech 지원사업",
  "당신 옆의 공익활동",
  "AI·빅데이터 기반 소상공인 매출 증대 프로젝트",
];

export const awards = [
  {
    badge: "총장상",
    title: "Unist 슈퍼컴퓨팅캠프",
    year: 2024,
    category: "ai",
    description:
      "Python MPI를 활용한 Phong 쉐이딩 병렬화 및 남/여 구분 AI 모델 개발.",
  },
  {
    badge: "최우수상",
    title: "부산 ICT 이노베이션 해커톤",
    year: 2026,
    category: "hackathon",
    description: "떨이 해산물 판매 플랫폼 개발 (팀장).",
  },
  {
    badge: "테크노파크상",
    title: "대구 AI·빅데이터 해커톤",
    year: 2025,
    category: "hackathon",
    description:
      'UE5 Metahuman을 활용한 지역 특색 AI 홍보대사 서비스 "메타 대구" 개발.',
  },
  {
    badge: "우수상",
    title: "멋사 플렉스튜디오 해커톤",
    year: 2025,
    category: "hackathon",
    description: "청년 전세 사기 예방 플랫폼 개발 (팀장).",
  },
  {
    badge: "우수상",
    title: "숙명여대 멋쟁이사자처럼 해커톤",
    year: 2023,
    category: "hackathon",
    description: "뇌파 측정을 통한 게임 과몰입 예방 서비스 개발.",
  },
  {
    badge: "우수상",
    title: "컴퓨터정보학회 게임부문 논문",
    year: 2024,
    category: "education",
    description: "사용자 시점 기반의 VR 상호작용 기술 연구.",
  },
  {
    badge: "우수상",
    title: "SK 알파코 게임잼",
    year: 2024,
    category: "hackathon",
    description: '흰수염고래를 주제로 한 "아고뤠" 개발.',
  },
  {
    badge: "은상",
    title: "경운대 지능형 모빌리티 AI 경진대회",
    year: 2023,
    category: "competition",
    description: "YOLO v5 모델을 통한 객체 학습 및 mAP 도출.",
  },
  {
    badge: "2등",
    title: "교내 알발페스타 Vesta",
    year: 2024,
    category: "competition",
    description: "TA - 라이팅 및 쉐이더 개발.",
  },
  {
    badge: "2등",
    title: "대구 창업경진 해커톤",
    year: 2024,
    category: "hackathon",
    description: '기프티콘 악용 사례 방지 플랫폼 "프리티콘" 개발.',
  },
  {
    badge: "2등",
    title: "전문대 창업경진 대회",
    year: 2023,
    category: "business",
    description: "XR 스타트업 WonStudio 사업계획서 발표.",
  },
  {
    badge: "2등",
    title: "대구 GIF 해커톤",
    year: 2024,
    category: "hackathon",
    description: "생명안전 아이디어 SafeAI 발표.",
  },
  {
    badge: "특별상",
    title: "메타버스 솔루션 챌린지",
    year: 2022,
    category: "hackathon",
    description: '청소년 상담 솔루션 "키드콩" 개발.',
  },
  {
    badge: "디자인상",
    title: "중국 길림대 국제 게임잼",
    year: 2026,
    category: "competition",
    description: "프로그래머 - 2일 국제 게임잼에서 KPI: OVERLOAD 개발 및 Best Game Design Award 수상.",
  },
];

export const activities = [
  {
    year: 2026,
    category: "Networking",
    title: "GitHub AfterDark Seoul",
    meta: "GitHub 개발자 밋업",
    description:
      "GitHub 코파일럿 컨퍼런스에 참여. 코파일럿 내부 하네스 구조를 학습 및 현업 개발자들과 네트워킹.",
    tags: ["Developer Meetup", "Networking", "GitHub", "Copilot"],
  },
  {
    year: 2026,
    category: "Networking",
    title: "TripoDonut Seoul",
    meta: "3D·AI 개발자 밋업",
    description:
      "3D 생성형 AI 밋업 참여. 메시 생성 파이프라인과 텍스처 자동화 워크플로우 학습, 관련 분야 개발자들과 네트워킹.",
    tags: ["3D", "Generative AI", "Networking"],
  },
  {
    year: 2026,
    category: "Networking",
    title: "Unity Employee Day",
    meta: "Unity Korea",
    description:
      "Unity Korea 행사 참여. 엔진 렌더링 파이프라인과 최적화 사례 학습, Unity 엔지니어들과 네트워킹.",
    tags: ["Unity", "Game Engine", "Networking"],
  },
  {
    year: 2026,
    category: "Competition",
    title: "크래프톤 코파톤",
    meta: "KRAFTON",
    description:
      "크래프톤 주최 해커톤 참가. 제한 시간 내 주어진 과제 설계·구현, 결과물 피드백.",
    tags: ["Hackathon", "KRAFTON"],
  },
  {
    year: 2025,
    category: "Project",
    title: '애니메이션 협업 "GOT" 시네마틱',
    meta: "Technical Artist (TA)",
    description:
      "시네마틱용 Fog Simulator, RVT Controller 설계·구현. 애니메이션 팀과 협업해 최종 영상에 적용.",
    tags: ["Unreal Engine", "Technical Art", "Shader"],
  },
  {
    year: 2025,
    category: "Project",
    title: "대전 AI VFX 아카데미",
    meta: "팀장",
    description:
      'UE5 기반 AI 애니메이션 "그림자 복도" 제작 파이프라인 구성. 대전 특수영상 상영제 출품.',
    tags: ["Unreal Engine 5", "AI Animation", "Grok", "Kling", "Wan"],
  },
  {
    year: 2024,
    category: "Research",
    title: "디그라 연세대학교 한국학회",
    meta: "논문 발표",
    description:
      '논문 "플레이어에서 창작자로의 여정" 발표. 게임 플레이어의 창작자 전환 과정 분석.',
    tags: ["Research", "Game Studies"],
  },
  {
    year: 2023,
    category: "Competition",
    title: "First Tech Challenge",
    meta: "참가자",
    description:
      "자율주행 로봇 제어 로직과 센서 기반 경로 탐색 구현. 로봇공학 대회 미션 수행.",
    tags: ["Robotics", "Autonomous Driving"],
  },
  {
    year: 2023,
    category: "Project",
    title: "배재대학교 R&E 프로젝트",
    meta: "참가자",
    description: "5G 네트워크 전력 소모 구조 분석. 절감 시스템 아키텍처 설계.",
    tags: ["5G", "System Architecture"],
  },
  {
    year: 2024,
    category: "Education",
    title: "한국메타버스산업협회 & VR AR 제작거점센터",
    meta: "수료",
    description:
      "디지털 휴먼 제작, 페이셜 캡쳐 파이프라인 실습. XR 융합 메타버스 인력양성 과정 수료.",
    tags: ["Digital Human", "Facial Capture", "XR"],
  },
  {
    year: 2024,
    category: "Mentoring",
    title: "엘리스 플랫폼 & 대전 유성고",
    meta: "SW 코딩 멘토 / 강사",
    description:
      "청소년 대상 코딩 강의 진행. XR 이론 수업과 실습 과제 구성, 멘토링.",
    tags: ["Mentoring", "Teaching", "XR"],
  },
  {
    year: 2024,
    category: "Business",
    title: "청강문화산업대학교 프런티어 지원사업",
    meta: "지원 사업",
    description:
      '창업 아이디어 "조이풀" 사업 모델 및 서비스 기획안 구성. 교내 프런티어 지원 사업 선정.',
    tags: ["Business Planning", "Ideation"],
  },
];

export const socialLinks = [
  {
    key: "github",
    label: "GitHub",
    value: "github.com/JunnnnyWon",
    href: "https://github.com/JunnnnyWon",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/원준-조-7b875a412",
    href: "https://www.linkedin.com/in/원준-조-7b875a412/",
  },
] as const;

export const contactCards = [
  {
    key: "email",
    label: "Email",
    value: "ask@junnnny.kr",
    type: "contact",
  },
  {
    key: "phone",
    label: "Phone",
    value: "010-9166-1352",
    type: "contact",
  },
  {
    key: "location",
    label: "Location",
    value: "대전 / 경기",
    type: "contact",
  },
];
