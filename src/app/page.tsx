"use client";
import PlayerComponent from "./components/PlayerComponent";
import PlaylistContainer from "./components/PlaylistContainer";
import PlayerProvider from "./context-providers/PlayerContextProvider";

export default function Main() {
  return (
    <PlayerProvider>
      <div id="content-container" className="flex-grow-1 h-100 mb-2">
        <PlaylistContainer />
      </div>
      <PlayerComponent />
    </PlayerProvider>
  );
}
