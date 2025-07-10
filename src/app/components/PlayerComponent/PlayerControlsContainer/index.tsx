import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import { RiSkipBackFill, RiSkipForwardFill } from "react-icons/ri";
import PlayButton from "../../PlayButton";
import ShuffleButton from "../ShuffleButton";

export default function PlayerControlsContainer() {
  const { skipForward, skipBack } = usePlayerContext();
  return (
    <div className="d-flex flex-row align-items-center gap-3 pe-2">
      <PlayButton />
      <RiSkipBackFill size={22} role="button" onClick={skipBack} />
      <RiSkipForwardFill size={22} role="button" onClick={skipForward} />
      <ShuffleButton />
    </div>
  );
}
