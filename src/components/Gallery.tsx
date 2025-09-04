import React, { useEffect, useMemo, useRef, useState } from "react";

type GalleryProps = {
  images: string[];
  autoPlayMs?: number;
  headerOffsetPx?: number; // ~64 for fixed header
  className?: string;
  title?: string; // 👈 NEW
};

type Anim = "idle" | "toNext" | "toPrev";
type Slot = "left" | "center" | "right" | "offLeft" | "offRight";

export default function Gallery({
  images,
  autoPlayMs = 2000,
  headerOffsetPx = 64,
  className = "",
  title, // 👈 NEW
}: GalleryProps) {
  const n = images.length;
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState<Anim>("idle");
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const committedRef = useRef(false); // guard: commit only once per animation

  if (!n) return null;

  // correct neighbors
  const prevIndex = (index - 1 + n) % n;
  const nextIndex = (index + 1) % n;

  const startAnim = (dir: Anim) => {
    if (isAnimating || n < 2) return;
    committedRef.current = false;
    setIsAnimating(true);
    setAnim(dir);
  };
  const goNext = () => startAnim("toNext");
  const goPrev = () => startAnim("toPrev");

  // commit exactly once when the image that lands in CENTER finishes its TRANSFORM transition
  const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (!isAnimating || anim === "idle") return;
    if (e.propertyName !== "transform") return;

    const target = e.target as HTMLElement;
    if (target.dataset.slot !== "center") return; // only when center image finishes

    if (committedRef.current) return;
    committedRef.current = true;

    setIndex((i) => (anim === "toNext" ? (i + 1) % n : (i - 1 + n) % n));
    setAnim("idle");
    setIsAnimating(false);
  };

  // autoplay
  useEffect(() => {
    if (paused || isAnimating || n < 2) return;
    const id = window.setInterval(goNext, autoPlayMs);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, isAnimating, index, autoPlayMs, n]);

  // pause on tab hide
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const heightStyle = { height: `calc(100vh - ${headerOffsetPx}px)` };

  const slotClass = (slot: Slot) => {
    const base =
      "absolute top-1/2 -translate-y-1/2 select-none transition-[transform,opacity,filter] duration-500 ease-out";
    switch (slot) {
      case "center":
        return `${base} left-1/2 -translate-x-1/2 z-20 opacity-100 scale-100 drop-shadow-xl`;
      case "left":
        return `${base} z-10 opacity-45 scale-90 left-[25%] -translate-x-1/2`;
      case "right":
        return `${base} z-10 opacity-45 scale-90 left-[75%] -translate-x-1/2`;
      case "offLeft":
        return `${base} z-0 opacity-0 scale-90 left-[-15%] -translate-x-1/2`;
      case "offRight":
        return `${base} z-0 opacity-0 scale-90 left-[115%] -translate-x-1/2`;
    }
  };

  // role -> slot mapping across animations
  const roleToSlot = (role: "prev" | "current" | "next"): Slot => {
    if (anim === "idle") {
      if (role === "prev") return "left";
      if (role === "current") return "center";
      return "right";
    }
    if (anim === "toNext") {
      if (role === "prev") return "offLeft";
      if (role === "current") return "left";
      return "center"; // next -> center
    }
    // toPrev
    if (role === "prev") return "center"; // prev -> center
    if (role === "current") return "right";
    return "offRight";
  };

  const triplet = useMemo(
    () => [
      { role: "prev" as const, idx: prevIndex },
      { role: "current" as const, idx: index },
      { role: "next" as const, idx: nextIndex },
    ],
    [prevIndex, index, nextIndex]
  );

  return (
    <section
      className={`relative w-full overflow-hidden bg-inherit ${className}`}
      style={heightStyle}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Image gallery"
    >
      {/* title (top-center) */}
      {title && (
        <div className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 z-40">
          <div className="px-3 py-1 rounded-full bg-black/40 text-white text-sm md:text-base font-medium backdrop-blur">
            {title}
          </div>
        </div>
      )}

      <div className="absolute inset-0" onTransitionEnd={onTransitionEnd}>
        {triplet.map(({ role, idx }) => {
          const slot = roleToSlot(role);
          return (
            <figure key={`${role}-${idx}`} className="h-full w-full">
              <img
                src={images[idx]}
                alt={`Slide ${idx + 1} of ${n}`}
                data-slot={slot} // used to filter transitionend
                className={[
                  "max-w-[72vw] max-h-[72vh] md:max-w-[60vw] md:max-h-[70vh] object-contain",
                  slotClass(slot),
                ].join(" ")}
                draggable={false}
                onClick={() => {
                  if (slot === "left") goPrev();
                  if (slot === "right") goNext();
                }}
              />
            </figure>
          );
        })}
      </div>

      {/* large side hit areas incl. space below side images; dots stay clickable */}
      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={goPrev}
            className="absolute left-0 top-0 bottom-16 w-[34%] md:w-[30%] z-20 cursor-pointer"
          />
          <button
            type="button"
            aria-label="Next"
            onClick={goNext}
            className="absolute right-0 top-0 bottom-16 w-[34%] md:w-[30%] z-20 cursor-pointer"
          />
        </>
      )}

      {/* dots */}
{n > 1 && (
  <div className="pointer-events-auto absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2">
    {images.map((_, i) => {
      const active = i === index;
      return (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => {
            if (isAnimating || i === index) return;
            if (i === (index + 1) % n) return goNext();
            if (i === (index - 1 + n) % n) return goPrev();
            setIndex(i); // jump
          }}
          className={[
            "h-2.5 w-2.5 rounded-full transition-all duration-200",
            active
              ? "bg-white shadow-[0_0_0_4px_rgba(0,0,0,0.12)]" // ⬅️ changed to white
              : "bg-theme-light/40 hover:bg-theme-light/70",
          ].join(" ")}
        />
      );
    })}
  </div>
)}

    </section>
  );
}
