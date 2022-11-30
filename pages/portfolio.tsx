import React from "react";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

export default function Portfolio() {
  return (
    <main className="bg-[url('/assets/img/background.png')] bg-cover bg-top flex flex-col items-center justify-center px-10 md:px-20 lg:px-32">
      <Navbar />
      <header className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-white tracking-[0.5em] drop-shadow-xl font-elianto uppercase text-3xl md:text-5xl lg:text-7xl pt-5">
          Portfolio
        </h1>
        <p className="text-mauve font-montserrat  text-base md:text-lg lg:text-xl text-center my-5 font-normal">
          In my free time (and when I'm not composing), I enjoy working on side
          projects and other involvements. Check them out below!
        </p>
        <a
          href="/Ryan Zhu - Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="text-white font-elianto uppercase tracking-[0.3em] hover:tracking-[0.4em] text-base md:text-lg gradient-mauve px-7 py-4 rounded-full font-semibold hover:shadow-sm hover:scale-105 duration-500 ease-in-out"
        >
          Resume
        </a>
      </header>
      <div className="w-full">
        <Projects />
      </div>
    </main>
  );
}
