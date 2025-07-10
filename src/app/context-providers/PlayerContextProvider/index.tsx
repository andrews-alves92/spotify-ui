import { Song } from "@/app/entities";
import useElapsed from "@/app/hooks/useElapsed";
import usePlayback from "@/app/hooks/usePlayback";
import usePlayingInterval from "@/app/hooks/usePlayingInterval";
import useQueueControl from "@/app/hooks/useQueueControl";
import useShuffle from "@/app/hooks/useShuffle";
import { createContext, useEffect, useRef, useState } from "react";

interface PlayerContextProps {
  song: Song | undefined;
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
  const { toggleShuffle, isShuffling } = useShuffle();
  const { elapsed, increaseElapsed, setElapsed } = useElapsed();
  const { isPlaying, togglePlay, setIsPlaying, playSong, song } = usePlayback({
    setElapsed,
  });
  const { clearPlayingInterval, setupInterval, checkIfSongFinished } =
    usePlayingInterval({
      song,
      elapsed,
      setIsPlaying,
      setElapsed,
      isPlaying,
      increaseElapsed,
    });

  const { skipForward, skipBack, queue, setQueue } = useQueueControl({
    song,
    playSong,
  });

  useEffect(() => {
    setupInterval();
    return () => clearPlayingInterval();
  }, [isPlaying]);

  useEffect(() => {
    checkIfSongFinished();
  }, [elapsed]);

  return (
    <PlayerContext.Provider
      value={{
        song,
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
