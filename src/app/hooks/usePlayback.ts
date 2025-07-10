import { useState } from "react";
import { Song } from "../entities";

export default function usePlayback({ setElapsed }: any) {
    const [song, setSong] = useState<Song>();
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => setIsPlaying((prev) => !prev);

    const playSong = (song: Song) => {
        setSong(song);
        setElapsed(0);
        setIsPlaying(true);
    };

    return {
        isPlaying,
        togglePlay,
        setIsPlaying,
        playSong,
        song,
        setSong
    }


}