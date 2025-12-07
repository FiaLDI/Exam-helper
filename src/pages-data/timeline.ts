export interface TimelineItem {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "HTML, CSS, базовый JavaScript",
    subtitle: "Первые шаги во фронтенде",
    description:
      "Адаптивная вёрстка, Flex/Grid, формы, простые приложения на чистом JS.",
  },
  {
    id: 2,
    title: "Первые проекты",
    subtitle: "Статичные лендинги и небольшие сайты",
    description:
      "Создание посадочных страниц и простых коммерческих проектов.",
  },
  {
    id: 3,
    title: "Real-time: WebSocket / WebRTC",
    subtitle: "Живые коммуникационные приложения",
    description:
      "Эксперименты с передачей данных, аудио/видео, синхронным взаимодействием.",
  },
  {
    id: 4,
    title: "Server-side шаблонизаторы",
    subtitle: "Handlebars, EJS",
    description:
      "SSR на Node.js, генерация динамических страниц и серверный рендеринг.",
  },
  {
    id: 5,
    title: "Базы данных",
    subtitle: "PostgreSQL, Redis",
    description:
      "Моделирование данных, запросы, оптимизация, кэширование.",
  },
  {
    id: 6,
    title: "Backend на Node.js",
    subtitle: "Express.js и REST API",
    description:
      "Архитектура API, авторизация, middleware, работа с файлами.",
  },
  {
    id: 7,
    title: "Современный frontend",
    subtitle: "React.js",
    description:
      "Компоненты, хуки, управление состоянием, UI архитектура.",
  },
  {
    id: 8,
    title: "Fullstack",
    subtitle: "Next.js, Hono, Bun",
    description:
      "SSR, SSG, API routes, workerd/Bun рантайм, современные фреймворки.",
  },
  {
    id: 9,
    title: "Дипломный проект",
    subtitle: "Интерактивная платформа / соцсеть",
    description:
      "Real-time коммуникации, сложная архитектура, права/роли, масштабируемость.",
  },
  {
    id: 10,
    title: "Unity / C# GameDev",
    subtitle: "Игровые системы и архитектура",
    description:
      "Процедурная генерация, Ability/Buff системы, оптимизация, FishNet.",
  },
];
