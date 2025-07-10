import usePlayer from "@/app/context-providers/PlayerContextProvider/usePlayer";
import { Song } from "@/app/entities";
import { HtmlHTMLAttributes } from "react";
import PlayingAnimationIcon from "../PlayingAnimationIcon";

interface SongNameContainerProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  song: Song;
}
export default function SongNameContainer({ song }: SongNameContainerProps) {
  const { currentPlayingSong, isPlaying } = usePlayer();
  const isSelected = currentPlayingSong?.id == song.id;
  return (
    <div className="d-flex flex-row align-items-end">
      {isSelected && <PlayingAnimationIcon isPlaying={isPlaying} />}
      <span className={isSelected ? "text-primary" : "text-light"}>
        {song.name}
      </span>
    </div>
  );
}
