import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaHome,
  FaCompactDisc,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/ryan-zhu-music",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ryanzhumusic/",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/r.y.a.n.z.h.u/",
    icon: <FaInstagram />,
  },
  {
    name: "Discord",
    url: "https://discordapp.com/users/401127703698210816",
    icon: <FaDiscord />,
  },
];

export const links = [
  {
    name: "Home",
    icon: <FaHome />,
    link: "/",
  },
  {
    name: "Discography",
    icon: <FaCompactDisc />,
    link: "/discography",
  },
  {
    name: "Portfolio",
    icon: <FaFolderOpen />,
    link: "/portfolio",
  },
  {
    name: "Contact",
    icon: <FaEnvelope />,
    link: "/contact",
  },
];
