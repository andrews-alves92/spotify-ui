import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import { PiShuffleBold } from "react-icons/pi";

export default function ShuffleButton() {
  const { toggleShuffle, isShuffling } = usePlayerContext();
  return (
    <PiShuffleBold
      className={isShuffling ? "text-primary" : ""}
      size={20}
      role="button"
      onClick={toggleShuffle}
    />
  );
}
