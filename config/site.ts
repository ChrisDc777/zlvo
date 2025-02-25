export const siteConfig = {
  name: "Launch UI",
  url: "http://localhost:3000",
  chat:"http://localhost:3000/chat",
  dashboard:"http://localhost:3000/dashboard",
  getStartedUrl:
    "http://localhost:3000/dashboard",
  ogImage: "https://launchuicomponents.com/og.jpg",
  description:
    "Landing page components built with React, Shadcn/ui and Tailwind that will make your website feel premium.",
  links: {
    instagram: "https://www.instagram.com/chrisdcosta777/",
    github: "https://github.com/ChrisDc777/togthr_pruf",
    email: "chrisdcosta777@gmail.com",
  },
  pricing: {
    pro: "https://launchui.lemonsqueezy.com/buy/b4798c68-c858-4c34-860b-069b5a0d6c4e",
    team: "https://launchui.lemonsqueezy.com/buy/130d8cfe-e123-464b-9f67-c74c5fedfb45",
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
