import usePlayer from "@/app/context-providers/PlayerContextProvider/usePlayer";
import Style from "./player-component.module.css";
import PlayerControlsContainer from "./PlayerControlsContainer";
import PlayerSharingControls from "./PlayerSharingControls";
import PlayerSongInfo from "./PlayerSongInfo";
import SongTrack from "./SongTrack";
import { useEffect } from "react";
import useCurrentPlayingStore from "@/app/stores/useCurrentPlayingStore";

export default function PlayerComponent() {
  const { currentPlayingSong, elapsed, playSong, setElapsed } = usePlayer();
  const saveSongState = useCurrentPlayingStore((state) => state.setPlayingSong);
  const playingSongState = useCurrentPlayingStore((state) => state.playingSong);
  const playingSongStateElapsed = useCurrentPlayingStore(
    (state) => state.elapsed
  );
  useEffect(() => {
    if (currentPlayingSong) {
      saveSongState(currentPlayingSong, elapsed);
    }
  }, [currentPlayingSong, elapsed]);

  useEffect(() => {
    if (!playingSongState) return;
    if (currentPlayingSong) return;

    playSong(playingSongState, false);
    setElapsed(playingSongStateElapsed);
  }, [playingSongState]);
  return (
    <div
      className={`rounded-3 px-3 d-flex text-muted ${Style.playerContainer}`}
    >
      <div className="flex-1">
        <PlayerControlsContainer />
        <SongTrack />
      </div>
      <div className="flex-1 ps-4">
        <PlayerSongInfo />
        <PlayerSharingControls />
      </div>
    </div>
  );
}
