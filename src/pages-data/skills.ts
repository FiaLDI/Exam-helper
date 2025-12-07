import { SkillCategory } from "@/entities/skills-description/interface";

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        title: "React.js",
        description: "Создание сложных UI, управление состоянием, кастомные хуки, оптимизация рендера.",
        time: "с 2023"
      },
      {
        title: "Next.js",
        description: "Разработка fullstack-приложений, SSR/SSG, API Routes, серверные компоненты.",
        time: "с 2023"
      },
      {
        title: "TailwindCSS",
        description: "Построение адаптивных интерфейсов, создание дизайн-систем, кастомизация UI.",
        time: "с 2023"
      },
      {
        title: "Redux Toolkit",
        description: "Архитектура глобального состояния, RTK Query, оптимизация state-flow.",
        time: "с 2023"
      },
      {
        title: "Framer Motion",
        description: "Анимации интерфейсов, плавные переходы, UX-улучшения.",
        time: "с 2024"
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        title: "Nest.js",
        description: "Модульная backend-архитектура, Guards, Providers, WebSocket-шлюзы.",
        time: "с 2023"
      },
      {
        title: "Node.js",
        description: "Реализация API, real-time сервисов, сигнальных серверов для WebRTC.",
        time: "с 2022"
      },
      {
        title: "Express.js",
        description: "Легковесные REST API, middleware, шаблонизаторы.",
        time: "с 2022"
      },
      {
        title: "PostgreSQL",
        description: "Проектирование схем, запросы, индексы, оптимизация.",
        time: "с 2023"
      },
      {
        title: "Prisma",
        description: "ORM слои, миграции, типобезопасные запросы, реляции.",
        time: "с 2023"
      },
      {
        title: "Redis",
        description: "Кэширование, хранение сессий, очереди, Pub/Sub для real-time.",
        time: "с 2023"
      },
      {
        title: "Socket.IO",
        description: "Real-time события, комнаты, приватные каналы, чат-сервисы.",
        time: "с 2023"
      },
    ],
  },

  {
    title: "Infrastructure",
    items: [
      {
        title: "Docker",
        description: "Контейнеризация сервисов, docker-compose, dev/test окружения.",
        time: "с 2023"
      },
      {
        title: "Nginx",
        description: "Reverse proxy, конфигурация SSL, балансировка, статическая выдача.",
        time: "с 2023"
      },
      {
        title: "Git",
        description: "Фича-ветки, rebase/merge, CI/CD, работа в монорепозитории.",
        time: "с 2022"
      },
      {
        title: "npm / pnpm / bun",
        description: "Управление пакетами, скрипты, быстрые рантаймы (Bun).",
        time: "с 2022"
      },
    ],
  },

  {
    title: "GameDev & Desktop",
    items: [
      {
        title: "Unity (URP / VFX Graph / Shader Graph)",
        description: "Создание визуальных эффектов, материалов, оптимизация рендера.",
        time: "с 2022"
      },
      {
        title: "C#",
        description: "Архитектура игровых систем, события, async, паттерны.",
        time: "с 2022"
      },
      {
        title: "FishNet Networking",
        description: "Синхронизация состояния, сетевые события, объектные спавны.",
        time: "с 2023"
      },
      {
        title: "ScriptableObjects Architecture",
        description: "Данные, конфигурации, Ability/Buff системы, SO-driven дизайн.",
        time: "с 2022"
      },
      {
        title: "Profiling & Optimization",
        description: "Оптимизация GC, профилирование кадров, работа с памятью.",
        time: "с 2023"
      },
      {
        title: "GPU Instancing",
        description: "Оптимизация массовых объектов, генерация окружения.",
        time: "с 2023"
      },
    ],
  },
];
