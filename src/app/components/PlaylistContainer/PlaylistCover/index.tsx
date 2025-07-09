import { Playlist } from "@/app/entities";
import Image from "next/image";

type PlaylistCoverPick = Pick<Playlist, "name" | "cover_image">;
interface PlaylistCoverProps {
  item: PlaylistCoverPick;
}

export default function PlaylistCover({ item }: PlaylistCoverProps) {
  return (
    <div className="rounded-3 w-100 h-auto overflow-hidden position-relative">
      <h4 className="text-white position-absolute px-3" style={{ bottom: 5 }}>
        {item.name}
      </h4>
      <Image
        src={`/${item.cover_image}`}
        className="w-100 h-100"
        width={180}
        height={180}
        alt="Artist cover image"
      />
    </div>
  );
}
