export const siteConfig = {
  name: "Smart structuring",
  url: process.env.KINDE_SITE_URL || "http://localhost:3000", // Provide a default
  extract: `${process.env.KINDE_SITE_URL || "http://localhost:3000"}/extract`,
  chat: `${process.env.KINDE_SITE_URL || "http://localhost:3000"}/dashboard`,
  dashboard: `${process.env.KINDE_SITE_URL || "http://localhost:3000"}/dashboard`,
  journal: `${process.env.KINDE_SITE_URL || "http://localhost:3000"}/journal`,
  getStartedUrl: `${process.env.KINDE_SITE_URL || "http://localhost:3000"}/dashboard`,
  ogImage: "https://launchuicomponents.com/og.jpg",
  description:
    "Landing page components built with React, Shadcn/ui and Tailwind that will make your website feel premium.",
  links: {
    instagram: "https://www.instagram.com/chrisdcosta777/",
    github: "https://github.com/ChrisDc777/zlvo",
    email: "chrisdcosta777@gmail.com",
  },
  pricing: {
    pro: `${process.env.KINDE_SITE_URL}`,
    team: `${process.env.KINDE_SITE_URL}`,
  },
  stats: {
    figma: "1,385",
    github: "198",
    cli: "801",
    total: "2.3k+",
    updated: "3 Feb 2025",
    components: "126",
    sections: "66",
    illustrations: "16",
    animations: "15",
  },
};

export type SiteConfig = typeof siteConfig;
