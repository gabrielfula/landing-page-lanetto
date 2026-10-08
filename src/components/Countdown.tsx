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
      className="mx-auto mb-10 grid max-w-[580px] grid-cols-4 gap-3.5"
    >
      {countdown.map(([label, val]) => (
        <div
          key={label}
          className="rounded-[14px] border border-white/10 bg-[#161b22]/80 px-2 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
        >
          <div className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold leading-none tabular-nums text-white">
            {val}
          </div>
          <div className="mt-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#9aa4b2]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
