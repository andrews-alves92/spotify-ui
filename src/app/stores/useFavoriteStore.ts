import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteStore = {
    favorite_list: string[],
    toggleFavorite: (songId: string) => void,
}
const useFavoriteStore = create<FavoriteStore>()(
    persist(
        (set) => ({
            favorite_list: [],
            toggleFavorite: (songId) => set((state) => {
                const isFavorite = state.favorite_list.includes(songId)
                return {
                    favorite_list: isFavorite ? state.favorite_list.filter(fav => fav != songId) :
                        [...state.favorite_list, songId]
                }
            }),
        }),
        { name: 'FAVORITE-SONGS' },
    ),
)

export default useFavoriteStore