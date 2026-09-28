import { useEffect, useState } from "react";

// Workshop: 10/10 às 9h (horário de Brasília, UTC-3)
const TARGET_ISO = "2026-10-10T09:00:00-03:00";
const target = new Date(TARGET_ISO).getTime();

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
  const [parts, setParts] = useState<TimePart[] | null>(null);

  useEffect(() => {
    const tick = () => setParts(diffToParts(target - Date.now()));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-center text-sm font-medium text-muted-foreground">
        O workshop ao vivo é dia 10/10 às 9h. Garanta a sua antes que o lote vire.
      </p>
      <div className="flex items-center gap-2 md:gap-3">
        {(parts ??
          [
            { label: "Horas", value: 0 },
            { label: "Min", value: 0 },
            { label: "Seg", value: 0 },
          ]).map((part) => (
          <div
            key={part.label}
            className="flex min-w-[64px] flex-col items-center rounded-xl border border-border bg-card/80 px-3 py-3 backdrop-blur md:min-w-[80px] md:px-5"
          >
            <span className="font-display text-2xl font-bold tabular-nums text-foreground opacity-90 md:text-4xl">
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
