import Button from "../ui/Button";
import Reveal from "../Reveal";
import Icon from "../Icon";
import InstagramIcon from "../ui/InstagramIcon";
import { HERO_FEATURES, INSTAGRAM_URL } from "../../data/landing";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0710] text-white">
      {/* Foto do casal (PHOTOS.hero em src/data/landing.tsx -> /casal-treinando.png) */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[52%]"
        aria-hidden="true"
      >
        <img
          src="/casal-treinando.png"
          alt="Casal treinando"
          loading="lazy"
          className={`h-full w-full object-cover object-[center_25%]`}
        />
        <div className="absolute inset-0 bg-[#0b0710]/60 md:bg-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b0710] via-[#0b0710]/40 to-transparent md:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0710] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0b0710]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1240px] flex-col justify-center px-6 pb-44 pt-36 md:min-h-[680px]">
        <Reveal variant="fadeUp" className="max-w-[560px]">
          <h1 className="text-[clamp(2.4rem,5.6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
            Seu movimento.
            <br />
            Sua evolução.
            <br />
            <span className="bg-gradient-to-r from-[#b45cf5] to-[#8636e0] bg-clip-text text-transparent">
              Seu bem-estar.
            </span>
          </h1>
          <p className="mt-4 text-[clamp(1.05rem,2vw,1.35rem)] font-medium text-white/85">
            O seu melhor começa aqui!
          </p>
          <div className="my-7 h-0.5 w-14 bg-[#8636e0]" />
          <p className="max-w-[420px] text-[17px] leading-relaxed text-white/90">
            Um novo espaço para cuidar de você. Com estrutura, conforto e
            qualidade para transformar sua relação com o movimento.
          </p>
          <Button
            href={INSTAGRAM_URL}
            icon={<InstagramIcon className="h-[18px] w-[18px]" />}
            className="mt-8"
          >
            Conheça a L'Anetto
          </Button>
        </Reveal>
      </div>

      {/* Faixa de benefícios */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#120b1a]/95 backdrop-blur">
        <ul className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-4 px-6 py-5 md:grid-cols-4 md:divide-x md:divide-white/15">
          {HERO_FEATURES.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-3 md:justify-center md:px-4"
            >
              <Icon size={34} className="shrink-0 text-white">
                {f.icon}
              </Icon>
              <span className="text-[12.5px] font-medium leading-snug text-white/90">
                {f.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
