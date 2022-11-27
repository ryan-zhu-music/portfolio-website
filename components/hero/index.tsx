import React from "react";
import { socials } from "../../data/socials";

export default function Hero() {
  return (
    <header className="w-screen h-screen flex flex-col items-center justify-center px-5 md:px-20 lg:px-48">
      <h1 className="text-3xl md:text-5xl lg:text-7xl drop-shadow-lg text-white text-center">
        Ryan Zhu
      </h1>
      <h2 className="flex flex-col md:flex-row text-lg md:text-xl lg:text-2xl drop-shadow-lg text-mauve mt-6 text-center">
        Contemporary Musician
        <span className="mx-5">+</span>Full-Stack Developer
      </h2>
      <div className="flex flex-row mt-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl lg:text-4xl text-mauve mx-5 drop-shadow-md"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </header>
  );
}
