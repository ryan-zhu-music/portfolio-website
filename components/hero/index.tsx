import React from "react";
import { TypeAnimation } from "react-type-animation";
import { socials } from "../../data/socials";

export default function Hero() {
  return (
    <header className="relative w-screen h-screen flex flex-col items-center justify-center px-5 md:px-20 lg:px-48">
      <h1 className="text-3xl md:text-5xl lg:text-7xl drop-shadow-lg text-white text-center pl-3">
        {"Ryan Zhu".split("").map((letter, index) => (
          <span
            key={index}
            style={{
              animationDelay: index / 6 + "s",
            }}
            className="fader"
          >
            {letter}
          </span>
        ))}
      </h1>
      <TypeAnimation
        sequence={[
          "Contemporary Musician",
          5000,
          "Full-Stack Developer",
          5000,
          "Virtuoso Pianist",
          5000,
          "Avid Learner",
          5000,
          "Supportive Mentor",
          5000,
        ]}
        wrapper="h2"
        cursor={true}
        repeat={Infinity}
        className="text-lg md:text-xl lg:text-2xl drop-shadow-lg text-mauve mt-6 text-center"
      />
      <div
        className="flex flex-row mt-6"
        data-aos="zoom-in-up"
        data-aos-delay={200}
      >
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-mauve mx-5 hover:drop-shadow-md hover:scale-105 duration-500 hover:text-white ease-in-out"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </header>
  );
}
