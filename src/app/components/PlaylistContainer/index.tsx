import usePlayer from "@/app/context-providers/PlayerContextProvider/usePlayer";
import playlistData from "@/app/data/playlistData";
import usePlaylist from "@/app/hooks/usePlaylist";
import PlaylistService from "@/app/services/PlaylistService";
import { useEffect } from "react";
import Style from "./playlist-container.module.css";
import PlaylistArtists from "./PlaylistArtists";
import PlaylistControls from "./PlaylistControls";
import PlaylistCover from "./PlaylistCover";
import Genres from "./PlaylistGenres";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistSongsTable from "./PlaylistSongsTable";
import LoadingIndicator from "../LoadingIndicator";
import { useQuery } from "@tanstack/react-query";

const playlistService = new PlaylistService();
export default function PlaylistContainer() {
  const {
    data: playlist,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["playlist"],
    queryFn: playlistService.getPlaylist,
  });
  const { setQueue } = usePlayer();

  useEffect(() => {
    if (playlist) {
      setQueue(playlist.songs);
    }
  }, [playlist]);
  if (isPending) return <LoadingIndicator />;
  if (isError) return <p>Deu erro</p>;
  const {
    name,
    author,
    songs,
    songs_qtd,
    duration,
    cover_image,
    tags,
    artists,
  } = playlist;
  return (
    <div className={`h-100 rounded-3 pt-4 px-5 ${Style.playlistContainer} `}>
      <div className="row">
        <div className={`${Style.scrollableContainer} col-9 pe-4`}>
          <PlaylistHeader
            item={{
              name,
              author,
              songs_qtd,
              duration,
            }}
          />
          <PlaylistControls />
          <div className="row mt-5">
            <div className="col-12">
              <PlaylistSongsTable songs={songs} />
            </div>
          </div>
        </div>
        <div className={`${Style.scrollableContainer} col-3`}>
          <div className="row d-flex gap-4">
            <div className="col-12">
              <PlaylistCover
                item={{
                  name,
                  cover_image,
                }}
              />
            </div>
            <div className="col-12">
              <Genres genres={tags} />
            </div>
            <div className="col-12 d-flex flex-column gap-3">
              <PlaylistArtists artists={artists} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
