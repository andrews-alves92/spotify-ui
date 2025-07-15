"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PlayerComponent from "./components/PlayerComponent";
import PlaylistContainer from "./components/PlaylistContainer";
import PlayerProvider from "./context-providers/PlayerContextProvider";

const client = new QueryClient();
export default function Main() {
  return (
    <QueryClientProvider client={client}>
      <PlayerProvider>
        <div id="content-container" className="flex-grow-1 h-100 mb-2">
          <PlaylistContainer />
        </div>
        <PlayerComponent />
      </PlayerProvider>
    </QueryClientProvider>
  );
}
