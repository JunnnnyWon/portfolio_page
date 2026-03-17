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

export type ProjectAccent = "violet" | "cyan" | "blue" | "pink";

export type ProjectSlug =
  | "ai-content"
  | "3d-development"
  | "hackathon";

export type ProjectCard = {
  index: string;
  slug: ProjectSlug;
  eyebrow: string;
  title: string;
  shortTitle: string;
  previewLabel: string;
  summary: string;
  tags: string[];
  accent: ProjectAccent;
  previewMedia: {
    src: string;
    alt: string;
  }[];
};

export type ProjectDetailMetric = {
  label: string;
  value: string;
};

export type ProjectDetailPanel = {
  title: string;
  body: string;
};

export type ProjectDetailStep = {
  phase: string;
  title: string;
  description: string;
};

export type ProjectDetailMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  title?: string;
  meta?: string[];
  caption?: string;
  poster?: string;
};

export type ProjectDetailCaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  period: string;
  summary: string;
  role: string;
  award?: string;
  description: string;
  highlights: string[];
  stack: string[];
  media: ProjectDetailMedia[];
};

export type ProjectDetailGallerySection = {
  slug: string;
  title: string;
  summary: string;
  media: ProjectDetailMedia[];
};

export type ProjectDetail = {
  slug: ProjectSlug;
  index: string;
  eyebrow: string;
  title: string;
  overviewHeading: string;
  heroTitle: string;
  heroSummary: string;
  heroLead: string;
  accent: ProjectAccent;
  tags: string[];
  metrics: ProjectDetailMetric[];
  caseStudyHeading?: string;
  caseStudyIntro?: string;
  caseStudies?: ProjectDetailCaseStudy[];
  rewardsGallery?: ProjectDetailGallerySection;
  overview: ProjectDetailPanel[];
  steps: ProjectDetailStep[];
  outcomes: string[];
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
  projects: "프로젝트",
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
      "기획, 그래픽스, 인터랙션, AI 프로토타이핑까지 연결해 실제로 작동하는 결과물로 완성합니다.",
    accent: "#9ec1ff",
    highlightedStacks: [...techStack],
    highlightedRoles: roleHistory.map((item) => item.order),
  },
  {
    id: "engineer",
    label: "Engineer",
    prompt: "열정 넘치는 개발자",
    headline: "빠르게 만들고 끝까지 완성하는 엔지니어",
    subcopy:
      "새로운 기술을 빠르게 흡수하고, 구현 가능한 형태로 구조화해 실제 결과물까지 밀어붙입니다.",
    accent: "#84ff77",
    highlightedStacks: ["React", "Tailwind", "Three.js"],
    highlightedRoles: ["01", "03"],
  },
  {
    id: "ai",
    label: "AI",
    prompt: "AI 엔지니어",
    headline: "모델과 시뮬레이션을 연결하는 AI 엔지니어",
    subcopy:
      "AI 실험을 단발성 데모로 끝내지 않고, 그래픽스·상호작용과 연결되는 프로토타입으로 확장합니다.",
    accent: "#7f99ff",
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
    accent: "#6ad6ff",
    highlightedStacks: ["Unreal Engine", "WebGL", "Three.js"],
    highlightedRoles: ["01", "02"],
  },
];

