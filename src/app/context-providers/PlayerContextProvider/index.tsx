import { Song } from "@/app/entities";
import { createContext, useEffect, useRef, useState } from "react";
import useShuffleControl from "./useShuffleControl";
import useElapsed from "./useElapsed";
import usePlayback from "./usePlayback";
import usePlayingInterval from "./usePlayingInterval";
import useQueueControl from "./useQueueControl";

interface PlayerContextProps {
  currentPlayingSong: Song | undefined;
  queue: Song[];
  isPlaying: boolean;
  isShuffling: boolean;
  elapsed: number;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  setQueue: (queue: Song[]) => void;
  skipForward: () => void;
  skipBack: () => void;
  toggleShuffle: () => void;
}
export const PlayerContext = createContext<PlayerContextProps | undefined>(
  undefined
);
interface PlayerProviderProps {
  children: React.ReactNode;
}
export default function PlayerProvider({ children }: PlayerProviderProps) {
  const { toggleShuffle, isShuffling } = useShuffleControl();
  const { elapsed, increaseElapsed, setElapsed } = useElapsed();
  const { isPlaying, togglePlay, setIsPlaying, playSong, currentPlayingSong } =
    usePlayback({
      setElapsed,
    });
  const { clearPlayingInterval, setupInterval, checkIfSongFinished } =
    usePlayingInterval({
      currentPlayingSong,
      elapsed,
      setIsPlaying,
      setElapsed,
      isPlaying,
      increaseElapsed,
    });

  const { skipForward, skipBack, queue, setQueue } = useQueueControl({
    currentPlayingSong,
    playSong,
    isShuffling,
  });

  useEffect(() => {
    setupInterval();
    return () => clearPlayingInterval();
  }, [isPlaying]);

  return (
    <PlayerContext.Provider
      value={{
        currentPlayingSong,
        isPlaying,
        elapsed,
        queue,
        playSong,
        togglePlay,
        setQueue,
        skipForward,
        skipBack,
        toggleShuffle,
        isShuffling,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
