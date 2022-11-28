import React from "react";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";

export default function Controls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  width,
}: any) {
  return (
    <div className="track-audio-controls">
      <button type="button" aria-label="Previous" onClick={onPrevClick}>
        <FaBackward />
      </button>
      {isPlaying ? (
        <button
          type="button"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <FaPause />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <FaPlay />
        </button>
      )}
      <button type="button" aria-label="Next" onClick={onNextClick}>
        <FaForward />
      </button>
    </div>
  );
}
