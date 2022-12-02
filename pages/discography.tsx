import React from "react";
import Playlist from "../components/music/playlist";
import { FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";
import { soundtracks, piano, ensemble } from "../data/tracks";
import { music_socials } from "../data/socials";
import Navbar from "../components/navbar";

export default function Discography() {
  return (
    <main className="bg-[url('/assets/img/background.png')] bg-cover bg-top flex flex-col items-center justify-center">
      <Navbar />
      <header className="w-screen h-screen flex flex-col items-center justify-center pt-16">
        <h1 className="text-white tracking-[0.5em] drop-shadow-xl font-elianto uppercase text-3xl md:text-5xl lg:text-7xl pt-5">
          Discography
        </h1>
        <p className="text-white font-elianto tracking-[0.1em] text-xl md:text-2xl my-5 font-normal">
          My library of compositions and arrangements.
        </p>
        <div className="flex flex-wrap">
          <p className="text-white font-montserrat tracking-[0.05em] text-base md:text-lg font-normal">
            Want to support me?
          </p>
          <a
            className="text-white font-montserrat tracking-[0.05em] text-base md:text-lg font-semibold hover:tracking-widest hover:drop-shadow-sm duration-100 ml-3"
            href="https://www.buymeacoffee.com/ryanzhu"
            target="_blank"
            rel="noreferrer noopener"
          >
            Buy me a coffee! ☕
          </a>
        </div>
        <ul className="flex flex-row">
          {music_socials.map((social) => (
            <li className="mx-3" key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-2xl md:text-3xl lg:text-4xl text-mauve mx-10 hover:drop-shadow-md hover:scale-105 duration-500 hover:text-white ease-in-out"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://musescore.com/user/34214067"
          target="_blank"
          rel="noreferrer noopener"
          className="text-white font-elianto uppercase tracking-[0.3em] hover:tracking-[0.4em] text-base md:text-lg gradient-mauve px-7 py-4 rounded-full font-semibold hover:shadow-sm hover:scale-105 duration-500 ease-in-out"
        >
          Sheet Music
        </a>
      </header>
      <div className="w-screen px-10 md:px-20 lg:px-48 pt-10 pb-32">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {soundtracks.map((track, index) => (
            <Playlist key={index} props={track} />
          ))}
          {piano.map((track, index) => (
            <Playlist key={index} props={track} />
          ))}
          {ensemble.map((track, index) => (
            <Playlist key={index} props={track} />
          ))}
        </div>
      </div>
    </main>
  );
}
