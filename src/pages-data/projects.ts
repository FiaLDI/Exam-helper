export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  category: "core" | "contrib" | "pet" | "legacy";
  case?: {
    title: string;
    solution: string;
  }[]
}

export const projectsData: ProjectItem[] = [
  // ============================
  // A. CORE PROJECTS
  // ============================
  {
    id: 1,
    category: "core",
    title: "Orbis — Real-Time Communication Platform (Diploma Project)",
    description:
      "Designed and implemented a modular real-time communication platform featuring private channels, role-based access control, moderation workflows, and distributed services. Built with a focus on scalability, clean architecture principles, and maintainable system boundaries.",
    tech: [
      "React.js",
      "React Hook Form",
      "Express.js",
      "Dependency Injection",
      "Redis",
      "PostgreSQL",
      "Socket.IO",
      "Prisma",
      "FSD Architecture"
    ],
    link: "https://github.com/FiaLDI/Orbis-Diplom",
    case: [
      {
        title: "Challenge",
        solution: "Designed a modular architecture isolating messaging, authorization, and moderation domains with clear service boundaries."
      }
    ]
  },

  {
    id: 2,
    category: "core",
    title: "Orbis Game — Sci-Fi Survival (Unity)",
    description:
      "Architected core gameplay systems including abilities, stats, buffs, quests, world generation, and streaming. Implemented performant modular subsystems and heavily optimized rendering and spawning pipelines using GPU instancing and custom data models.",
    tech: [
      "Unity",
      "C#",
      "FishNet",
      "ScriptableObjects",
      "GPU Instancing",
      "Ability System",
      "Buff System"
    ],
  },

  // ============================
  // B. CONTRIBUTIONS
  // ============================
  {
    id: 3,
    category: "contrib",
    title: "singlepagestartup — Contributor",
    description:
      "Implemented centralized HTTP error handling and improved paginated search in the admin panel. Contributed production-quality code to a live SaaS product.",
    tech: ["React", "Next.js", "TypeScript"],
    link: "https://github.com/singlepagestartup/singlepagestartup"
  },
  {
    id: 4,
    category: "contrib",
    title: "Kultfond RF (Private Project)",
    description:
      "Delivered responsive UI improvements and optimized layout for mobile devices across a live production website.",
    tech: ["Next.js", "React", "TailwindCSS"]
  },
  {
    id: 5,
    category: "contrib",
    title: "business.zapaha.net (Private Project)",
    description:
      "Enhanced UX and implemented adaptive layouts, ensuring consistent rendering across device groups.",
    tech: ["React", "Next.js", "TailwindCSS"]
  },
  {
    id: 6,
    category: "contrib",
    title: "didigallery.com (Private Project)",
    description:
      "Developed new functional UI blocks and optimized responsive behavior based on real business requirements.",
    tech: ["React", "Next.js", "TailwindCSS"]
  },

  // ============================
  // C. PET / SIDE PROJECTS
  // ============================
  {
    id: 7,
    category: "pet",
    title: "Markdown Editor — Tauri Desktop App",
    description:
      "Cross-platform Markdown editor built with Next.js + Rust (Tauri). Designed for speed, portability, and extensibility. Roadmap includes real-time collaboration and cloud sync.",
    tech: ["Next.js", "Tauri", "Rust", "TypeScript"],
    link: "https://github.com/FiaLDI/Markdown-Editor"
  },
  {
    id: 8,
    category: "pet",
    title: "Project Terraform (Unity)",
    description:
      "Implemented a feature-sliced architecture for gameplay systems including stats, abilities, and buffs. Focused on maintainability, modularity, and scalable gameplay logic.",
    tech: ["Unity", "C#", "FSD", "Gameplay Systems"]
  },
  {
    id: 9,
    category: "pet",
    title: "PostCreator — Automated Post Generator",
    description:
      "Production-ready tool for generating structured posts based on user prompts. Built as an internal project for interview preparation; includes custom UI, local storage, and animated flows.",
    tech: [
      "React",
      "Next.js",
      "Zustand",
      "TailwindCSS",
      "Framer Motion",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL"
    ],
    link: "https://github.com/FiaLDI/PostCreator"
  },

  // ============================
  // D. LEGACY
  // ============================
  {
    id: 10,
    category: "legacy",
    title: "TaskManager (Legacy Project)",
    description:
      "Front-end client for interacting with JSON-based backend data. Implemented CRUD operations and data transformation pipelines. Early-stage project showcasing foundational Web skills.",
    tech: ["Next.js 15", "React", "Redux", "Tailwind", "TypeScript"],
    link: "https://github.com/FiaLDI/TaskManager"
  },

  {
    id: 11,
    category: "legacy",
    title: "Voice Chat — WebRTC Audio Chat",
    description:
      "Minimal WebRTC audio application with a custom signaling server. Implemented SPD/ICE negotiation and peer-to-peer audio streaming. Demonstrates understanding of real-time media fundamentals.",
    tech: ["JavaScript", "WebRTC", "Node.js", "Express"],
    link: "https://github.com/FiaLDI/voice-chat"
  }
];
