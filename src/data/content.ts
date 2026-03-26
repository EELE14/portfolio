/* Copyright (c) 2026 eele14. All Rights Reserved. */
import type { DescriptionSegment, Project } from "../types";

export type { DescriptionSegment, Project };

export const about = {
  name: "eele",
  title: "Developer & Aviator",
  intro:
    "I build thoughtful digital products: From interactive interfaces to robust backend systems. Currently focused on React, TypeScript, Python backends and everything that makes the web feel alive.",
  bio: [
    "I'm a developer who cares about the details: the subtle animation that makes an interaction feel right, the API design that just makes sense and works, the code that everyone can read and maintain.",
    "When I'm not writing code I'm probably flying somewhere, playing games with some friends, or experimenting with cool visuals in the browser.",
  ],
  location: "Germany",
};

export const projects: Project[] = [
  {
    title: "ablak",
    description: [
      "A zero-dependency viewport tracker as an ",
      " that runs once per animation frame. It combines scroll, mouse, window position, and orientation updates into a single rAF callback.",
    ],
    tags: ["TypeScript", "Browser API", "npm"],
    year: 2026,
    link: "https://ablak.eele14.dev",
  },
  {
    title: "Portfolio",
    description: [
      "This very site. Built with React, TailwindCSS and ablak for the mouse reactive image.",
    ],
    tags: ["React", "Tailwind CSS", "Vite"],
    year: 2026,
    link: "https://github.com/eele14/portfolio",
  },
  {
    title: "Linux Server Interface",
    description:
      "A self-hosted Raspberry Pi management dashboard. Remote control docker containers, monitor system stats, manage files, and access a live terminal, all from a web frontend.",
    tags: ["API", "React", "Dashboard"],
    year: 2025,
    link: "https://github.com/eele14/Raspberry-Pi-Dashboard",
  },
  {
    title: "Guns.lol knockoff.",
    description: [
      "Some may know the popular profile website ",
      { text: "guns.lol", href: "https://guns.lol" },
      ", that however has premium features which I didn't like to pay for. Forked from ",
      { text: "Iceit", href: "https://github.com/1ceit" },
      " I added my own background and backend.",
    ],
    tags: ["API", "React", "Profile"],
    year: 2025,
    link: "https://profile.eele14.dev/",
  },
  {
    title: "Cephie Studios",
    description: [
      "Currently working as a Developer at ",
      { text: "Cephie Studios", href: "https://cephie.app/" },
      ", building innovative apps like ",
      { text: "PFControl", href: "https://pfcontrol.com/" },
      " and ",
      { text: "Cephie Snap.", href: "https://snap.cephie.app/" },
    ],
    tags: ["Frontend", "Backend", "Production"],
    year: 2025,
    link: "https://github.com/cephie-studios",
  },
];

export const contact = {
  email: "eele141020@gmail.com",
  github: "https://github.com/EELE14",
  links: [
    { label: "GitHub", href: "https://github.com/EELE14" },
    { label: "Discord", href: "https://discord.com/users/1263756486660587543" },
    { label: "Email", href: "mailto:eele141020@gmail.com" },
  ],
};
