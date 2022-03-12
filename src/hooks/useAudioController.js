import { useRef } from "react";

export const useAudioController = () => {
  const audioRef = useRef(null);
  const wasPaused = useRef(false);

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      wasPaused.current = audioRef.current.paused;
    }
  };

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      wasPaused.current = audioRef.current.paused;
    }
  };

  const next = (url) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = url;

      if (!wasPaused.current) {
        audioRef.current.play();
      }
    }
  };

  return {
    audioRef, pause, play, next,
  };
};
