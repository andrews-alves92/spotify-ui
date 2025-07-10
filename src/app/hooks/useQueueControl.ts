import { useState } from "react";
import { Song } from "../entities";
import usePlayback from "./usePlayback2";

export default function useQueueControl({ song, playSong }: any) {
    const [queue, setQueue] = useState<Song[]>([]);
    const findSongIndex = (): number => {
        if (!song) return -1;
        const songIndex = queue.findIndex((queueSong) => queueSong.id == song.id);
        return songIndex;
    };

    const skipForward = () => {
        const songIndex = findSongIndex();
        if (songIndex === -1) return;
        let nextSong = queue[songIndex + 1];
        if (!nextSong) {
            return playSong(queue[0]);
        }
        playSong(nextSong);
    };
    const skipBack = () => {
        const songIndex = findSongIndex();
        if (songIndex === -1) return;
        let prevSong = queue[songIndex - 1];
        if (!prevSong) {
            return playSong(queue[queue.length - 1]);
        }
        playSong(prevSong);
    };
    return {
        skipForward,
        skipBack,
        queue,
        setQueue
    }


}