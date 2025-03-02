export const siteConfig = {
  name: "togthr",
  url: `${process.env.KINDE_SITE_URL}`,
  chat:`${process.env.KINDE_SITE_URL}/chat`,
  dashboard:`${process.env.KINDE_SITE_URL}/dashboard`,
  journal:`${process.env.KINDE_SITE_URL}/journal`,
  getStartedUrl:
    `${process.env.KINDE_SITE_URL}/dashboard`,
  ogImage: "https://launchuicomponents.com/og.jpg",
  description:
    "Landing page components built with React, Shadcn/ui and Tailwind that will make your website feel premium.",
  links: {
    instagram: "https://www.instagram.com/chrisdcosta777/",
    github: "https://github.com/ChrisDc777/togthr_pruf",
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
