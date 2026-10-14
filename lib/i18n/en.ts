import type { Dictionary } from "./vi";

export const en: Dictionary = {
  meta: {
    title: "Nguyen Van Khanh Nhan — Full-stack Software Engineer for freelance projects",
    description:
      "I design and build websites, web apps and automation tools to order. Free quote.",
    ogLocale: "en_US",
  },
  header: {
    logo: "Khanh Nhan",
    nav: [
      { href: "#services", label: "Services" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  languageSwitch: "Switch language",
  hero: {
    badge: "Available for freelance projects",
    name: "Nguyen Van Khanh Nhan",
    role: "Full-stack Software Engineer",
    pitch:
      "I design and build websites, web apps and automation tools to order — fast, clean, easy to use and easy to maintain.",
    ctaPrimary: "Message on Zalo",
    ctaSecondary: "Send an email",
    facts: [
      "1+ year in enterprise software",
      "B.Eng. Computer Science, HCMUT",
      "Frontend + Backend",
    ],
    avatarAlt: "Photo of Nguyen Van Khanh Nhan",
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Websites & landing pages",
        description:
          "For individuals, shops and small businesses; SEO-friendly and mobile-ready.",
      },
      {
        title: "Web apps & management systems",
        description: "Admin dashboards, order/customer management, reports, roles.",
      },
      {
        title: "Tools & automation",
        description:
          "Excel/data processing, Python scripts, in-browser tools, AI integrations.",
      },
      {
        title: "Maintenance & upgrades",
        description: "Bug fixes, new features and speed-ups for existing sites.",
      },
    ],
    note: "Free quote — pricing depends on project scope. Tell me about your idea.",
  },
  projects: {
    title: "Projects",
    viewLive: "View live",
    items: [
      {
        id: "han-ngu",
        title: "Hán Ngữ Studio",
        description:
          "Free Chinese-learning tools for Vietnamese learners: printable A4 handwriting sheets and Chinese word segmentation, running in the browser.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python (FastAPI)", "Vercel"],
      },
      {
        id: "language-platform",
        title: "Language Learning Platform",
        description:
          "A Duolingo-style platform: courses, lessons, vocabulary, quizzes, scoring and progress tracking.",
        tags: ["ASP.NET Core", "Entity Framework Core", "Next.js", "React", "SQL Server"],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "AvePoint",
        role: "Software Developer",
        dates: "03/2025 – 05/2026",
        summary:
          "Built features for FLY, an enterprise cloud-migration platform (SharePoint, OneDrive, Google Drive): job processing, destination validation, conflict resolution.",
        tags: ["C#", ".NET", "ASP.NET Core", "SQL"],
      },
      {
        company: "FPT Software",
        role: "Full-stack Developer Intern",
        dates: "02/2025 – 04/2025",
        summary: "Built a hiring platform with ASP.NET Core and Angular.",
        tags: ["ASP.NET Core", "Angular", "SQL Server"],
      },
      {
        company: "Paradox.AI",
        role: "Backend Developer Intern",
        dates: "09/2024 – 01/2025",
        summary: "Built REST APIs with Python/Django for AI products.",
        tags: ["Python", "Django", "PostgreSQL", "Vue.js"],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      },
      {
        title: "Backend",
        items: ["C#", "ASP.NET Core", "Python", "Django", "FastAPI", "REST API", "Entity Framework Core"],
      },
      {
        title: "Database",
        items: ["PostgreSQL", "SQL Server", "Redis", "Elasticsearch"],
      },
      {
        title: "Tools",
        items: ["Git", "Docker", "Vercel", "Agile/Scrum", "AI-assisted development"],
      },
    ],
  },
  process: {
    title: "How I work",
    steps: [
      "Discuss your needs",
      "Quote & timeline",
      "Build with regular demos",
      "Hand-over & after-launch support",
    ],
  },
  about: {
    title: "Education & achievements",
    items: [
      "B.Eng. Computer Science (Applied AI), HCMC University of Technology – VNU, 2020–2024, GPA 3.5/4",
      "First Prize, National Mathematics Competition (2019)",
      "Silver Medal, Hanoi Open Mathematics Competition (2018)",
      "TOEIC 750",
    ],
  },
  contact: {
    title: "Have an idea? Let's build it.",
    subtitle: "I usually reply within 24 hours.",
    zalo: "Zalo",
    phone: "Phone",
    email: "Email",
  },
  footer: {
    copyright: "Nguyen Van Khanh Nhan",
  },
};
