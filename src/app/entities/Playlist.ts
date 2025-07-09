import { Artist } from "./Artist";
import { Song } from "./Song";

export type Playlist = {
    name: string;
    author: string;
    tags: string[];
    cover_image: string;
    artists: Artist[];
    duration: number;
    songs_qtd: number;
    songs: Song[]

}