import { HiOutlineVolumeUp } from "react-icons/hi";
import ProgressBar from "../../ProgressBar";
import { formatSecondsToMinutes, getPercentage } from "@/app/utils";
import usePlayer from "@/app/context-providers/PlayerContextProvider/usePlayer";

export default function SongTrack() {
  const { elapsed, currentPlayingSong } = usePlayer();

  return (
    <div className="d-flex flex-row flex-1 align-items-center gap-2 px-2">
      <div className="flex-1 align-items-center gap-2">
        <span className="small text-start" style={{ width: 30 }}>
          {formatSecondsToMinutes(elapsed)}
        </span>
        <ProgressBar
          percentage={getPercentage(currentPlayingSong?.duration || 0, elapsed)}
        />
        <span className="small text-start" style={{ width: 30 }}>
          {formatSecondsToMinutes(currentPlayingSong?.duration || 0)}
        </span>
      </div>
      <HiOutlineVolumeUp size={20} role="button" />
    </div>
  );
}
