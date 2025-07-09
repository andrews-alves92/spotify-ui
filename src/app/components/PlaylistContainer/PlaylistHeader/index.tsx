import { Playlist } from "@/app/entities";
import { formatSecondsToHours } from "@/app/utils/formatters";

type PlaylistHeaderPick = Pick<
  Playlist,
  "duration" | "songs_qtd" | "author" | "name"
>;
interface PlaylistHeaderProps {
  item: PlaylistHeaderPick;
}
export default function PlaylistHeader({ item }: PlaylistHeaderProps) {
  return (
    <div>
      <h2 className="text-white mb-3">{item.name}</h2>
      <div className="small d-flex gap-3">
        <span>
          By <span className="text-white">{item.author}</span>
        </span>
        •<span>{item.songs_qtd} Songs</span>•
        <span>{formatSecondsToHours(item.duration)}</span>
      </div>
    </div>
  );
}
