"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Dubai",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** Live Dubai time, Vuna-style: 14:22:36 [DXB] */
export function Clock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 font-sans text-sm font-semibold tabular-nums tracking-wide ${className ?? ""}`}
      suppressHydrationWarning
    >
      {time ?? "--:--:--"}&nbsp;[DXB]
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 rounded-full bg-sand"
      />
    </span>
  );
}