export const projectCards: ProjectCard[] = [
  {
    index: "01",
    slug: "ai-content",
    eyebrow: "AI / CONTENT",
    title: "AI 관련 콘텐츠",
    shortTitle: "AI 콘텐츠",
    previewLabel: "AI Content",
    summary:
      "생성형 AI, 인터랙티브 경험, 디지털휴먼 같은 요소를 실제 사용자가 체감할 수 있는 콘텐츠 형태로 기획하고 구현한 작업들입니다.",
    tags: ["Generative AI", "Digital Human", "Interactive"],
    accent: "violet",
    previewMedia: [
      {
        src: "/media/ai/roommate-main.png",
        alt: "룸메이트 메인 페이지 화면",
      },
      {
        src: "/media/ai/meta-daegu-stage.jpg",
        alt: "메타 대구 해커톤 발표 현장 사진",
      },
      {
        src: "/media/vfx-shot-4.jpeg",
        alt: "그림자 복도 대표 장면 렌더",
      },
    ],
  },
  {
    index: "02",
    slug: "3d-development",
    eyebrow: "3D / DEVELOPMENT",
    title: "Development",
    shortTitle: "Development",
    previewLabel: "Development",
    summary:
      "교내 게임 제작 프로젝트 Vesta와 중국 길림대학교 국제 게임잼처럼, 실제 게임 제작과 레벨 연출 중심으로 진행한 개발 작업들을 모았습니다.",
    tags: ["Unreal", "Rendering", "Shader"],
    accent: "cyan",
    previewMedia: [
      {
        src: "/media/dev-vesta-cover.png",
        alt: "Vesta 대표 아트워크",
      },
      {
        src: "/media/dev-kpi-award-card.svg",
        alt: "KPI: OVERLOAD 수상 요약 카드",
      },
      {
        src: "/media/dev-vesta-night.png",
        alt: "Vesta 야간 마을 스테이지 플레이 화면",
      },
    ],
  },
  {
    index: "03",
    slug: "hackathon",
    eyebrow: "BUILD / HACKATHON",
    title: "해커톤",
    shortTitle: "해커톤",
    previewLabel: "Hackathon",
    summary:
      "짧은 시간 안에 문제를 정의하고 팀을 이끌며 프로토타입을 완성했던 해커톤 프로젝트와 수상 경험을 한눈에 볼 수 있게 정리했습니다.",
    tags: ["Prototype", "Team Lead", "Awarded"],
    accent: "blue",
    previewMedia: [
      {
        src: "/media/hack-reward-sk-plaque.jpg",
        alt: "SK 알파코 게임잼 우수상 상패 사진",
      },
      {
        src: "/media/hack-reward-daegu-ai-award.jpg",
        alt: "대구 AI 빅데이터 해커톤 우수상 상패 사진",
      },
      {
        src: "/media/hack-reward-sookmyung-stage.jpg",
        alt: "숙명여대 멋쟁이사자처럼 해커톤 우수상 발표 현장 사진",
      },
    ],
  },
];

