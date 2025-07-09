import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import { Song } from "@/app/entities";
import PlaylistSongTableItem from "../PlaylistSongTableItem";
import Style from "./playlist-songs-table.module.css";

interface PlaylistSongsTableProps {
  songs: Song[];
}
export default function PlaylistSongsTable({ songs }: PlaylistSongsTableProps) {
  const { song: currentSelectedSong, playSong, isPlaying } = usePlayerContext();
  const handlePlaySong = (song: Song) => {
    playSong(song);
  };

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
          <PlaylistSongTableItem
            key={index}
            index={index}
            song={song}
            isFavorite={false}
            isSelected={song.id == currentSelectedSong?.id}
            isPlayingSong={song.id == currentSelectedSong?.id && isPlaying}
            handleSelected={handlePlaySong}
          />
        ))}
      </tbody>
    </table>
  );
}
