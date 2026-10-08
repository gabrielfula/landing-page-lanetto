import { BENEFITS, PRICE } from "../data/landing";

type OfferSectionProps = {
  onOpenCheckout: () => void;
};

export default function OfferSection({ onOpenCheckout }: OfferSectionProps) {
  return (
    <section id="lote1" className="px-6 py-20">
      <div className="relative mx-auto max-w-[860px] overflow-hidden rounded-3xl border border-[#8636E0]/40 bg-gradient-to-b from-[#161224] to-[#0e0d16] px-8 py-11 shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_45px_rgba(94,29,166,0.25)]">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#3B0A75] via-[#8636E0] to-[#5E1DA6]" />
        <span className="absolute right-6 top-6 hidden rounded-full border border-purple-500 bg-[#5E1DA6]/25 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-purple-200 sm:block">
          Lote Fundador Exclusivo
        </span>

        <div className="grid gap-9 md:grid-cols-[1.25fr_1fr] md:items-center">
          <div>
            <span className="mb-3 inline-block rounded-full border border-purple-500 bg-[#5E1DA6]/25 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-purple-200 sm:hidden">
              Lote Fundador Exclusivo
            </span>
            <h2 className="mb-2 text-[1.85rem] font-extrabold leading-tight">
              1º Lote — Condição de Inauguração
            </h2>
            <p className="mb-6 text-[15px] leading-normal text-[#9aa4b2]">
              Uma oportunidade ímpar para quem valoriza saúde, padrão elevado e
              privacidade. Ao se tornar um Membro Fundador, você congela seu
              valor e desfruta de benefícios perpétuos.
            </p>

            <ul className="flex flex-col gap-3.5">
              {BENEFITS.map((b) => (
                <li
                  key={b.b}
                  className="flex items-start gap-3 text-[14.8px] text-slate-200"
                >
                  <span className="mt-px flex h-5 w-5 min-w-5 items-center justify-center rounded-full border border-purple-500/40 bg-[#5E1DA6]/35 text-xs font-extrabold text-purple-200">
                    ✓
                  </span>
                  <span>
                    <strong>{b.b}</strong>
                    {b.t}
                  </span>
                </li>
              ))}
            </ul>

            {/* <div className="mt-5 border-t border-white/10 pt-5 text-[13.2px] text-[#9aa4b2]">
              <div className="flex justify-between">
                <span>Disponibilidade do lote:</span>
                <strong className="text-purple-500">34 vagas restantes</strong>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#3B0A75] via-[#5E1DA6] to-purple-500" />
              </div>
            </div> */}
          </div>

          <div className="rounded-[18px] border border-[#8636E0]/25 bg-[#0e0c16]/85 p-7 text-center">
            <div className="text-[13.6px] uppercase tracking-[0.08em] text-[#9aa4b2]">
              Condição Especial Fundador
            </div>
            <div className="my-3.5 mb-5">
              <div className="text-[2.75rem] font-extrabold leading-none tracking-[-0.03em] text-white">
                {PRICE}
              </div>
              <div className="text-sm text-[#9aa4b2]">
                por mês no plano fundador anuidade
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenCheckout}
              className="btn-hero btn-lg w-full"
            >
              Garantir minha vaga no 1º lote
            </button>

            <div className="mt-4 rounded-lg border border-red-500/25 bg-red-500/10 px-3 py-2 text-[12.8px] leading-snug text-red-300">
              ⚠️ <strong>Atenção:</strong> Encerra quando as 100 vagas acabarem
              ou em 31/10. A partir de 12/11 o preço sobe para a tabela cheia
              sem exceções.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
