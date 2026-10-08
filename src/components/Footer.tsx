import { WHATSAPP_NUMBER } from "../data/landing";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/lanettofitness/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090b0e] px-6 pb-10 pt-14 text-[#9aa4b2]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-purple-500/40 bg-gradient-to-br from-[#5E1DA6] to-[#3B0A75] text-sm font-black text-white"
            >
              L
            </span>
            <span className="text-[1.1rem] font-extrabold tracking-[0.1em] text-white">
              LANETTO FITNESS
            </span>
          </div>
          <p className="m-0 max-w-[380px] text-sm leading-normal">
            A nova referência em alta performance e bem-estar no Zed de
            Boulevard em Nova Odessa, São Paulo. Inauguração em 12 de Novembro
            de 2026.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-purple-500"
            >
              {s.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 transition hover:text-purple-300"
          >
            WhatsApp Direto
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1160px] flex-wrap justify-between gap-4 border-t border-white/5 pt-6 text-xs">
        <span>
          © 2026 Lanetto Fitness. Todos os direitos reservados. CNPJ:
          [62.799.244/0001-33].
        </span>
        <span>Desenvolvido para público de alto padrão.</span>
      </div>
    </footer>
  );
}
