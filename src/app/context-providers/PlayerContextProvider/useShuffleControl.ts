import { useState } from "react";

export default function useShuffleControl() {
    const [isShuffling, setIsShuffling] = useState(false);
    const toggleShuffle = () => setIsShuffling((prev => !prev));
    return {
        toggleShuffle,
        isShuffling,
        setIsShuffling
    }

}