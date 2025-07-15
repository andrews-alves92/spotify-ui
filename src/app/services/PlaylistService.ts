import playlistData from "../data/playlistData";
import { Playlist } from "../entities";
import PlaylistRepository from "../repositories/PlaylistRepository";

export default class PlaylistService implements PlaylistRepository {
    getPlaylist(): Promise<Playlist> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(playlistData)
            }, 1000);
        })
    };

}