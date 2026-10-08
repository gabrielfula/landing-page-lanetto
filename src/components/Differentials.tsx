import { DIFFERENTIALS } from "../data/landing";
import Icon from "./Icon";

export default function Differentials() {
  return (
    <section id="diferenciais" className="px-6 py-20">
      <div className="mx-auto mb-12 max-w-[680px] text-center">
        <span className="section-tag">Padrão Internacional Lanetto</span>
        <h2 className="section-title">
          Pensada nos mínimos detalhes para a sua melhor versão.
        </h2>
        <p className="section-subtitle">
          Esqueça o conceito tradicional de academia. A Lanetto une alta
          tecnologia biomecânica, bem-estar integral e a atmosfera sofisticada
          de um clube privativo.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1180px] gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {DIFFERENTIALS.map((d) => (
          <div key={d.title} className="card-diff">
            <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-purple-500/35 bg-gradient-to-br from-[#5E1DA6]/30 to-[#3B0A75]/45 text-purple-300">
              <Icon>{d.icon}</Icon>
            </div>
            <h3 className="mb-2 text-[1.18rem] font-bold text-white">
              {d.title}
            </h3>
            <p className="m-0 text-[14.4px] leading-relaxed text-slate-300">
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
