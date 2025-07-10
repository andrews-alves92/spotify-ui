import usePlayer from "@/app/context-providers/PlayerContextProvider/usePlayer";
import { PiShuffleBold } from "react-icons/pi";

export default function ShuffleButton() {
  const { toggleShuffle, isShuffling } = usePlayer();
  return (
    <PiShuffleBold
      className={isShuffling ? "text-primary" : ""}
      size={20}
      role="button"
      onClick={toggleShuffle}
    />
  );
}
