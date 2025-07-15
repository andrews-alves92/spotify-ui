import { Song } from "@/app/entities";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface FavoriteSongButtonProps {
  song?: Song;
  isFavorite: boolean;
  onClick: () => void;
}
export default function FavoriteSongButton({
  onClick,
  isFavorite,
}: FavoriteSongButtonProps) {
  return (
    <div role="button" onClick={onClick}>
      {isFavorite ? (
        <FaHeart size={18} className="text-primary" />
      ) : (
        <FaRegHeart size={18} />
      )}
    </div>
  );
}