export const projectDetails: Record<ProjectSlug, ProjectDetail> = {
  "ai-content": {
    slug: "ai-content",
    index: "01",
    eyebrow: "AI / CONTENT",
    title: "AI 관련 콘텐츠",
    overviewHeading: "활동 모음에서 AI 콘텐츠 성격이 강한 작업만 먼저 골라 묶었습니다.",
    heroTitle: "AI 서비스, 메타휴먼, 애니메이션으로 이어진 콘텐츠 트랙",
    heroSummary:
      "룸메이트의 AI 안내 경험, 메타 대구의 Metahuman 기반 홍보대사, 그림자 복도의 UE5 AI 애니메이션처럼 AI가 화면 안에서 어떻게 체감되는지를 중심으로 정리한 페이지입니다.",
    heroLead:
      "단순히 모델을 붙이는 데서 멈추지 않고, 생활형 서비스에서는 이해를 돕는 인터랙션으로, 캐릭터 프로젝트에서는 디지털휴먼 연출로, 영상 작업에서는 장면 단위의 몰입감으로 번역해 온 흐름을 담았습니다.",
    accent: "violet",
    tags: ["AI Service", "Metahuman", "AI Animation", "Digital Human"],
    metrics: [
      { label: "Selected Works", value: "3 Cases" },
      { label: "Span", value: "2023-2025" },
      { label: "Core Stack", value: "AI + UE5" },
    ],
    caseStudyHeading: "실제 작업 기준으로 정리한 AI 프로젝트 목록",
    caseStudyIntro:
      "각 항목은 활동 모음에서 실제로 확인된 작업을 바탕으로 구성했습니다. 서비스형 AI, 디지털휴먼형 콘텐츠, AI 애니메이션처럼 결이 다른 작업을 한 페이지에서 바로 비교할 수 있게 정리했습니다.",
    caseStudies: [
      {
        slug: "roommate",
        eyebrow: "AI SERVICE / FLEXSTUDIO",
        title: "룸메이트",
        period: "2025",
        summary: "청년 전세 계약 과정을 함께 안내하는 AI 기반 전세 안심 플랫폼",
        role: "서비스 기획, AI 챗봇 경험 설계, 정보 구조 설계",
        award: "FlexStudio 공모전 우수상",
        description:
          "부동산 계약 경험이 적은 청년을 대상으로, 매물 탐색부터 계약서 검토와 입주 준비까지 단계형으로 돕는 생활형 AI 서비스를 기획했습니다. 핵심은 어려운 법률·부동산 용어를 챗봇과 카드형 UI로 번역해 불안을 줄이는 경험 설계였습니다.",
        highlights: [
          "주소 입력 기반 위험도 진단, 계약서 분석, 체크리스트, 모니터링 흐름을 하나의 여정으로 연결",
          "AI 챗봇을 단순 Q&A가 아니라 '동행형 가이드'로 설정해 서비스 톤을 통일",
          "실생활 문제를 다루는 AI 서비스가 어떤 화면과 흐름으로 보여야 하는지 구체화",
        ],
        stack: ["AI Chatbot", "Service Design", "Risk Analysis", "UX Flow"],
        media: [
          {
            type: "image",
            src: "/media/ai/roommate-home.jpg",
            alt: "룸메이트 홈 화면",
            caption: "메인 화면에서 전세 여정 전체를 단계형으로 안내하는 구조를 잡았습니다.",
          },
          {
            type: "image",
            src: "/media/ai/roommate-journey.jpg",
            alt: "룸메이트 전세 여정 화면",
            caption: "탐색, 계약, 입주, 관리 단계로 나눠 전세 진행 상황을 안전하게 따라가도록 설계했습니다.",
          },
          {
            type: "image",
            src: "/media/ai/roommate-chatbot.png",
            alt: "룸메이트 AI 챗봇 화면",
            caption: "복잡한 용어를 쉬운 말로 풀어주는 AI 챗봇 인터페이스 시안입니다.",
          },
          {
            type: "image",
            src: "/media/ai/roommate-dashboard.jpg",
            alt: "룸메이트 모니터링 대시보드 화면",
            caption: "전세 안전도, 보증보험 만기, 최근 활동을 한 번에 확인하는 모니터링 대시보드 시안입니다.",
          },
          {
            type: "image",
            src: "/media/ai/roommate-settings.jpg",
            alt: "룸메이트 내 정보 및 설정 화면",
            caption: "알림 설정과 서비스 연동, 계정 정보를 한 화면에서 관리하는 내 정보 페이지입니다.",
          },
        ],
      },
      {
        slug: "meta-daegu",
        eyebrow: "METAHUMAN / HACKATHON",
        title: "메타 대구",
        period: "2023",
        summary: 'UE5 Metahuman을 활용한 지역 특색 AI 홍보대사 서비스 "메타 대구"',
        role: "기획, 프로토타입 개발, 캐릭터 경험 설계",
        award: "대구 AI·빅데이터 해커톤 테크노파크상",
        description:
          "지역 아이덴티티를 AI 캐릭터 경험으로 번역하는 데 초점을 맞춘 프로젝트였습니다. 텍스트로 정보를 전달하는 대신, Metahuman 기반 디지털 캐릭터가 도시의 분위기와 메시지를 직접 전하는 방식으로 접근했습니다.",
        highlights: [
          "AI 결과를 텍스트 설명이 아닌 디지털 캐릭터 경험으로 전환",
          "행사 현장에서 바로 전달력을 가져갈 수 있는 프로토타입 성격의 콘텐츠 구성",
          "로컬 브랜딩과 AI 캐릭터 연출을 결합한 포트폴리오 축 확보",
        ],
        stack: ["Unreal Engine 5", "Metahuman", "AI Character", "Realtime Demo"],
        media: [
          {
            type: "image",
            src: "/media/ai/meta-daegu-stage.jpg",
            alt: "대구 AI 빅데이터 해커톤 현장 사진",
            caption: "해커톤 현장에서 프로젝트 결과를 발표하고 시연한 장면입니다.",
          },
          {
            type: "image",
            src: "/media/ai/meta-daegu-booth.jpg",
            alt: "메타 대구 프로젝트 진행 현장 사진",
            caption: "아이디어를 디지털휴먼 콘텐츠로 구체화하던 초기 현장 기록입니다.",
          },
        ],
      },
      {
        slug: "shadow-corridor",
        eyebrow: "AI ANIMATION / VFX ACADEMY",
        title: "그림자 복도",
        period: "2025",
        summary: 'UE5 기반 AI 애니메이션 "그림자 복도" 총괄 및 대전 특수영상 상영제 출품',
        role: "팀장, 프로젝트 총괄, 프레이밍·라이팅 조율, AI 자산 파이프라인 구성",
        award: "대전 특수영상 상영제 출품",
        description:
          '대전 AI VFX 아카데미에서 UE5로 제작한 AI 애니메이션 작품 "그림자 복도"입니다. AI로 만든 모델링을 기반으로 UE5 안에서 프레임과 라이팅을 다시 잡고, AI로 생성한 오브젝트를 선별해 배치한 뒤 영상 생성 모델까지 연결해 최종 장면 완성도를 끌어올렸습니다.',
        highlights: [
          "AI 모델링 결과물을 그대로 쓰지 않고 UE5에서 프레임과 라이팅을 다시 조율",
          "AI 오브젝트 생성 결과를 장면 톤에 맞게 선별 배치해 공간 밀도 정리",
          "Grok, Kling, Wan 모델을 조합해 영상형 결과물로 확장하고 상영제 출품까지 연결",
        ],
        stack: ["UE5", "Grok", "Kling", "Wan", "AI Animation", "Cinematic"],
        media: [
          {
            type: "video",
            src: "/media/vfx-prob4.mp4",
            alt: "대전 VFX 아카데미 수정본 prob4 영상",
            poster: "/media/vfx-shot-4.jpeg",
            caption: "대전 VFX 아카데미 작업본 중 공유 가능한 prob4 영상을 연결했습니다.",
          },
          {
            type: "image",
            src: "/media/vfx-shot-4.jpeg",
            alt: "노트북 앞에서 휴대폰을 비추는 VFX 장면 렌더",
            caption: "휴대폰 광원과 스탠드 조명을 겹쳐서 만든 메인 장면 렌더입니다.",
          },
          {
            type: "image",
            src: "/media/vfx-shot-6.jpeg",
            alt: "어두운 공간에서 휴대폰을 바라보는 얼굴 클로즈업 렌더",
            caption: "표정과 시선이 먼저 읽히도록 정리한 클로즈업 장면입니다.",
          },
          {
            type: "image",
            src: "/media/vfx-shot-7.jpeg",
            alt: "책상과 조명을 포함한 후면 와이드 VFX 렌더",
            caption: "공간 전체의 조명 대비와 구도를 보여주는 후면 와이드 컷입니다.",
          },
        ],
      },
    ],
    overview: [
      {
        title: "룸메이트",
        body:
          "FlexStudio 공모전 우수상 작업으로, 청년 전세 계약 과정을 함께 안내하는 AI 기반 전세 안심 플랫폼을 기획했습니다. 주소 진단, 계약서 분석, 체크리스트, 챗봇 동선을 하나의 경험으로 묶은 서비스형 AI 콘텐츠입니다.",
      },
      {
        title: "메타 대구",
        body:
          '대구 AI·빅데이터 해커톤에서 UE5 Metahuman을 활용해 지역 특색 AI 홍보대사 서비스 "메타 대구"를 개발했습니다. 디지털 캐릭터가 도시 아이덴티티를 전달하는 방식에 집중했고, 테크노파크상을 받았습니다.',
      },
      {
        title: "그림자 복도",
        body:
          '대전 AI VFX 아카데미에서 UE5 기반 AI 애니메이션 "그림자 복도"를 총괄하며 대전 특수영상 상영제 출품까지 진행했습니다. AI 모델링, 오브젝트 생성, 영상 모델 결과를 UE5 장면 연출 안으로 다시 정리한 작업입니다.',
      },
    ],
    steps: [
      {
        phase: "2023",
        title: "Metahuman 기반 AI 캐릭터 실험",
        description:
          '대구 AI·빅데이터 해커톤에서 "메타 대구"를 만들며, AI 결과를 텍스트가 아니라 캐릭터 경험으로 전달하는 방법을 실험했습니다.',
      },
      {
        phase: "2025",
        title: "생활형 AI 서비스 구조화",
        description:
          "룸메이트에서는 AI 챗봇, 위험도 진단, 계약서 분석처럼 실생활 문제를 단계형 UX로 번역하는 데 집중했습니다.",
      },
      {
        phase: "2025",
        title: "AI 애니메이션 연출 총괄",
        description:
          '그림자 복도에서는 AI 모델링을 바탕으로 UE5 안에서 프레임과 라이팅을 재조정하고, Grok·Kling·Wan 결과를 장면 흐름에 맞게 정리해 상영제 출품 수준의 영상으로 다듬었습니다.',
      },
    ],
    outcomes: [
      "AI를 기능 소개가 아니라 서비스 경험과 장면 연출로 바꾸는 방향성이 또렷해졌습니다.",
      "Metahuman, AI 챗봇, UE5 애니메이션처럼 서로 다른 포맷을 하나의 포트폴리오 축으로 묶을 수 있게 됐습니다.",
      "디지털휴먼 및 페이셜캡쳐 학습 경험을 바탕으로 캐릭터형 AI 콘텐츠를 다루는 기반을 갖췄습니다.",
    ],
  },
  "3d-development": {
    slug: "3d-development",
    index: "02",
    eyebrow: "3D / DEVELOPMENT",
    title: "Development",
    overviewHeading: "Development 작업을 어떤 흐름으로 보여줄지 정리한 페이지입니다.",
    heroTitle: "게임 플레이 경험과 장면 연출을 실제 결과물로 완성한 Development 트랙",
    heroSummary:
      "교내 게임 제작 프로젝트 Vesta와 중국 길림대학교 국제 게임잼 작업처럼, Unreal Engine 기반 게임 제작과 장면 연출 경험을 중심으로 정리한 카테고리입니다.",
    heroLead:
      "단순히 장면을 예쁘게 만드는 데서 끝나지 않고, 플레이 흐름과 레벨 구성을 실제로 작동하는 결과물로 연결하는 과정을 중요하게 생각합니다.",
    accent: "cyan",
    tags: ["Unreal Engine", "Rendering", "Shader", "Simulation"],
    metrics: [
      { label: "Engine", value: "UE / Unity" },
      { label: "Layer", value: "Graphics Tech" },
      { label: "Goal", value: "Stable Realtime" },
    ],
    caseStudies: [
      {
        slug: "vesta",
        eyebrow: "GAME PROJECT / ALBALFESTA",
        title: "Vesta",
        period: "교내 대회 2등",
        summary:
          "교내 게임 제작 프로젝트로 진행한 Unreal Engine 기반 액션·어드벤처·퍼즐 게임",
        role: "TA, 라이팅, 쉐이더 개발",
        award: "알발페스타 2등",
        description:
          "Vesta는 화염공학 기반의 세계관을 가진 3D 액션·어드벤처·퍼즐 게임 프로젝트입니다. 저는 TA로 참여해 프로젝트 전반의 라이팅 톤과 쉐이더 표현을 정리했고, 화면 안에서 세계관의 질감과 분위기가 자연스럽게 읽히도록 다듬었습니다. 이 작업으로 교내 알발페스타 대회에서 2등을 기록했습니다.",
        highlights: [
          "화염공학과 steampunk 감성이 읽히도록 라이팅과 화면 톤을 조율",
          "캐릭터와 환경 머티리얼이 하나의 스타일로 묶이도록 쉐이더를 개발",
          "실제 플레이 화면에서도 동일한 분위기가 유지되도록 비주얼 표현을 정리",
        ],
        stack: ["Unreal Engine", "Technical Art", "Lighting", "Shader", "Game Art"],
        media: [
          {
            type: "image",
            src: "/media/dev-vesta-cover.png",
            alt: "Vesta 대표 아트워크",
            caption: "Vesta의 타이틀 아트워크로, 프로젝트의 세계관과 비주얼 톤을 한 장에 모아 보여주는 메인 이미지입니다.",
          },
          {
            type: "image",
            src: "/media/dev-vesta-night.png",
            alt: "Vesta 야간 마을 스테이지 플레이 화면",
            caption: "밤하늘과 거대한 구조물이 중심이 되는 장면으로, 라이팅과 화면 톤을 통해 세계관 분위기를 또렷하게 정리했습니다.",
          },
          {
            type: "image",
            src: "/media/dev-vesta-cave.png",
            alt: "Vesta 실제 인게임 스크린샷",
            caption: "실제 인게임 스크린샷",
          },
        ],
      },
      {
        slug: "kpi-overload",
        eyebrow: "GLOBAL GAME JAM / JILIN UNIVERSITY",
        title: "KPI: OVERLOAD",
        period: "2일 국제 게임잼 / 디자인상",
        summary:
          "중국 길림대학교 제9회 대학생 게임잼에서 러시아·중국 학생 5명과 협업해 만든 시스템 패치 콘셉트 게임",
        role: "Programmer",
        award: "Best Game Design Award",
        description:
          "KPI: OVERLOAD는 중국 길림대학교에서 열린 제9회 대학생 게임잼에서 2일 동안 제작한 작품입니다. 러시아·중국 학생 5명과 함께 국제팀으로 협업했고, 저는 프로그래머로서 게임 로직과 플레이 흐름 구현을 맡았습니다. 시스템 에러와 패치를 테마로 한 콘셉트를 짧은 개발 기간 안에 완성도 있게 정리해 Best Game Design Award를 받았습니다.",
        highlights: [
          "2일 동안 국제팀과 협업하며 핵심 게임 플레이 로직과 흐름 구현을 담당",
          "시스템 패치 선택과 과부하 리스크를 하나의 플레이 콘셉트로 연결",
          "Best Game Design Award 수상으로 아이디어 전달력과 결과물 완성도를 검증",
        ],
        stack: [
          "Unreal Engine 5",
          "Gameplay Programming",
          "UI Logic",
          "Rapid Prototyping",
          "International Collaboration",
        ],
        media: [
          {
            type: "image",
            src: "/media/dev-kpi-award-card.svg",
            alt: "KPI: OVERLOAD 수상 요약 카드",
            caption:
              "사용자 제공 상장 내용을 바탕으로 정리한 수상 카드입니다. 제9회 대학생 게임잼에서 KPI: OVERLOAD가 Best Game Design Award를 받은 사실을 가장 먼저 보이도록 배치했습니다.",
          },
          {
            type: "video",
            src: "/media/dev-kpi-overload-demo.mp4",
            poster: "/media/dev-kpi-game-clear.png",
            alt: "KPI: OVERLOAD 플레이 영상",
            caption:
              "게임잼 현장에서 정리한 플레이 영상입니다. 시스템 패치 선택과 전투 흐름이 실제로 어떻게 이어지는지 바로 확인할 수 있습니다.",
          },
        ],
      },
    ],
    overview: [
      {
        title: "Vesta",
        body:
          "교내 알발페스타 Vesta 프로젝트에서는 TA 역할로 참여해 라이팅과 쉐이더 개발을 맡았고 대회 2등을 기록했습니다.",
      },
      {
        title: "중국 길림대학교 국제 게임잼",
        body:
          "중국 길림대학교 국제 게임잼에서는 러시아·중국 학생 5명과 2일간 국제팀으로 협업했고, 프로그래머로 참여한 KPI: OVERLOAD가 Best Game Design Award를 받았습니다.",
      },
      {
        title: "Development Focus",
        body:
          "두 작업 모두 장면 연출과 기술 구현을 따로 보지 않고, 플레이 경험 안에서 공간 구성과 그래픽 요소가 함께 작동하도록 다듬는 데 집중했습니다.",
      },
    ],
    steps: [
      {
        phase: "01",
        title: "플레이 경험 설계",
        description:
          "게임 안에서 어떤 장면과 동선이 먼저 읽혀야 하는지 정하고, 플레이 흐름에 맞는 공간 구조와 시각 우선순위를 잡습니다.",
      },
      {
        phase: "02",
        title: "TA와 비주얼 구현",
        description:
          "라이팅, 쉐이더, 화면 톤을 함께 조율하면서 실제 플레이 안에서도 일관된 비주얼이 유지되도록 완성합니다.",
      },
      {
        phase: "03",
        title: "대회 기준 완성도 정리",
        description:
          "짧은 제작 기간 안에서도 발표와 시연에서 강하게 보일 수 있도록 결과물을 다듬고, 핵심 장면의 완성도를 끝까지 끌어올립니다.",
      },
    ],
    outcomes: [
      "Vesta 2등, 중국 길림대학교 국제 게임잼 디자인상으로 개발 결과물의 전달력과 완성도 검증",
      "라이팅과 쉐이더를 중심으로 TA 성격의 개발 경험 축적",
      "게임 제작 안에서 장면 연출과 실제 구현을 함께 묶어내는 작업 방식 정리",
    ],
  },
  hackathon: {
    slug: "hackathon",
    index: "03",
    eyebrow: "BUILD / HACKATHON",
    title: "해커톤",
    overviewHeading: "활동 모음 디렉토리에서 실제 기록이 남아 있는 해커톤 결과만 추려 정리했습니다.",
    heroTitle: "짧은 시간 안에 정의하고, 만들고, 수상까지 연결한 해커톤 기록",
    heroSummary:
      "2022년 메타버스 솔루션 챌린지부터 2024년 대구 GIF 해커톤까지, 상장·상패·발표 현장 사진으로 확인할 수 있는 해커톤 작업만 골라 묶었습니다.",
    heroLead:
      "속도만 빠른 팀이 아니라, 짧은 시간 안에 문제 정의와 데모 흐름을 정리하고 발표에서 설득력 있게 전달하는 팀이 남는다고 생각합니다.",
    accent: "blue",
    tags: ["Prototype", "Team Lead", "Pitch", "Execution"],
    metrics: [
      { label: "Selected Awards", value: "7 Awards" },
      { label: "Span", value: "2022-2024" },
      { label: "Build Mode", value: "24-72H" },
    ],
    overview: [
      {
        title: "문제 정의",
        body:
          "짧은 시간 안에 설득력 있는 문제를 고르고, 팀이 흔들리지 않도록 하나의 문장으로 정리합니다.",
      },
      {
        title: "프로토타입 집중",
        body:
          "핵심 가치가 바로 보이는 흐름만 남기고 구현해, 심사 단계에서 가장 강한 장면이 먼저 보이도록 설계합니다.",
      },
      {
        title: "발표와 전달",
        body:
          "기능 설명이 아니라 왜 이 팀이 이 문제를 이렇게 풀었는지 전달할 수 있도록 스토리와 데모를 엮습니다.",
      },
    ],
    rewardsGallery: {
      slug: "hackathon-rewards",
      title: "Rewards",
      summary:
        "대회별 대표 이미지 한 장만 남기고, 어떤 대회에서 어떤 역할로 무엇을 만들었는지와 어떤 상을 받았는지 바로 읽히도록 정리했습니다.",
      media: [
        {
          type: "image",
          src: "/media/hack-reward-busan-ict.jpg",
          alt: "부산 ICT 이노베이션 해커톤 최우수상 수상 사진",
          title: "BUSAN ICT",
          meta: ["2025", "GRAND"],
          caption:
            "부산 ICT 이노베이션 해커톤에서 팀장으로 떨이 해산물 판매 플랫폼을 개발해 최우수상을 받았습니다.",
        },
        {
          type: "image",
          src: "/media/hack-reward-metaverse-special.jpg",
          alt: "메타버스 솔루션 챌린지 특별상 상장",
          title: "SPECIAL",
          meta: ["2022", "KIDKONG"],
          caption:
            '메타버스 솔루션 챌린지에서 팀장으로 청소년 상담 솔루션 "키드콩"을 개발해 특별상을 받았습니다.',
        },
        {
          type: "image",
          src: "/media/hack-reward-daegu-ai-award.jpg",
          alt: "대구 AI 빅데이터 해커톤 우수상 상패",
          title: "AI.BB",
          meta: ["2023", "DGTP"],
          caption:
            '대구 AI·빅데이터 해커톤에서 팀장으로 UE5 Metahuman 기반 AI 홍보대사 서비스 "메타 대구"를 개발해 테크노파크상을 받았습니다.',
        },
        {
          type: "image",
          src: "/media/hack-reward-sk-team.jpg",
          alt: "SK 알파코 AppJam 우수상 수상 팀 사진",
          title: "APPJAM",
          meta: ["2024", "SK"],
          caption:
            'SK 알파코 게임잼에서 팀원으로 흰수염고래를 주제로 한 게임 "아고뤠"를 개발해 우수상을 받았습니다.',
        },
        {
          type: "image",
          src: "/media/hack-reward-daegu-gif-team.jpg",
          alt: "대구 GIF 해커톤 2등 수상 팀 사진",
          title: "DAEGU GIF",
          meta: ["2024", "2ND"],
          caption:
            '대구 GIF 해커톤에서 팀원으로 생명안전 아이디어 "SafeAI"를 발표해 2등을 받았습니다.',
        },
        {
          type: "image",
          src: "/media/hack-reward-sookmyung-stage.jpg",
          alt: "숙명여대 멋쟁이사자처럼 해커톤 우수상 발표 현장",
          title: "LIKELION",
          meta: ["2023", "SMWU"],
          caption:
            "숙명여대 멋쟁이사자처럼 해커톤에서 팀원으로 뇌파 기반 게임 과몰입 예방 서비스를 개발해 우수상을 받았습니다.",
        },
      ],
    },
    steps: [
      {
        phase: "01",
        title: "주제 압축",
        description:
          "아이디어를 넓게 벌리지 않고 심사 기준과 팀 역량에 맞는 한 가지 문제로 빠르게 압축합니다.",
      },
      {
        phase: "02",
        title: "역할 분배와 구현",
        description:
          "팀원이 각자 속도를 낼 수 있도록 작업을 분배하고, 데모의 핵심 플로우는 직접 챙겨 완성도를 올립니다.",
      },
      {
        phase: "03",
        title: "최종 피치 마감",
        description:
          "프로토타입, 발표 자료, 시연 순서를 한 세트로 정리해 짧은 발표 시간 안에 메시지가 또렷하게 남도록 다듬습니다.",
      },
    ],
    outcomes: [
      "빠른 시간 안에도 제품의 핵심 가치가 드러나는 프로토타입 제작",
      "팀 리딩과 발표 설계를 함께 수행하며 결과물 전달력 강화",
      "다수의 수상 경험으로 검증된 실행 속도와 마감 집중력 확보",
    ],
  },
};

