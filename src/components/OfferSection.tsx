import Reveal, { Stagger, StaggerItem } from "./Reveal";

type OfferSectionProps = {
  onOpenCheckout: () => void;
};

type Plan = {
  name: string;
  price: number;
  from: number;
  highlight?: boolean;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Essential",
    price: 179,
    from: 229,
    features: [
      "Acesso ilimitado a musculação e cardio",
      "Aulas coletivas inclusas",
      "Vestiários completos e espaços de convivência",
      "App para acompanhar seus treinos",
      "Atendimento personalizado",
      "Avaliação Bioimpedância",
    ],
  },
  {
    name: "Plus",
    price: 249,
    from: 319,
    features: [
      "Tudo do plano Essential",
      "4 aulas de Pilates Reformer por mês",
      "2 sessões de Recovery por mês",
      "Bota de compressão pneumática inclusa",
      "Máscara facial de luz vermelha inclusa",
    ],
  },
  {
    name: "Prime",
    price: 339,
    highlight: true,
    from: 429,
    features: [
      "Tudo do plano Plus",
      "8 aulas de Pilates Reformer por mês",
      "4 sessões de Recovery por mês",
    ],
  },
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function OfferSection({ onOpenCheckout }: OfferSectionProps) {
  return (
    <section className="px-6 py-12">
      <Reveal className="mx-auto mb-12 max-w-[680px] text-center">
        <span className="section-tag">Lote Fundador Exclusivo</span>
        <h2
          id="lote1"
          className="text-2xl font-extrabold leading-[1.15] tracking-tight text-primary-dark"
        >
          1º Lote — Condição de Inauguração
        </h2>
        <p className="section-subtitle">
          Uma oportunidade ímpar para quem valoriza saúde, padrão elevado e
          privacidade. Ao se tornar um Membro Fundador, você congela seu valor e
          desfruta de benefícios perpétuos.
        </p>
      </Reveal>

      <Stagger className="mx-auto grid w-full max-w-[480px] gap-5 lg:max-w-[1100px] lg:grid-cols-3">
        {PLANS.map((p) => (
          <StaggerItem
            key={p.name}
            className={`card-diff relative flex flex-col ${
              p.highlight
                ? "order-first border-brand/50 bg-white lg:order-none"
                : ""
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white">
                Plano mais vantajoso
              </span>
            )}

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary-dark">
              L'Anetto {p.name}
            </h3>

            <div className="mt-5">
              <div className="text-sm text-neutral-500 line-through">
                {brl(p.from)}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[2.5rem] font-extrabold leading-none tracking-[-0.03em] text-primary-dark">
                  {brl(p.price)}
                </span>
                <span className="text-sm text-neutral-600">/mês</span>
              </div>
              <p className="mt-2 text-[12.8px] leading-snug text-neutral-600">
                Anual parcelado em 12x · 12 meses de fidelidade
              </p>
            </div>

            <div className="my-6 h-px bg-primary-dark/10" />

            <ul className="mb-8 flex flex-col gap-3">
              {p.features.map((f) => {
                const inherits = f.startsWith("Tudo do plano");
                return (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14.4px] leading-snug text-black"
                  >
                    <span className="mt-px flex h-5 w-5 min-w-5 items-center justify-center rounded-full border border-purple-500/35 bg-purple-900 text-xs font-extrabold text-purple-300">
                      ✓
                    </span>
                    <span
                      className={inherits ? "font-bold text-primary-dark" : ""}
                    >
                      {f}
                    </span>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={onOpenCheckout}
              className={
                p.highlight
                  ? "btn-hero btn-lg mt-auto w-full"
                  : "mt-auto inline-flex w-full items-center justify-center rounded-full border border-brand/40 px-9 py-4 text-base font-bold text-primary-dark transition hover:bg-brand hover:text-white"
              }
            >
              Garantir {p.name}
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mx-auto mt-8 max-w-[720px] rounded-lg border border-red-500/25 bg-yellow-500/10 px-4 py-3 text-center text-[12.8px] leading-snug text-red-700">
        ⚠️ <strong>Atenção:</strong> Condições exclusivas para inauguração,
        vagas limitadas.
      </div>
    </section>
  );
}
