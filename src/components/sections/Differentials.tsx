import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import Reveal from "../Reveal";
import Icon from "../Icon";
import Diagonals from "../ui/Diagonals";
import { DIFFERENTIALS } from "../../data/landing";

export default function Differentials() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  // Quanto o carrossel pode andar para a esquerda (largura total - área visível)
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!viewport.current || !track.current) return;
      setMaxDrag(
        Math.max(0, track.current.scrollWidth - viewport.current.clientWidth),
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewport.current) ro.observe(viewport.current);
    if (track.current) ro.observe(track.current);
    return () => ro.disconnect();
  }, []);

  // Setas: deslizam com uma mola suave
  const slide = (dir: 1 | -1) => {
    if (!viewport.current) return;
    const step = viewport.current.clientWidth * 0.8;
    const target = Math.min(0, Math.max(-maxDrag, x.get() - dir * step));
    animate(x, target, { type: "spring", stiffness: 220, damping: 30 });
  };

  return (
    <section
      id="academia"
      className="relative overflow-hidden bg-gradient-to-r from-[#1a0836] via-[#220a44] to-[#2a0b55] px-6 py-14 text-white"
    >
      <Diagonals side="left" />
      <Diagonals side="right" />
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <Reveal variant="fadeUp">
          <h2 className="text-center text-[clamp(1.6rem,3vw,2rem)] font-medium tracking-tight">
            Nossos{" "}
            <span className="font-semibold text-[#b45cf5]">diferenciais</span>
          </h2>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.1} className="relative mt-9">
          <div ref={viewport} className="-mb-5 overflow-hidden px-1 pb-9 pt-1">
            <motion.ul
              ref={track}
              drag="x"
              style={{ x }}
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.12}
              dragTransition={{
                power: 0.3,
                timeConstant: 300,
                bounceStiffness: 260,
                bounceDamping: 30,
              }}
              aria-label="Diferenciais da L'Anetto (arraste para os lados)"
              className="flex w-max cursor-grab select-none gap-4 active:cursor-grabbing"
            >
              {DIFFERENTIALS.map((d) => (
                <li
                  key={d.title}
                  draggable={false}
                  className={`flex w-[220px] shrink-0 flex-col items-center rounded-2xl border px-5 py-8 text-center backdrop-blur-sm transition sm:w-[250px] ${
                    d.featured
                      ? "border-purple-300/60 bg-gradient-to-br from-[#7a2bd0] to-[#3b0a75] shadow-[0_10px_34px_rgba(134,54,224,0.45)]"
                      : "border-white/15 bg-white/5 hover:border-purple-400/60 hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full shadow-[0_6px_22px_rgba(94,29,166,0.5)] ${
                      d.featured
                        ? "bg-white/15 ring-1 ring-white/40"
                        : "bg-gradient-to-br from-[#6b21b8] to-[#3b0a75]"
                    }`}
                  >
                    <Icon size={30} className="text-white [&_*]:stroke-[1.6]">
                      {d.icon}
                    </Icon>
                  </span>
                  <p className="mt-5 text-[16px] font-semibold leading-snug">
                    {d.title}
                  </p>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="mt-5 flex justify-center gap-3">
            {(
              [
                ["‹", -1, "Anterior"],
                ["›", 1, "Próximo"],
              ] as const
            ).map(([label, dir, aria]) => (
              <button
                key={aria}
                type="button"
                aria-label={aria}
                onClick={() => slide(dir)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-2xl leading-none text-white transition hover:border-purple-300 hover:bg-white/10"
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
