import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Song } from "../entities";

type FavoriteStore = {
    playingSong: Song | null,
    elapsed: number,
    setPlayingSong: (song: Song, elapsed?: number) => void,
}
const useCurrentPlayingStore = create<FavoriteStore>()(
    persist(
        (set) => ({
            playingSong: null,
            elapsed: 0,
            setPlayingSong: (song, elapsed = 0) => set((state) => ({ playingSong: song, elapsed })),
        }),
        { name: 'CURRENT-PLAYING-SONG' },
    ),
)

export default useCurrentPlayingStore