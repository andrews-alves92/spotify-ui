import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import { HTMLAttributes } from "react";
import { IoPause, IoPlay } from "react-icons/io5";
import Style from "./play-button.module.css";

interface PlayButtonProps extends HTMLAttributes<HTMLButtonElement> {}
export default function PlayButton({ ...rest }: PlayButtonProps) {
  const { isPlaying, togglePlay, currentPlayingSong } = usePlayerContext();

  const play = () => {
    if (!currentPlayingSong) return;
    togglePlay();
  };
  return (
    <button
      onClick={play}
      className={`btn btn-primary rounded-circle d-flex align-items-center justify-content-center ${Style.baseBtn}`}
      {...rest}
    >
      {isPlaying ? (
        <IoPause size={18} />
      ) : (
        <IoPlay className={Style.playBtn} size={18} />
      )}
    </button>
  );
}
