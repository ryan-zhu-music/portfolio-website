import React from "react";
import Player from "./player";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function Playlist({ props }: any) {
  return (
    <div
      className={
        "relative w-full min-h-[240px] flex flex-col items-center justify-center duration-500 ease-in-out shadow-sm hover:shadow-lg hover:scale-[101%]"
      }
      data-aos="zoom-in-up"
    >
      <ParallaxBanner className="h-full min-h-[240px]">
        <ParallaxBannerLayer
          image={props.image}
          speed={-10}
        ></ParallaxBannerLayer>
        <ParallaxBannerLayer>
          <div className="h-full flex flex-col my-5 items-center justify-center pb-8">
            <div className="flex flex-col w-full justify-start px-[7%]">
              <h2 className="text-lg md:text-xl lg:text-2xl uppercase tracking-[0.4em] drop-shadow-lg text-white text-start md:text-start">
                {props.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-white font-normal font-montserrat text-start md:text-start mb-2 tracking-[0.05em]">
                {props.subtitle}
              </p>
            </div>
            <div className="w-full h-[1px] bg-white" />
            <div className="flex flex-col w-full justify-center md:justify-start px-[7%]">
              <Player tracks={props.tracks} />
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}
