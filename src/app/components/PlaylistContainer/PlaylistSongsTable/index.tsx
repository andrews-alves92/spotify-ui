import usePlayer from "@/app/context-providers/PlayerContextProvider/usePlayer";
import { Song } from "@/app/entities";
import PlaylistSongTableItem from "../PlaylistSongTableItem";
import Style from "./playlist-songs-table.module.css";

interface PlaylistSongsTableProps {
  songs: Song[];
}
export default function PlaylistSongsTable({ songs }: PlaylistSongsTableProps) {
  return (
    <table className={`table ${Style.playlistTable} small`}>
      <thead>
        <tr className="bg-transparent small">
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Album</th>
          <th scope="col" colSpan={2}>
            Duration
          </th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <PlaylistSongTableItem key={index} index={index} song={song} />
        ))}
      </tbody>
    </table>
  );
}
