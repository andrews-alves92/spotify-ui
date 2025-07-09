import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import Image from "next/image";

export default function PlayerSongInfo() {
  const { song } = usePlayerContext();
  return (
    song && (
      <div className="flex-1 justify-content-start gap-2 align-items-center">
        <Image
          src={`/albuns/${song.album_cover}`}
          className="rounded"
          height={50}
          width={50}
          alt="Album cover image"
        />
        <div className="d-flex flex-column small" style={{ lineHeight: 1.3 }}>
          <span className="text-light">{song.name}</span>
          <span>{song.artist}</span>
        </div>
      </div>
    )
  );
}
