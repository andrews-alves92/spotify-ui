import { useRef } from "react";

export default function usePlayingInterval({ song, elapsed, setIsPlaying, setElapsed, isPlaying, increaseElapsed }: any) {
    const playingInterval = useRef<NodeJS.Timeout>(null);
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
    const setupInterval = () => {
        if (!isPlaying) return clearPlayingInterval();
        playingInterval.current = setInterval(() => {
            increaseElapsed();
        }, 1000);
    }

    return {
        clearPlayingInterval,
        playingInterval,
        setupInterval,
        checkIfSongFinished
    }


}