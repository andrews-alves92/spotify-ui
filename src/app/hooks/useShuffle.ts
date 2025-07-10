import { useState } from "react";

export default function useShuffle() {
    const [isShuffling, setIsShuffling] = useState(false);
    const toggleShuffle = () => setIsShuffling((prev => !prev));
    return {
        toggleShuffle,
        isShuffling,
        setIsShuffling
    }

}