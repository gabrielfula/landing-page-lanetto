import { useEffect, useState } from "react";
import { TARGET_DATE } from "../data/landing";

export default function Countdown() {
  const [time, setTime] = useState({ d: "--", h: "--", m: "--", s: "--" });

  useEffect(() => {
    const pad = (n: number) => String(n).padStart(2, "0");
    const tick = () => {
      const dist = TARGET_DATE - Date.now();
      if (dist < 0) return setTime({ d: "00", h: "00", m: "00", s: "00" });
      setTime({
        d: pad(Math.floor(dist / 86400000)),
        h: pad(Math.floor((dist % 86400000) / 3600000)),
        m: pad(Math.floor((dist % 3600000) / 60000)),
        s: pad(Math.floor((dist % 60000) / 1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const countdown = [
    ["Dias", time.d],
    ["Horas", time.h],
    ["Minutos", time.m],
    ["Segundos", time.s],
  ];

  return (
    <div
      aria-label="Tempo restante até a inauguração"
      className="mx-auto mb-6 flex w-fit items-center justify-center divide-x divide-primary-dark/15 py-5"
    >
      {countdown.map(([label, val]) => (
        <div
          key={label}
          className="min-w-[72px] px-4 text-center sm:min-w-[110px] sm:px-8"
        >
          <div className="bg-gradient-to-b from-primary-dark to-primary-light bg-clip-text text-[clamp(1.8rem,4vw,2.75rem)] font-light leading-none tabular-nums text-transparent">
            {val}
          </div>
          <div className="mt-2 font-extrabold text-[10.5px] uppercase tracking-[0.2em] text-neutral-500">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
