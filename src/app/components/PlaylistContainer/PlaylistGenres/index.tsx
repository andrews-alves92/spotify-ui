import GenreItem from "./GenreItem";

interface PlaylistGenresProps {
  genres: string[];
}

export default function PlaylistGenres({ genres }: PlaylistGenresProps) {
  return (
    <>
      {genres.map((genre) => (
        <GenreItem key={genre} genre={genre} />
      ))}
    </>
  );
}
