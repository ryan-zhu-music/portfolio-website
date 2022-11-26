import React from "react";

export default function About() {
  return (
    <div className="w-screen h-screen px-10 md:px-20 lg:px-32 bg-transparent rounded-2xl flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl drop-shadow-lg text-mauve">
        About
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl drop-shadow-lg text-mauve mt-6">
        Hi, I{"'"}m Ryan! I am a Toronto high school student with a keen
        interest in computer science. I enjoy building websites and
        applications, and love learning new things! I also have a hobby in
        composing and music; I have experimented with many different styles of
        music, ranging from late-romantic orchestral to modern film/VGM
        soundtracks.
      </p>
    </div>
  );
}
