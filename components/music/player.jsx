import React, { useState, useEffect, useRef } from "react";
import Slider from "@mui/material/Slider";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";

export default function Player(props) {
  const { tracks } = props;
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState({ readyState: 0 });
  const [duration, setDuration] = useState(0);

  const { title, src } = tracks[trackIndex];

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    //new track
    setAudio(new Audio(src));
    setTrackProgress(0);
    setDuration(0);
    setIsPlaying(false);
  }, [trackIndex]);

  useEffect(() => {
    //track is ready
    if (audio && audio.readyState > 0) {
      setDuration(audio.duration);
      setTimer(
        setInterval(() => {
          setTrackProgress(audio.currentTime);
        }, [500])
      );
    } else {
      clearInterval(timer);
      setTimer(null);
    }
  }, [audio.readyState]);

  const handlePlay = (play) => {
    //play/pause
    setIsPlaying(play);
    if (audio && audio.readyState > 0) {
      if (play) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  const handleScrub = (value) => {
    //user changes slider
    if (audio && audio.readyState > 0) {
      audio.currentTime = value;
    }
  };
  const changeTrack = (direction) => {
    //next/previous track
    handlePlay(false);
    setTrackProgress(0);
    setAudio({ readyState: 0, currentTime: 0 });
    setTrackIndex((tracks.length + trackIndex + direction) % tracks.length);
  };

  return (
    <div className="w-full flex flex-col items-start jusitfy-center">
      <h3 className="text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase drop-shadow-lg text-white text-center md:text-start mt-3 md:mt-2 mb-1">
        {title}
      </h3>
      <div className={"w-full flex flex-row justify-between items-center"}>
        <button
          type="button"
          aria-label="Previous"
          onClick={() => {
            changeTrack(-1);
          }}
        >
          <FaBackward className="text-white text-2xl hover:drop-shadow-md hover:scale-[110%] duration-500 " />
        </button>
        {isPlaying ? (
          <button
            type="button"
            onClick={() => handlePlay(false)}
            aria-label="Pause"
            className="mx-4"
          >
            <FaPause className="text-white text-xl hover:drop-shadow-md hover:scale-[110%] duration-500 " />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handlePlay(true)}
            aria-label="Play"
            className="mx-4"
          >
            <FaPlay className="text-white text-xl hover:drop-shadow-md hover:scale-[110%] duration-500 " />
          </button>
        )}
        <Slider
          aria-label="Track Progress"
          value={trackProgress}
          min={0}
          max={duration}
          onChange={(e, value) => {
            handleScrub(value);
          }}
          classes={{ root: "!py-1" }}
          sx={{
            color: "rgba(183,170,196,0.7)",
            width: "full",
            height: 25,
            "& .MuiSlider-thumb": {
              width: 0,
              height: 0,
              boxShadow: "none",
              opacity: 0,
              p: 0,
              "&.Mui-active": {
                width: 0,
                height: 0,
              },
              "&.Mui-hover": {
                width: 0,
              },
            },
            "& .MuiSlider-track": {
              borderRadius: 0,
            },
            "& .MuiSlider-rail": {
              opacity: 0.6,
              borderRadius: 0,
            },
          }}
        />
        <button type="button" aria-label="Next" onClick={() => changeTrack(1)}>
          <FaForward className="text-white text-2xl ml-5 hover:drop-shadow-md hover:scale-[110%] duration-500 " />
        </button>
      </div>
    </div>
  );
}
