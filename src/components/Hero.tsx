import Countdown from "./Countdown";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_15%,rgba(94,29,166,0.25)_0%,rgba(59,10,117,0.08)_45%,transparent_75%)] px-6 pb-16 pt-20 text-center">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[820px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(134,54,224,0.18)_0%,transparent_68%)]" />
      <div className="relative z-10 mx-auto max-w-[860px]">
        <div className="pill mb-7">
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7]" />
          Público Seleto · Vagas Limitadas
        </div>

        <h1 className="mb-5 text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
          <span className="bg-gradient-to-b from-white from-40% to-white/70 bg-clip-text text-transparent">
            A Lanetto Fitness está chegando.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-[680px] text-[clamp(1.05rem,2.5vw,1.35rem)] leading-normal text-[#9aa4b2]">
          Abrindo em{" "}
          <strong className="text-white">12 de Novembro de 2026</strong> no{" "}
          <strong className="text-white">Zed de Boulevard</strong>, em{" "}
          <strong className="text-white">Nova Odessa, São Paulo</strong>.
          <br />A união definitiva entre arquitetura de ponta, alta performance
          e sofisticação incomparável.
        </p>

        <Countdown />

        <div className="mb-7 flex flex-wrap items-center justify-center gap-4">
          <a href="#lote1" className="btn-hero btn-lg">
            Quero o 1º Lote
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#vip-list" className="btn-ghost">
            Entrar na Lista VIP
          </a>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-7 text-[13px] text-[#9aa4b2]">
          <span className="flex items-center gap-2">
            <Icon size={16} className="text-purple-500">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </Icon>
            Preço Congelado
          </span>
          <span className="flex items-center gap-2">
            <Icon size={16} className="text-purple-500">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </Icon>
            Membros Fundadores
          </span>
          <span className="flex items-center gap-2">
            <Icon size={16} className="text-purple-500">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </Icon>
            Inauguração 12/11/2026
          </span>
        </div>
      </div>
    </section>
  );
}
