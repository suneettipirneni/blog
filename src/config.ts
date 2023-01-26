import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Suneet Tipirneni",
  desc: "An epic blog site",
  title: "Yet another Blog",
  ogImage:
    "https://images.unsplash.com/photo-1561131989-b8112bafbd43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
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
