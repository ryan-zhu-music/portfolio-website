import React from "react";
import Playlist from "../components/music/playlist";
import { soundtracks, piano, ensemble } from "../data/tracks";

export default function Discography() {
  return (
    <main className="bg-[url('/assets/img/background.png')] bg-cover bg-top flex flex-col items-center justify-center">
      <header className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-white tracking-[0.5em] drop-shadow-xl font-elianto uppercase text-5xl pt-5">
          Discography
        </h1>
        <p className="text-white font-montserrat tracking-[0.05em] text-base md:text-lg my-5 font-normal">
          My library of compositions and arrangements.
        </p>
        <p className="text-white font-montserrat tracking-[0.05em] text-base md:text-lg my-5 font-normal">
          Want to support me?
        </p>
        <a
          className="text-white font-montserrat tracking-[0.05em] text-base md:text-lg my-5 font-normal"
          href="https://www.buymeacoffee.com/ryanzhu"
        >
          Buy me a coffee! ☕
        </a>
        <div className="flex flex-row">{/*socials*/}</div>
      </header>
      <div className="w-screen px-10 md:px-20 lg:px-48">
        <header className="flex flex-col items-start justify-start">
          <h2 className="text-white tracking-[0.5em] drop-shadow-xl font-elianto uppercase text-5xl pt-5">
            Soundtracks
          </h2>
          <p className="text-white font-montserrat tracking-[0.05em] text-base md:text-lg my-5 font-normal">
            Epic film and video game-inspired soundtracks.
          </p>
        </header>
        <div>
          <div className="flex flex-col items-start justify-start">
            {soundtracks.map((track, index) => (
              <Playlist key={index} props={track} />
            ))}
          </div>
          <div className="flex flex-col items-start justify-start">
            {piano.map((track, index) => (
              <Playlist key={index} props={track} />
            ))}
          </div>
          <div className="flex flex-col items-start justify-start">
            {ensemble.map((track, index) => (
              <Playlist key={index} props={track} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
