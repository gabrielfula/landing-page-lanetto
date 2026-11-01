import { DIFFERENTIALS } from "../data/landing";
import Icon from "./Icon";
import { Stagger, StaggerItem } from "./Reveal";

export default function Differentials() {
  return (
    <section id="diferenciais" className="p-6">
      <div className="mx-auto mb-12 max-w-[680px] text-center">
        <h2 className="section-tag">Detalhes que elevam seu treino</h2>
        <p className="section-subtitle">
          Esqueça o conceito tradicional de academia. A L'Anetto une alta
          tecnologia biomecânica, bem-estar integral e a atmosfera sofisticada.
        </p>
      </div>

      <Stagger className="mx-auto grid max-w-[1180px] gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {DIFFERENTIALS.map((d) => (
          <StaggerItem key={d.title} className="card-diff">
            <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-purple-500/35 bg-purple-900 text-purple-300">
              <Icon>{d.icon}</Icon>
            </div>
            <h3 className="mb-2 text-[1.18rem] font-bold text-primary-dark">
              {d.title}
            </h3>
            <p className="m-0 text-[14.4px] leading-relaxed text-black">
              {d.text}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
