import { Song } from "@/app/entities";
import { useState } from "react";

interface UseQueueControlProps {
    setElapsed: (_: number) => void
}
export default function usePlayback({ setElapsed }: UseQueueControlProps) {
    const [currentPlayingSong, setCurrentPlayingSong] = useState<Song>();
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => setIsPlaying((prev) => !prev);

    const playSong = (song: Song) => {
        setCurrentPlayingSong(song);
        setElapsed(0);
        setIsPlaying(true);
    };

    return {
        isPlaying,
        togglePlay,
        setIsPlaying,
        playSong,
        currentPlayingSong,
        setCurrentPlayingSong
    }


}