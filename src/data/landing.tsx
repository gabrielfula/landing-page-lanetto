import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Contato e links                                                           */
/* -------------------------------------------------------------------------- */

export const WHATSAPP_NUMBER = "5519991756620";

export const MESSAGES = {
  general: "Olá! Gostaria de conhecer a L'Anetto Fitness.",
  vaga: "Olá! Quero garantir minha vaga na inauguração da L'Anetto Fitness.",
};

export const INSTAGRAM_URL = "https://www.instagram.com/lanettofitness/";

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Zed+de+Boulevard+Nova+Odessa+SP&output=embed";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Zed+de+Boulevard+Nova+Odessa+SP";

/* -------------------------------------------------------------------------- */
/*  FOTOS                                                                     */
/*  Para colocar uma foto: salve o arquivo em /public e preencha o src      */
/*  (ex.: src: "/fotos/pilates.jpg"). Ela aparece no lugar certo da página    */
/*  e entra automaticamente na galeria ("Conheça a academia").                */
/* -------------------------------------------------------------------------- */

export type Photo = { src: string; alt: string };

export const PHOTOS = {
  hero: { src: "/home.png", alt: "Principal" },
  pilates: { src: "/pilates.png", alt: "Estúdio de Pilates com Reformer" },
  yoga: { src: "/yoga.png", alt: "Sala de Yoga" },
  recovery: { src: "/recovery.png", alt: "Ambiente Recovery" },
  musculacao: { src: "/musculacao.png", alt: "Área de musculação" },
  lounge: { src: "/descanso.png", alt: "Recepção e lounge" },
  cardio: { src: "/cardio.png", alt: "Cardio" },
  halteres: { src: "/halter.jpg", alt: "Halter" },
  entrada: { src: "/entrada.png", alt: "Entrada" },
  escada: { src: "/escada.png", alt: "Escada" },
  banheiro: { src: "/banheiro.png", alt: "Banheiro" },
  bebidas: { src: "/bebidas.png", alt: "Bebidas" },
  catraca: { src: "/catraca.png", alt: "Catraca" },
  agua: { src: "/agua.png", alt: "Água" },
  esteira: { src: "/esteira.png", alt: "Esteira" },
  treino: { src: "/area-musculacao.png", alt: "Treino" },
} satisfies Record<string, Photo>;

/** Fotos extras que aparecem apenas na galeria. */
export const GALLERY_EXTRA: Photo[] = [
  // { src: "/fotos/extra-01.jpg", alt: "Descrição da foto" },
];

/** Todas as fotos do projeto, na ordem em que aparecem na galeria. */
export const GALLERY: Photo[] = [...Object.values(PHOTOS), ...GALLERY_EXTRA];

type PhotoKey = keyof typeof PHOTOS;

/**
 * Categorias (ambientes) da galeria. Para mover uma foto de categoria,
 * troque a chave dela (a mesma de PHOTOS) de lista. A aba "Todas" mostra tudo.
 */
export const GALLERY_CATEGORIES: {
  id: string;
  label: string;
  photos: Photo[];
}[] = (
  [
    {
      id: "treino",
      label: "Musculação e Cardio",
      keys: ["musculacao", "treino", "esteira", "cardio", "halteres"],
    },
    { id: "pilates", label: "Pilates", keys: ["pilates"] },
    { id: "yoga", label: "Yoga", keys: ["yoga"] },
    { id: "recovery", label: "Recovery", keys: ["recovery"] },
    {
      id: "estrutura",
      label: "Estrutura e Convivência",
      keys: [
        "entrada",
        "catraca",
        "escada",
        "lounge",
        "banheiro",
        "bebidas",
        "agua",
      ],
    },
  ] satisfies { id: string; label: string; keys: PhotoKey[] }[]
).map(({ keys, ...c }) => ({ ...c, photos: keys.map((k) => PHOTOS[k]) }));

/* -------------------------------------------------------------------------- */
/*  Navegação                                                                 */
/* -------------------------------------------------------------------------- */