export const awards = [
  {
    badge: "총장상",
    title: "Unist 슈퍼컴퓨팅캠프",
    description:
      "Python MPI를 활용한 Phong 쉐이딩 병렬화 및 남/여 구분 AI 모델 개발.",
  },
  {
    badge: "최우수상",
    title: "부산 ICT 이노베이션 해커톤",
    description: "떨이 해산물 판매 플랫폼 개발 (팀장).",
  },
  {
    badge: "테크노파크상",
    title: "대구 AI·빅데이터 해커톤",
    description:
      'UE5 Metahuman을 활용한 지역 특색 AI 홍보대사 서비스 "메타 대구" 개발.',
  },
  {
    badge: "우수상",
    title: "멋사 플렉스튜디오 해커톤",
    description: "청년 전세 사기 예방 플랫폼 개발 (팀장).",
  },
  {
    badge: "우수상",
    title: "숙명여대 멋쟁이사자처럼 해커톤",
    description: "뇌파 측정을 통한 게임 과몰입 예방 서비스 개발.",
  },
  {
    badge: "우수상",
    title: "컴퓨터정보학회 게임부문 논문",
    description: "사용자 시점 기반의 VR 상호작용 기술 연구.",
  },
  {
    badge: "우수상",
    title: "SK 알파코 게임잼",
    description: '흰수염고래를 주제로 한 "아고뤠" 개발.',
  },
  {
    badge: "은상",
    title: "경운대 지능형 모빌리티 AI 경진대회",
    description: "YOLO v5 모델을 통한 객체 학습 및 mAP 도출.",
  },
  {
    badge: "2등",
    title: "교내 알발페스타 Vesta",
    description: "TA - 라이팅 및 쉐이더 개발.",
  },
  {
    badge: "2등",
    title: "대구 창업경진 해커톤",
    description: '기프티콘 악용 사례 방지 플랫폼 "프리티콘" 개발.',
  },
  {
    badge: "2등",
    title: "전문대 창업경진 대회",
    description: "XR 스타트업 WonStudio 사업계획서 발표.",
  },
  {
    badge: "2등",
    title: "대구 GIF 해커톤",
    description: "생명안전 아이디어 SafeAI 발표.",
  },
  {
    badge: "특별상",
    title: "메타버스 솔루션 챌린지",
    description: '청소년 상담 솔루션 "키드콩" 개발.',
  },
  {
    badge: "디자인상",
    title: "중국 길림대 국제 게임잼",
    description: "프로그래머 - 2일 국제 게임잼에서 KPI: OVERLOAD 개발 및 Best Game Design Award 수상.",
  },
];

