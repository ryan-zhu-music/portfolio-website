import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-screen pb-20 px-10 md:px-20 lg:px-48 bg-transparent flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row mt-10">
        <div className="w-full md:w-1/3 px-10" data-aos="flip-right">
          <Image
            src="/assets/img/profile.webp"
            alt="Ryan Zhu"
            width={300}
            height={300}
          />
        </div>
        <div className="w-full md:w-2/3 lg:ml-10" data-aos="fade-up">
          <p className="text-base md:text-lg lg:text-xl drop-shadow-lg text-mauve mt-6 font-normal">
            Hi, I{"'"}m Ryan! I am a Toronto high school student with a keen
            interest in computer science. I enjoy building websites and
            applications, and love learning new things!
          </p>
          <p className="text-base md:text-lg lg:text-xl drop-shadow-lg text-mauve mt-6 font-normal">
            I also have a hobby in composing and music; I have experimented with
            many different styles of music, ranging from late-romantic
            orchestral to modern film/VGM soundtracks.
          </p>
        </div>
      </div>
    </div>
  );
}
