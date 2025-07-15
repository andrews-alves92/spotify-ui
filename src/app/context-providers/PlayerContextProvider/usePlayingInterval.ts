import { Song } from "@/app/entities";
import { useEffect, useRef } from "react";


interface UsePlayingIntervalProps {
    currentPlayingSong?: Song,
    elapsed: number,
    isPlaying: boolean,
    increaseElapsed: () => void
    onSongFinished: () => void
}

export default function usePlayingInterval({ currentPlayingSong, elapsed, isPlaying, increaseElapsed, onSongFinished }: UsePlayingIntervalProps) {
    const playingInterval = useRef<NodeJS.Timeout>(null);
    const clearPlayingInterval = () => {
        if (playingInterval.current) {
            clearInterval(playingInterval.current);
        }
    };
    const checkIfSongFinished = () => {
        if (!currentPlayingSong) return;
        if (elapsed <= currentPlayingSong.duration) return
        onSongFinished()
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