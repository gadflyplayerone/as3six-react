// src/hooks/useScrollState.ts
import { useEffect, useRef, useState } from "react";
export function useScrollState(threshold = 8, scrolledAt = 16) {
    const [state, setState] = useState({
        direction: "none",
        offset: 0,
        isScrolled: false,
    });
    const lastY = useRef(0);
    const ticking = useRef(false);
    useEffect(() => {
        lastY.current = window.scrollY;
        const onScroll = () => {
            const curY = window.scrollY;
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    const delta = curY - lastY.current;
                    let direction = state.direction;
                    if (Math.abs(delta) > threshold) {
                        direction = delta > 0 ? "down" : "up";
                        lastY.current = curY;
                    }
                    setState({ direction, offset: curY, isScrolled: curY > scrolledAt });
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return state;
}
