import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Suneet Tipirneni",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Yet another Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/suneettipirneni",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/386337006764032002",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
];
