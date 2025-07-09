import { useContext } from "react";
import { PlayerContext } from ".";

export default function usePlayerContext() {
    const context = useContext(PlayerContext)
    if (!context) throw ("This shoud be wrapped in a PlayerProvider")
    return context
}