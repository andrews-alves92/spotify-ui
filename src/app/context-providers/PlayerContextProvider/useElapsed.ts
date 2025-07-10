import { useState } from "react";

export default function useElapsed() {
    const [elapsed, setElapsed] = useState(0);
    const increaseElapsed = () => setElapsed((prev) => prev + 1);
    return {
        elapsed,
        increaseElapsed,
        setElapsed
    }

}