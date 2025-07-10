import { Song } from "@/app/entities";
import { useEffect, useRef } from "react";


interface UsePlayingIntervalProps {
    currentPlayingSong?: Song,
    elapsed: number,
    setIsPlaying: (_: boolean) => void,
    setElapsed: (_: number) => void
    isPlaying: boolean,
    increaseElapsed: () => void
}

export default function usePlayingInterval({ currentPlayingSong, elapsed, setIsPlaying, setElapsed, isPlaying, increaseElapsed }: UsePlayingIntervalProps) {
    const playingInterval = useRef<NodeJS.Timeout>(null);
    const clearPlayingInterval = () => {
        if (playingInterval.current) {
            clearInterval(playingInterval.current);
        }
    };
    const checkIfSongFinished = () => {
        if (!currentPlayingSong) return;
        if (elapsed > currentPlayingSong.duration) {
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

    useEffect(() => {
        checkIfSongFinished();
    }, [elapsed]);

    return {
        clearPlayingInterval,
        playingInterval,
        setupInterval,
        checkIfSongFinished
    }


}