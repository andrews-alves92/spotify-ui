import { Artist } from "@/app/entities/Artist";
import { ArtistItem } from "./ArtistItem";
interface PlaylistArtistsProps {
  artists: Artist[];
}
export default function PlaylistArtists({ artists }: PlaylistArtistsProps) {
  return (
    <>
      {artists.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))}
    </>
  );
}
