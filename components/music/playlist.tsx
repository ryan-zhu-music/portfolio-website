import React from "react";
import Player from "./player";

export default function Playlist({ props }: any) {
  return (
    <div
      className={
        "w-5/6 h-60 flex flex-col my-5 items-center justify-center bg-no-repeat bg-cover bg-top"
      }
      style={{ backgroundImage: `url("${props.image}")` }}
    >
      <div className="flex flex-col w-full justify-center md:justify-start px-20">
        <h2 className="text-base md:text-xl uppercase tracking-[0.4em] lg:text-3xl drop-shadow-lg text-white text-center md:text-start">
          {props.title}
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-white font-normal font-elianto text-center md:text-start my-1 tracking-[0.1em]">
          {props.subtitle}
        </p>
      </div>
      <div className="w-full h-[1px] bg-white" />
      <div className="flex flex-col w-full justify-center md:justify-start px-20">
        <Player tracks={props.tracks} />
      </div>
    </div>
  );
}
