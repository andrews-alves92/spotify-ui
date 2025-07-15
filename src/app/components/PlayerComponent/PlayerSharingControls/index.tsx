import { IoEllipsisHorizontal } from "react-icons/io5";
import { LuHeart, LuListMusic } from "react-icons/lu";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { PiDevices } from "react-icons/pi";
import FavoriteSongButton from "../../FavotiteSongButton";
import usePlayer from "@/app/context-providers/PlayerContextProvider/usePlayer";
import useFavoriteStore from "@/app/stores/useFavoriteStore";

export default function PlayerSharingControls() {
  const { currentPlayingSong } = usePlayer();
  const favoriteList = useFavoriteStore((state) => state.favorite_list);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const handleToggleFavorite = () =>
    currentPlayingSong ? toggleFavorite(currentPlayingSong.id) : null;
  return (
    <div className="flex-1 justify-content-end gap-3 align-items-center">
      <FavoriteSongButton
        isFavorite={
          currentPlayingSong
            ? favoriteList.includes(currentPlayingSong.id)
            : false
        }
        onClick={handleToggleFavorite}
      />
      <MdOutlineLibraryAdd size={20} />
      <LuListMusic size={20} />
      <PiDevices size={20} />
      <IoEllipsisHorizontal size={20} />
    </div>
  );
}
