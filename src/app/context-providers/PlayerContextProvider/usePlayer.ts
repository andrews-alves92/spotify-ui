import { useContext } from "react";
import { PlayerContext } from ".";

export default function usePlayer() {
    const context = useContext(PlayerContext)
    if (!context) throw new Error("usePlayer must be used within a PlayerProvider");
    return context
}