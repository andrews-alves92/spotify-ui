import usePlayer from "@/app/context-providers/PlayerContextProvider/usePlayer";
import { Song } from "@/app/entities";
import { formatSecondsToMinutes } from "@/app/utils";
import Image from "next/image";
import FavoriteSongButton from "../../FavotiteSongButton";
import SongNameContainer from "../SongNameContainer";
import Style from "./playlist-songs-table-item.module.css";
import useFavoriteStore from "@/app/stores/useFavoriteStore";

interface PlaylistSongTableItemProps {
  song: Song;
  index: number;
}

export default function PlaylistSongTableItem({
  song,
  index,
}: PlaylistSongTableItemProps) {
  const { playSong } = usePlayer();
  const handlePlaySong = () => playSong(song);
  const favoriteList = useFavoriteStore((state) => state.favorite_list);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const handleToggleFavorite = () => toggleFavorite(song.id);
  return (
    <tr className={`small ${Style.itemContainer}`}>
      <th className="" scope="row ">
        {index + 1}
      </th>
      <td className="" onDoubleClick={handlePlaySong}>
        <div className="flex-1 justify-content-start gap-3 align-items-center">
          <Image
            src={`/albuns/${song.album_cover}`}
            className="rounded"
            height={45}
            width={45}
            alt="Album cover image"
          />
          <div className="d-flex flex-column">
            <SongNameContainer song={song} />
            <span>{song.artist}</span>
          </div>
        </div>
      </td>
      <td className="">{song.album}</td>
      <td className="">{formatSecondsToMinutes(song.duration)}</td>
      <td className="">
        <FavoriteSongButton
          isFavorite={favoriteList.includes(song.id)}
          onClick={handleToggleFavorite}
        />
      </td>
    </tr>
  );
}
