import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import { Song } from "@/app/entities";
import { formatSecondsToMinutes } from "@/app/utils/formatters";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import SongNameContainer from "../SongNameContainer";
import Style from "./playlist-songs-table-item.module.css";

interface PlaylistSongTableItemProps {
  song: Song;
  index: number;
}

export default function PlaylistSongTableItem({
  song,
  index,
}: PlaylistSongTableItemProps) {
  const { playSong } = usePlayerContext();
  const handlePlaySong = () => playSong(song);
  return (
    <tr
      className={`small ${Style.itemContainer}`}
      onDoubleClick={handlePlaySong}
    >
      <th className="" scope="row ">
        {index + 1}
      </th>
      <td className="">
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
        <LuHeart size={18} />
      </td>
    </tr>
  );
}
