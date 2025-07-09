import Style from "./player-component.module.css";
import PlayerControls from "./PlayerControls";
import PlayerSharingControls from "./PlayerSharingControls";
import PlayerSongInfo from "./PlayerSongInfo";
import SongTrack from "./SongTrack";

export default function PlayerComponent() {
  return (
    <div
      className={`rounded-3 px-3 d-flex text-muted ${Style.playerContainer}`}
    >
      <div className="flex-1">
        <PlayerControls />
        <SongTrack />
      </div>
      <div className="flex-1 ps-4">
        <PlayerSongInfo />
        <PlayerSharingControls />
      </div>
    </div>
  );
}
