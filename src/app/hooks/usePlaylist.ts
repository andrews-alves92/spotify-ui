import { useQuery } from "@tanstack/react-query";
import PlaylistRepository from "../repositories/PlaylistRepository";

export default function usePlaylist(playListRepository: PlaylistRepository) {
    const playlist = useQuery({ queryKey: ['playlist'], queryFn: playListRepository.getPlaylist })
    return {
        playlist
    }
}