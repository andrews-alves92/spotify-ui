export default function GenreItem({ genre }: { genre: string }) {
  return (
    <span className="badge border p-2 rounded-4 text-secondary mb-2 me-2">
      {genre}
    </span>
  );
}