export const NAV: { label: string; href: string; external?: boolean }[] = [
  { label: "A Academia", href: "#academia" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Planos", href: "#planos" },
  { label: "Localização", href: MAPS_URL, external: true },
];

/* -------------------------------------------------------------------------- */
/*  Faixa do hero                                                             */
/* -------------------------------------------------------------------------- */

export const HERO_FEATURES: { label: ReactNode; icon: ReactNode }[] = [
  {
    label: (
      <>
        Equipamentos que unem
        <br />
        qualidade e ergonomia
      </>
    ),
    icon: <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />,
  },
  {
    label: (
      <>
        Equipe
        <br />
        dedicada
      </>
    ),
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
        <circle cx="4.5" cy="10" r="2" />
        <circle cx="19.5" cy="10" r="2" />
      </>
    ),
  },
  {
    label: (
      <>
        Ambiente moderno
        <br />e acolhedor
      </>
    ),
    icon: (
      <>
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M2 9h20M9 3l-2 6 5 12M15 3l2 6-5 12" />
      </>
    ),
  },
  {
    label: (
      <>
        Bem-estar
        <br />
        em todas as fases
      </>
    ),
    icon: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*  Diferenciais (carrossel)                                                  */
/* -------------------------------------------------------------------------- */

export const DIFFERENTIALS: {
  title: string;
  icon: ReactNode;
  /** Card de destaque (fundo roxo) */
  featured?: boolean;
}[] = [
  {
    title: "Musculação",
    icon: <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />,
  },
  {
    title: "Pilates com Reformers",
    icon: (
      <>
        <rect x="2" y="13" width="20" height="4" rx="1.5" />
        <path d="M5 17v3M19 17v3M6 13V9h5v4" />
        <circle cx="16" cy="8" r="2" />
        <path d="M13 13l1.500-3h3l1 3" />
      </>
    ),
  },
  {
    title: "Yoga",
    icon: (
      <>
        <path d="M12 4c2 2.500 3 5 3 8s-1 5.500-3 8c-2-2.500-3-5-3-8s1-5.500 3-8z" />
        <path d="M9.500 9C6 9 3.500 11 3 14.500c3.500.5 6-.5 7.500-2.500" />
        <path d="M14.500 9C18 9 20.500 11 21 14.500c-3.500.5-6-.5-7.500-2.500" />
        <path d="M5 20c4 0 7-1 7-3 0 2 3 3 7 3" />
      </>
    ),
  },
  {
    title: "Ambiente Recovery",
    icon: (
      <>
        <path d="M12 2v20M4.500 6.500l15 11M19.500 6.500l-15 11" />
        <path d="M9.500 3.500L12 6l2.500-2.500M9.500 20.500L12 18l2.500 2.500" />
      </>
    ),
  },
  {
    title: "Calistenia",
    icon: (
      <>
        <path d="M3 4h18" />
        <path d="M7 4v3M17 4v3" />
        <circle cx="12" cy="9" r="2" />
        <path d="M7 7l5 3 5-3M12 11v5M12 16l-3 5M12 16l3 5" />
      </>
    ),
  },
  {
    title: "Pilates Solo",
    icon: (
      <>
        <path d="M2 20h20" />
        <circle cx="6" cy="11" r="2" />
        <path d="M8 12.500l5 1.500 4-4M13 14l3.500 6M8 12.500L6 20" />
      </>
    ),
  },
  {
    title: "Aulas Coletivas",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
        <circle cx="4.5" cy="10" r="2" />
        <circle cx="19.5" cy="10" r="2" />
      </>
    ),
  },
  {
    title: "Ambiente Climatizado",
    icon: (
      <path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8a3 3 0 1 1-3 3" />
    ),
  },
  {
    title: "Sua evolução no centro de tudo",
    icon: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  },
];

/* -------------------------------------------------------------------------- */
/*  Planos                                                                    */
/*  Benefícios: edite BENEFITS. Em cada linha, true = incluso (check),      */
/*  false = não incluso (X vermelho) e texto = incluso com detalhe.         */
/* -------------------------------------------------------------------------- */

/** Matrícula na tabela cheia (no Lote 1 é grátis) */
export const ENROLLMENT_FULL_PRICE = 199;

export type PlanId = "essential" | "plus" | "prime";

export const BENEFITS: {
  label: string;
  values: Record<PlanId, boolean | string>;
}[] = [
  {
    label: "Acesso ilimitado a musculação e cardio",
    values: { essential: true, plus: true, prime: true },
  },
  {
    label: "Aulas coletivas inclusas",
    values: { essential: true, plus: true, prime: true },
  },
  {
    label: "Vestiários completos e espaços de convivência",
    values: { essential: true, plus: true, prime: true },
  },
  {
    label: "App para acompanhar seus treinos",
    values: { essential: true, plus: true, prime: true },
  },
  {
    label: "Atendimento personalizado",
    values: { essential: true, plus: true, prime: true },
  },
  {
    label: "Avaliação Bioimpedância",
    values: { essential: true, plus: true, prime: true },
  },
  {
    label: "Aulas de Pilates Reformer",
    values: { essential: false, plus: "4 por mês", prime: "8 por mês" },
  },
  {
    label: "Sessões de Recovery",
    values: { essential: false, plus: "2 por mês", prime: "4 por mês" },
  },
  {
    label: "Bota de compressão pneumática",
    values: { essential: false, plus: true, prime: true },
  },
  {
    label: "Máscara facial de luz vermelha",
    values: { essential: false, plus: true, prime: true },
  },
  {
    label: "Prioridade de agendamento nas aulas",
    values: { essential: false, plus: false, prime: true },
  },
];

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  /** Valores do Lote 1: crédito (parcelado em 12x) e recorrência (mensal) */
  price: { credit: number; recurring: number };
  /** Valor antigo (tabela cheia), exibido riscado ao lado do promocional */
  fullPrice: { credit: number; recurring: number };
  cta: string;
  highlight?: boolean;
  /** Links de checkout: pagamento normal e com recorrência */
  checkout: { normal: string; recurring: string };
};

const CHECKOUT =
  "https://vendas.online.sistemapacto.com.br/checkout?un=1&k=91882afbf5796a183650656b3cf83545";
const checkout = (normal: number, recurring: number) => ({
  normal: ${CHECKOUT}&pl=${normal},
  recurring: ${CHECKOUT}&pl=${recurring},
});

export const PLANS: Plan[] = [
  {
    id: "essential",
    name: "L'Anetto Essential",
    tagline: "Ideal para quem quer começar.",
    price: { credit: 189, recurring: 209 },
    fullPrice: { credit: 239, recurring: 259 },
    cta: "Quero o Essential",
    checkout: checkout(3, 6), // LOTE 1 - ESSENTIAL
  },
  {
    id: "plus",
    name: "L'Anetto Plus",
    tagline: "O equilíbrio perfeito.",
    price: { credit: 249, recurring: 269 },
    fullPrice: { credit: 329, recurring: 349 },
    cta: "Quero o Plus",
    highlight: true,
    checkout: checkout(4, 7), // LOTE 1 - PLUS
  },
  {
    id: "prime",
    name: "L'Anetto Prime",
    tagline: "A experiência completa.",
    price: { credit: 309, recurring: 329 },
    fullPrice: { credit: 439, recurring: 459 },
    cta: "Quero o Prime",
    checkout: checkout(5, 8), // LOTE 1 - PRIME
  },
];
