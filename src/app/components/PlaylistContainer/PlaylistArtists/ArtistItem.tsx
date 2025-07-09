import { Artist } from "@/app/entities/Artist";
import Image from "next/image";

interface ArtistItemProps {
  artist: Artist;
}
export function ArtistItem({ artist }: ArtistItemProps) {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-auto">
        <Image
          className="rounded-circle"
          src={`/artists/${artist.image}`}
          width={45}
          height={45}
          alt="Playlist related artist"
        />
      </div>
      <div className="col ps-0 small">{artist.name}</div>
    </div>
  );
}
