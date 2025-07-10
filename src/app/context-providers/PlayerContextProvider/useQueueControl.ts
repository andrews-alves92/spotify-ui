import { Song } from "@/app/entities";
import { getRandomNumber } from "@/app/utils";

import { useState } from "react";

interface UseQueueControlProps {
    currentPlayingSong?: Song,
    playSong: (song: Song) => void,
    isShuffling: boolean
}

export default function useQueueControl({ currentPlayingSong, playSong, isShuffling }: UseQueueControlProps) {
    const [queue, setQueue] = useState<Song[]>([]);

    const findCurrentPlayingSongInQueue = (): number => {
        const songIndex = queue.findIndex((queueSong) => queueSong.id == currentPlayingSong?.id);
        return songIndex;
    };


    const skipForward = () => {
        if (!currentPlayingSong) return
        if (isShuffling) return shuffleSkip()
        const songIndex = findCurrentPlayingSongInQueue();

        let nextSong = queue[songIndex + 1];
        if (!nextSong) {
            return playSong(queue[0]);
        }
        playSong(nextSong);
    };
    const skipBack = () => {
        if (!currentPlayingSong) return
        if (isShuffling) return
        const songIndex = findCurrentPlayingSongInQueue();

        let prevSong = queue[songIndex - 1];
        if (!prevSong) {
            return playSong(queue[queue.length - 1]);
        }
        playSong(prevSong);
    };

    const shuffleSkip = () => {
        if (queue.length == 0) return
        const nextSongIndex = getRandomNumber(0, queue.length - 1)
        const songToPlay = queue[nextSongIndex]
        if (!songToPlay) return
        playSong(songToPlay)
    }

    return {
        skipForward,
        skipBack,
        queue,
        setQueue
    }


}