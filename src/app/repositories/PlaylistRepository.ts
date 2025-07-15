import { Playlist } from "../entities";

export default interface PlaylistRepository {
    getPlaylist: () => Promise<Playlist>
}