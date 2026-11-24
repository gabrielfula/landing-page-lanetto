import Button from "../ui/Button";
import CheckBadge from "../ui/CheckBadge";
import { useState } from "react";
import { motion } from "motion/react";
import Reveal, { Stagger, StaggerItem } from "../Reveal";
import { PLANS } from "../../data/landing";

const MODES = [
  { id: "credit", label: "Crédito", caption: "Parcelado em 12x" },
  { id: "recurring", label: "Recorrência", caption: "Cobrança mensal" },
] as const;

const NOTES = {
  credit: {
    title: "Crédito",
    text: "Parcelado em 12x no cartão de crédito. Consome o limite do cartão.",
  },
  recurring: {
    title: "Recorrência",
    text: "Cobrança mensal no cartão. Não consome o limite do cartão.",
  },
};

export default function Plans() {
  const [mode, setMode] = useState<(typeof MODES)[number]["id"]>("credit");

  return (
    <section id="planos" className="bg-[#f6f1ee] px-6 pb-16 pt-14">
      <Reveal variant="fadeUp" className="mx-auto max-w-[680px] text-center">
        <h2 className="text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold tracking-tight text-[#2a1244]">
          Condições especiais de{" "}
          <span className="text-[#5e1da6]">inauguração</span>
        </h2>
        <p className="mt-2 text-[14.5px] text-[#3a2a4a]">
          Seja um dos primeiros a fazer parte da L'Anetto e aproveite benefícios
          exclusivos.
        </p>

        <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5e1da6]">
          Opção de pagamento
        </p>
        <div
          role="radiogroup"
          aria-label="Opção de pagamento"
          className="mx-auto mt-3 inline-flex rounded-2xl border border-[#5e1da6]/25 bg-white/70 p-1 shadow-[0_6px_20px_rgba(59,10,117,0.08)]"
        >
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              role="radio"
              aria-checked={mode === m.id}
              onClick={() => setMode(m.id)}
              className={`relative rounded-xl px-6 py-2.5 text-center transition-colors sm:px-8 ${
                mode === m.id
                  ? "text-white"
                  : "text-[#5e1da6] hover:text-[#3b0a75]"
              }`}
            >
              {mode === m.id && (
                <motion.span
                  layoutId="pay-mode"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6b21b8] to-[#3b0a75] shadow-[0_6px_18px_rgba(94,29,166,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10 block text-[14px] font-semibold">
                {m.label}
              </span>
              <span
                className={`relative z-10 block text-[11px] ${
                  mode === m.id ? "text-white/80" : "text-[#4a3a5a]"
                }`}
              >
                {m.caption}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          aria-live="polite"
          className="mx-auto mt-4 max-w-[480px] rounded-xl border-l-4 border-[#5e1da6] bg-[#5e1da6]/10 px-4 py-2.5 text-left text-[13px] leading-snug text-[#2a1244]"
        >
          <strong className="text-[#5e1da6]">{NOTES[mode].title}:</strong>{" "}
          {NOTES[mode].text}
        </motion.div>
      </Reveal>

      <Stagger className="mx-auto mt-12 grid max-w-[1020px] items-stretch gap-6 md:grid-cols-3 md:gap-5">
        {PLANS.map((p) => (
          <StaggerItem
            key={p.name}
            className={p.highlight ? "md:-my-2" : "md:my-0"}
          >
            <div
              className={`relative flex h-full flex-col rounded-2xl bg-white/80 px-6 pb-6 pt-7 text-center shadow-[0_8px_30px_rgba(59,10,117,0.08)] ${
                p.highlight
                  ? "border-2 border-[#8636e0] !bg-white py-9 shadow-[0_16px_44px_rgba(94,29,166,0.22)]"
                  : "border border-white"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-br from-[#5e1da6] to-[#3b0a75] px-5 py-1 text-[12px] font-semibold text-white">
                  Mais vantajoso
                </span>
              )}

              <h3 className="text-[16px] font-semibold text-[#2a1244]">
                {p.name}
              </h3>
              <p className="mt-1 text-[12.5px] text-[#4a3a5a]">{p.tagline}</p>

              <div className="mt-4 text-[#5e1da6]">
                <p className="h-4 text-[12px] font-medium text-[#4a3a5a]">
                  {mode === "credit" ? "12x de" : "por mês"}
                </p>
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-baseline justify-center gap-1"
                >
                  <span className="text-xl font-bold">R$</span>
                  <span className="text-[3.2rem] font-bold leading-none tracking-tight">
                    {mode === "credit" ? p.price.credit : p.price.recurring}
                  </span>
                </motion.div>
                <p className="mt-1 text-[12px] font-semibold text-[#2a1244]">
                  Matrícula grátis
                </p>
              </div>

              <ul className="mx-auto mt-5 mb-5 flex w-full max-w-[270px] flex-col text-left">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 border-b border-[#2a1244]/5 py-2 text-[13px] text-[#2a1244] last:border-b-0"
                  >
                    <span className="mt-px">
                      <CheckBadge />
                    </span>
                    <span
                      className={
                        f.startsWith("Tudo do plano") ? "font-semibold" : ""
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href={
                  mode === "credit" ? p.checkout.normal : p.checkout.recurring
                }
                variant={p.highlight ? "solid" : "outline"}
                className="mt-auto w-full !py-2.5 text-[13px]"
              >
                {p.cta}
              </Button>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
