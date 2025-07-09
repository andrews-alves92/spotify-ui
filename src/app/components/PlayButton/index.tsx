import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import Style from "./play-button.module.css";
import { HTMLAttributes } from "react";
import { IoPause, IoPlay } from "react-icons/io5";

interface PlayButtonProps extends HTMLAttributes<HTMLButtonElement> {}
export default function PlayButton({ ...rest }: PlayButtonProps) {
  const { isPlaying, togglePlay, song } = usePlayerContext();

  const play = () => {
    if (!song) return;
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
