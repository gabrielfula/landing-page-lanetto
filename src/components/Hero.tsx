import Countdown from "./Countdown";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary p-6 text-center">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[820px] -translate-x-1/2" />
      <div className="relative z-10 mx-auto max-w-[860px]">
        <div className="flex justify-center">
          <h1 className="mb-5 text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-neutral-900">
            <span className="">
              <a
                href="#"
                aria-label="L'Anetto Fitness Início"
                className="w-80 items-start flex gap-2.5 text-white no-underline"
              >
                <img src="/slogan.png" alt="Logo Lanetto" />
              </a>
            </span>
          </h1>
        </div>
        <p className="mx-auto mb-4 max-w-[680px] text-[clamp(1.05rem,2.5vw,1.35rem)] leading-normal text-neutral-600">
          Mais do que uma academia, um novo conceito de movimento, bem-estar e
          experiências.
        </p>
        <p className="mx-auto mb-4 max-w-[680px] text-[clamp(1.05rem,2.5vw,1.35rem)] leading-normal text-neutral-600">
          Inauguração em{" "}
          <strong className="text-neutral-900">15 de Janeiro de 2027</strong> no{" "}
          <strong className="text-neutral-900">Zed de Boulevard</strong>, em{" "}
          <strong className="text-neutral-900">Nova Odessa, São Paulo</strong>.
        </p>
        <div className="mb-7 flex flex-wrap items-center justify-center gap-4">
          <a href="#lote1" className="btn-hero">
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
          <a
            href="https://chat.whatsapp.com/EOl6l1UmDXbJplC8GX2hBj?s=cl&p=a&mlu=4&ilr=4"
            target="_blank"
            className="btn-hero"
          >
            Entrar no VIP CLUB
          </a>
        </div>
        <Countdown />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-7 text-[13px] text-neutral-600">
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
            Inauguração 15/01/2027
          </span>
        </div>
      </div>
    </section>
  );
}
