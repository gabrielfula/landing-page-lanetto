import { MALL_PERKS, MAP_SRC } from "../data/landing";
import Icon from "./Icon";

export default function Location() {
  return (
    <section id="localizacao" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto grid max-w-[1160px] items-center gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="section-tag">Endereço Privilegiado</span>
          <h2 className="mb-4 text-[2.2rem] font-extrabold leading-tight text-white">
            No coração do Zed de Boulevard
          </h2>
          <p className="text-base leading-relaxed text-[#9aa4b2]">
            Acesso fácil, conveniência absoluta e total segurança. Treine em um
            ambiente integrado ao melhor centro de convivência de Nova Odessa,
            São Paulo.
          </p>
          <div className="mt-6 rounded-[14px] border border-white/10 bg-[#161b22]/70 p-5">
            <p className="m-0 text-base font-bold text-white">
              📍 Zed de Boulevard
            </p>
            <p className="mb-0 mt-1 text-sm text-[#9aa4b2]">
              Nova Odessa, São Paulo — Estacionamento e acessibilidade completa
            </p>
          </div>

          <ul className="mt-6 flex flex-col gap-3.5">
            {MALL_PERKS.map((p) => (
              <li
                key={p.t}
                className="flex items-center gap-2.5 text-[14.8px] text-slate-300"
              >
                <Icon size={18} className="shrink-0 text-purple-500">
                  {p.i}
                </Icon>
                {p.t}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-[380px] w-full overflow-hidden rounded-[20px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <iframe
            title="Mapa da localização da Lanetto Fitness"
            src={MAP_SRC}
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
