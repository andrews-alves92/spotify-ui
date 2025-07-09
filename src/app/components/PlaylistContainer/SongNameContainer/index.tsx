import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import { Song } from "@/app/entities";
import { HtmlHTMLAttributes } from "react";
import PlayingAnimationIcon from "../PlayingAnimationIcon";

interface SongNameContainerProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  song: Song;
}
export default function SongNameContainer({ song }: SongNameContainerProps) {
  const { song: currenSelectedSong, isPlaying } = usePlayerContext();
  const isSelected = currenSelectedSong?.id == song.id;
  return (
    <div className="d-flex flex-row align-items-end">
      {isSelected && <PlayingAnimationIcon isPlaying={isPlaying} />}
      <span className={isSelected ? "text-primary" : "text-light"}>
        {song.name}
      </span>
    </div>
  );
}
