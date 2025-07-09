import usePlayerContext from "@/app/context-providers/PlayerContextProvider/usePlayerContext";
import { PiShuffleBold } from "react-icons/pi";
import { RiSkipBackFill, RiSkipForwardFill } from "react-icons/ri";
import PlayButton from "../../PlayButton";

export default function PlayerControls() {
  const { queue, song: currentPlayingSong, playSong } = usePlayerContext();
  const findSongIndex = (): number => {
    if (!currentPlayingSong) return -1;
    const songIndex = queue.findIndex(
      (song) => song.id == currentPlayingSong.id
    );
    return songIndex;
  };
  const handleSkipForward = () => {
    const songIndex = findSongIndex();
    if (songIndex === -1) return;
    let nextSong = queue[songIndex + 1];
    if (!nextSong) {
      return playSong(queue[0]);
    }
    playSong(nextSong);
  };
  const handleSkipBack = () => {
    const songIndex = findSongIndex();
    if (songIndex === -1) return;
    let prevSong = queue[songIndex - 1];
    if (!prevSong) {
      return playSong(queue[queue.length - 1]);
    }
    playSong(prevSong);
  };
  return (
    <div className="d-flex flex-row align-items-center gap-3 pe-2">
      <PlayButton />
      <RiSkipBackFill size={22} role="button" onClick={handleSkipBack} />
      <RiSkipForwardFill size={22} role="button" onClick={handleSkipForward} />
      <PiShuffleBold size={20} role="button" />
    </div>
  );
}
