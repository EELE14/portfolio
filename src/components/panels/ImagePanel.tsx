/* Copyright (c) 2026 eele14. All Rights Reserved. */
import { useEffect, useRef } from "react";
import { createAblak } from "ablak-ts";

export default function ImagePanel() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const tracker = createAblak({ throttleMouse: 0 });

    let posX = 0,
      posY = 0;
    let velX = 0,
      velY = 0;

    const stop = tracker.watch(
      ({ mouse, size }) => {
        const targetX = (mouse.x / size.x - 0.5) * 14;
        const targetY = (mouse.y / size.y - 0.5) * 10;

        velX += (targetX - posX) * 0.06;
        velY += (targetY - posY) * 0.06;
        velX *= 0.78;
        velY *= 0.78;

        posX += velX;
        posY += velY;

        if (imageRef.current) {
          imageRef.current.style.transform = `translate(${posX.toFixed(3)}px, ${posY.toFixed(3)}px) scale(1.06)`;
        }
      },
      { only: ["mouse"] },
    );

    return () => {
      stop();
      tracker.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        ref={imageRef}
        src="/lufthansa.avif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transformOrigin: "center center", willChange: "transform" }}
      />

      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg) 0%, transparent 30%)",
        }}
      />
    </div>
  );
}
