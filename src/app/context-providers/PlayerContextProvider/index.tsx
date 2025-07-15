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
  setElapsed: (elapsed: number) => void;
  playSong: (song: Song, imediate?: boolean) => void;
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
  const { isPlaying, togglePlay, playSong, currentPlayingSong } = usePlayback({
    setElapsed,
  });
  const { skipForward, skipBack, queue, setQueue } = useQueueControl({
    currentPlayingSong,
    playSong,
    isShuffling,
  });
  const { clearPlayingInterval, setupInterval } = usePlayingInterval({
    currentPlayingSong,
    elapsed,
    isPlaying,
    increaseElapsed,
    onSongFinished: () => skipForward(),
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
        isShuffling,
        playSong,
        togglePlay,
        setQueue,
        skipForward,
        skipBack,
        toggleShuffle,
        setElapsed,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
