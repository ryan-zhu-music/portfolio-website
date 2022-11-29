import React from "react";
import Playlist from "./playlist";

import { spotlight } from "../../data/tracks";

export default function Music() {
  return (
    <main className="w-screen flex flex-col items-center justify-center px-10 md:px-20 lg:px-32 py-32">
      <h2 className="text-xl md:text-3xl lg:text-5xl drop-shadow-lg text-white text-center uppercase tracking-[0.3em]">
        Music
      </h2>
      <p className="text-base md:text-lg lg:text-xl drop-shadow-lg text-mauve my-4 font-normal text-center">
        Browse through my library of original compositions and arrangements,
        spanning various styles including Classicism, Romanticism,
        Impressionism, and Modernism.
      </p>
      <div className="w-full flex flex-col items-center justify-center">
        {spotlight.map((playlist, index) => (
          <Playlist key={index} props={playlist} />
        ))}
      </div>
    </main>
  );
}
