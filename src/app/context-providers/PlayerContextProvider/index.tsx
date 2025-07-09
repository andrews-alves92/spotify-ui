import { Song } from "@/app/entities";
import { createContext, useEffect, useRef, useState } from "react";

interface PlayerContextProps {
  song: Song | undefined;
  queue: Song[];
  isPlaying: boolean;
  elapsed: number;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  setQueue: (queue: Song[]) => void;
}
export const PlayerContext = createContext<PlayerContextProps | undefined>(
  undefined
);
interface PlayerProviderProps {
  children: React.ReactNode;
}
export default function PlayerProvider({ children }: PlayerProviderProps) {
  const playingInterval = useRef<NodeJS.Timeout>(null);
  const [elapsed, setElapsed] = useState(0);
  const [song, setSong] = useState<Song>();
  const [queue, setQueue] = useState<Song[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => setIsPlaying((prev) => !prev);
  const increaseElapsed = () => setElapsed((prev) => prev + 1);

  const playSong = (song: Song) => {
    setSong(song);
    setElapsed(0);
    setIsPlaying(true);
  };

  const clearPlayingInterval = () => {
    if (playingInterval.current) {
      clearInterval(playingInterval.current);
    }
  };

  const checkIfSongFinished = () => {
    if (!song) return;
    if (elapsed > song.duration) {
      setIsPlaying(false);
      setElapsed(0);
      clearPlayingInterval();
    }
  };

  useEffect(() => {
    if (!isPlaying) return clearPlayingInterval();
    playingInterval.current = setInterval(() => {
      increaseElapsed();
    }, 1000);
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
        playSong,
        togglePlay,
        setQueue,
        queue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
