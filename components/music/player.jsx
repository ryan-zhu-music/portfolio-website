import React, { useState, useEffect, useRef } from "react";
import Slider from "@mui/material/Slider";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Player({ tracks }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, src } = tracks[trackIndex];

  const [audio, setAudio] = useState({ readyState: 0 });
  const [duration, setDuration] = useState(0);

  let timer;

  useEffect(() => {
    setAudio(new Audio(src));
  }, [trackIndex]);

  useEffect(() => {
    if (audio && audio.readyState > 0) {
      setDuration(audio.duration);
    }
  }, [audio.readyState]);

  const handlePlay = (play) => {
    setIsPlaying(play);
    if (audio && audio.readyState > 0) {
      if (play) {
        audio.play();
        timer = setInterval(() => {
          setTrackProgress(audio.currentTime);
        }, [500]);
      } else {
        audio.pause();
        clearInterval(timer);
      }
    }
  };

  const handleScrub = (value) => {
    if (audio && audio.readyState > 0) {
      audio.currentTime = value;
      setTrackProgress(value);
    }
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
    setTrackProgress(0);
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
    setTrackProgress(0);
  };

  const { width } = useWindowDimensions();
  return (
    <div className="w-full">
      <h3 className="text-base md:text-lg lg:text-xl tracking-[0.3em] uppercase drop-shadow-lg text-white text-center md:text-start mt-2">
        {title}
      </h3>
      <div className={"flex flex-row justify-between items-center"}>
        <button type="button" aria-label="Previous" onClick={toPrevTrack}>
          <FaBackward className="text-white text-3xl" />
        </button>
        {isPlaying ? (
          <button
            type="button"
            onClick={() => handlePlay(false)}
            aria-label="Pause"
            className="mx-4"
          >
            <FaPause className="text-white text-2xl" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handlePlay(true)}
            aria-label="Play"
            className="mx-4"
          >
            <FaPlay className="text-white text-2xl" />
          </button>
        )}
        <Slider
          aria-label="Track Progress"
          value={Number(trackProgress)}
          min={0}
          max={duration}
          onChange={(e, value) => {
            handleScrub(value);
          }}
          sx={{
            color: "rgba(183,170,196,0.7)",
            width: "full",
            height: 40,
            "& .MuiSlider-thumb": {
              width: 0,
              height: 0,
              boxShadow: "none",
              opacity: 0,
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
        <button type="button" aria-label="Next" onClick={toNextTrack}>
          <FaForward className="text-white text-3xl ml-5" />
        </button>
      </div>
    </div>
  );
}