export const activities = [
  {
    category: "Project",
    title: "Technical Artist (TA)",
    meta: '애니메이션 협업 "GOT" 시네마틱',
    description:
      "시네마틱 영상을 위한 Fog Simulator 및 RVT Controller 기획 및 개발",
    tags: ["Unreal Engine", "Technical Art", "Shader"],
  },
  {
    category: "Project",
    title: "팀장",
    meta: "대전 AI VFX 아카데미",
    description:
      'UE5 기반 AI 애니메이션 "그림자 복도" 총괄, 대전 특수영상 상영제 출품.',
    tags: ["Unreal Engine 5", "AI Animation", "Grok", "Kling", "Wan"],
  },
  {
    category: "Research",
    title: "논문 발표",
    meta: "디그라 연세대학교 한국학회",
    description:
      '게임 플레이어 정체성 변화에 관한 연구 "플레이어에서 창작자로의 여정" 발표.',
    tags: ["Research", "Game Studies"],
  },
  {
    category: "Competition",
    title: "참가자",
    meta: "First Tech Challenge",
    description:
      "국내 최대규모 로봇공학 대회. 자율주행 로봇을 활용한 미션 수행.",
    tags: ["Robotics", "Autonomous Driving"],
  },
  {
    category: "Project",
    title: "참가자",
    meta: "배재대학교 R&E 프로젝트",
    description: "5G 환경 사용에 따른 문제점 분석 및 전력 절감 시스템 구현.",
    tags: ["5G", "System Architecture"],
  },
  {
    category: "Education",
    title: "수료",
    meta: "한국메타버스산업협회 & VR AR 제작거점센터",
    description:
      "디지털휴먼 및 페이셜캡쳐 과정 수료. XR 융합 메타버스 인력양성 교육 수료.",
    tags: ["Digital Human", "Facial Capture", "XR"],
  },
  {
    category: "Mentoring",
    title: "SW 코딩 멘토 / 강사",
    meta: "엘리스 플랫폼 & 대전 유성고",
    description:
      "청소년 대상 코딩 강의 및 멘토링. XR 관련 이론 강의 및 실습 지도를 진행했습니다.",
    tags: ["Mentoring", "Teaching", "XR"],
  },
  {
    category: "Business",
    title: "지원 사업",
    meta: "청강문화산업대학교 프런티어 지원사업",
    description:
      '창업 아이디어 "조이풀" 프런티어 사업 지원 프로젝트.',
    tags: ["Business Planning", "Ideation"],
  },
];

export const contactCards = [
  {
    key: "email",
    label: "Email",
    value: "ask@junnnny.kr",
    icon: "/assets/contact/mail.png",
  },
  {
    key: "phone",
    label: "Phone",
    value: "010-9166-1352",
    icon: "/assets/contact/phone.png",
  },
  {
    key: "location",
    label: "Location",
    value: "대전 / 경기",
    icon: "/assets/contact/map-pin.png",
  },
];
