import React from "react";

export default function Hero() {
  return (
    <header className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl drop-shadow-lg text-white">
        Ryan Zhu
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl drop-shadow-lg text-mauve mt-6">
        Contemporary Musician + Full-Stack Developer
      </h2>
    </header>
  );
}
