import { useEffect, useState } from "react";

const TARGET_OFFSET_MS = 3 * 60 * 60 * 1000; // 3 hours from first load

function getTarget(): number {
  if (typeof window === "undefined") return Date.now() + TARGET_OFFSET_MS;
  const stored = window.localStorage.getItem("launch_deadline");
  if (stored) return Number(stored);
  const target = Date.now() + TARGET_OFFSET_MS;
  window.localStorage.setItem("launch_deadline", String(target));
  return target;
}

interface TimePart {
  label: string;
  value: number;
}

function diffToParts(ms: number): TimePart[] {
  const clamped = Math.max(0, ms);
  const totalSeconds = Math.floor(clamped / 1000);
  return [
    { label: "Horas", value: Math.floor(totalSeconds / 3600) },
    { label: "Min", value: Math.floor((totalSeconds % 3600) / 60) },
    { label: "Seg", value: totalSeconds % 60 },
  ];
}

export function Countdown() {
  const [parts, setParts] = useState<TimePart[]>(() => diffToParts(TARGET_OFFSET_MS));

  useEffect(() => {
    const target = getTarget();
    const tick = () => setParts(diffToParts(target - Date.now()));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-medium text-muted-foreground">
        Faltam poucas horas para acabar, garanta a sua antes que o lote vire.
      </p>
      <div className="flex items-center gap-2 md:gap-3">
        {parts.map((part) => (
          <div
            key={part.label}
            className="flex min-w-[64px] flex-col items-center rounded-xl border border-border bg-card/80 px-3 py-3 backdrop-blur md:min-w-[80px] md:px-5"
          >
            <span className="font-display text-2xl font-bold tabular-nums text-foreground md:text-4xl">
              {String(part.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:text-xs">
              {part.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
