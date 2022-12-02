import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaHome,
  FaCompactDisc,
  FaEnvelope,
  FaSpotify,
  FaYoutube,
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

export const music_socials = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/6QRbpevuWFtC1Eoy58bGVW?si=CjbZ5q2JRG2TlVOXr8iiDA",
    icon: <FaSpotify />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ryan.zhu.music/",
    icon: <FaInstagram />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCHIpJEaiDBQ8Jd07tZj0D7A",
    icon: <FaYoutube />,
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
    name: "Contact",
    icon: <FaEnvelope />,
    link: "/contact",
  },
];
