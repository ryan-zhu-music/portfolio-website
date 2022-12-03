import React from "react";
import Playlist from "./playlist";

import { spotlight } from "../../data/tracks";
import Link from "next/link";

export default function Music() {
  return (
    <main className="w-screen flex flex-col items-center justify-center px-10 md:px-20 lg:px-32 py-10 md:py-24 lg:py-32">
      <h2 className="text-2xl md:text-3xl lg:text-5xl drop-shadow-lg text-white text-center uppercase tracking-[0.3em]">
        Music
      </h2>
      <p className="text-base md:text-lg lg:text-xl drop-shadow-lg text-mauve my-2 font-normal text-center md:text-center">
        Browse through my library of original compositions and arrangements,
        spanning various styles including Classicism, Romanticism,
        Impressionism, and Modernism.
      </p>
      <Link
        href="/discography"
        passHref
        className="mt-3 text-white font-elianto uppercase tracking-[0.3em] hover:tracking-[0.4em] text-xs md:text-sm ring-white ring-1 px-6 py-2 rounded-full font-semibold hover:shadow-sm hover:scale-105 duration-500 ease-in-out cursor-pointer"
      >
        <p>Browse</p>
      </Link>
      <div className="w-full grid-cols-1 grid gap-5 px-[5%] mt-8 md:mt-10">
        {spotlight.map((playlist, index) => (
          <Playlist key={index} props={playlist} />
        ))}
      </div>
    </main>
  );
}
