import type { ReactNode } from "react";

export const TARGET_DATE = new Date("2026-11-12T08:00:00-03:00").getTime();
export const WHATSAPP_NUMBER = "5519991756620";
export const PRICE = "R$ (PENDENTE)";
export const CHECKOUT_URL =
  "https://pagamento.lanettofitness.com.br/checkout/1-lote";

export type Benefit = { b: string; t: string };

export const BENEFITS: Benefit[] = [
  {
    b: "Prioridade absoluta",
    t: " na reserva de horários premium e turmas exclusivas.",
  },
  {
    b: "Tour Guiado Exclusivo",
    t: " com a diretoria técnica antes da abertura oficial.",
  },
  {
    b: "Kit Boas-Vindas Lanetto Black",
    t: " (bag térmica personalizada + garrafa térmica premium + toalha esportiva).",
  },
  { b: "Isenção vitalícia", t: " de taxa de renovação e taxa de matrícula." },
];

export type Differential = { title: string; text: string; icon: ReactNode };

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Equipamentos de Primeira Linha",
    text: "Equipamentos de primeira linha, usados só pelas academias tops do Brasil e do mundo, com ergonomia excelente e precisa, biomecânica top, confortáveis e que trazem resultado.",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    title: "Espaço Amplo",
    text: "Espaço amplo, projetado com layout inteligente e circulação fluida para você treinar com máxima liberdade, privacidade e conforto em todos os horários.",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
  {
    title: "Professores Capacitados",
    text: "Professores capacitados, prontos para entregar o melhor para você, com acompanhamento de perto — não como uma academia qualquer.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Avaliação de Bioimpedância & Metas",
    text: "Acompanhamento de perto com bioimpedância de precisão clínica na admissão e reavaliação periódica a cada 30 dias para mapear sua evolução e calibrar seu treino.",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    title: "Aulas de Yoga",
    text: "Práticas exclusivas guiadas para ganho de flexibilidade, equilíbrio postural, redução do estresse e conexão mente-corpo em sala climatizada com acústica relaxante.",
    icon: (
      <>
        <path d="M12 3c-1.5 3-4 6-8 7 3.5 1 6.5 4 8 11 1.5-7 4.5-10 8-11-4-1-6.5-4-8-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Pilates com Reformer",
    text: "Estúdio completo equipado com aparelhos Reformer de alta precisão. Fortalecimento profundo do core, reabilitação e alinhamento biomecânico supervisionado.",
    icon: (
      <>
        <rect x="3" y="9" width="18" height="6" rx="2" />
        <path d="M6 15v4M18 15v4M3 12h18M7 9V6M17 9V6" />
      </>
    ),
  },
  {
    title: "Área Específica de Glúteos",
    text: "Espaço reservado pensado especialmente para mulheres treinarem com máxima privacidade, conforto e máquinas dedicadas à hipertrofia e definição dos membros inferiores.",
    icon: (
      <>
        <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
        <path d="M6 14c-2 1.5-3 3.5-3 6h18c0-2.5-1-4.5-3-6" />
        <path d="M9 14a3 3 0 0 0 6 0" />
      </>
    ),
  },
  {
    title: "Área de Convivência & Lounge",
    text: "Ambiente comum acolhedor com sofás de alto padrão, Wi-Fi ultraveloz e tomadas para relaxar, tomar um expresso ou fazer networking antes e depois do treino.",
    icon: (
      <>
        <path d="M3 13V8a3 3 0 0 1 6 0v5" />
        <path d="M15 13V8a3 3 0 0 1 6 0v5" />
        <path d="M2 13h20v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z" />
        <line x1="6" y1="19" x2="6" y2="21" />
        <line x1="18" y1="19" x2="18" y2="21" />
      </>
    ),
  },
  {
    title: "Kit Banho & Toalhas Premium",
    text: "Vestiários executivos completos com kit banho refinado cortesia (shampoo, condicionador, sabonete) e toalhas premium higienizadas prontas para seu uso.",
    icon: (
      <>
        <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
        <path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v7" />
        <line x1="4" y1="15" x2="20" y2="15" />
      </>
    ),
  },
  {
    title: "Recovery, Café & Hidratação Isotônica",
    text: "Espaço de recovery avançado com botas de compressão pneumática, estação de café gourmet e hidratação isotônica para acelerar a regeneração muscular pós-treino.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    title: "Climatização com Renovação Contínua",
    text: "Sistema inteligente de filtragem e renovação constante do fluxo de ar, mantendo temperatura ideal e pureza oxigenada em todos os ambientes da academia.",
    icon: (
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    ),
  },
  {
    title: "Iluminação Cênica",
    text: "Projeto luminotécnico imersivo em tons roxos e neutros, desenhado para elevar seu foco, disposição e intensidade do primeiro ao último exercício.",
    icon: (
      <>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </>
    ),
  },
  {
    title: "Segurança 24 Horas",
    text: "Segurança 24 horas, controle de acesso biométrico e monitoramento contínuo em todo o complexo Zed de Boulevard em Nova Odessa, garantindo sua máxima tranquilidade.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export type VideoItem = {
  stage: string;
  title: string;
  desc: string;
  modalTitle: string;
  modalDesc: string;
  img: string;
};

export const VIDEOS: VideoItem[] = [
  {
    stage: "Fase 01 · Estrutura",
    title: "Piso Acústico & Infraestrutura",
    desc: "Adequação técnica de laje e sistemas de climatização com filtragem hospitalar.",
    modalTitle: "Fundação e Instalações Especiais",
    modalDesc: "Vídeo oficial das obras estruturais e reforço acústico.",
    img: "https://img.usecurling.com/p/600/380?q=modern%20gym%20construction&color=black",
  },
  {
    stage: "Fase 02 · Design de Interiores",
    title: "Tour Render 3D do Espaço",
    desc: "Visão panorâmica dos vestiários executivos e ilhas de musculação avançada.",
    modalTitle: "Projeto Arquitetônico 3D",
    modalDesc:
      "Tour 3D imersivo do layout definitivo dos equipamentos e áreas de convívio.",
    img: "https://img.usecurling.com/p/600/380?q=luxury%20fitness%20interior&color=gray",
  },
  {
    stage: "Fase 03 · Montagem",
    title: "Chegada dos Equipamentos",
    desc: "Unboxing e calibração das primeiras máquinas importadas de alta precisão.",
    modalTitle: "Chegada do Maquinário",
    modalDesc: "Acompanhe o desembarque dos equipamentos de biomecânica.",
    img: "https://img.usecurling.com/p/600/380?q=fitness%20equipment%20luxury&color=black",
  },
];

export const FAQS = [
  {
    q: "Quando a Lanetto Fitness abre oficialmente?",
    a: "A inauguração está cravada para o dia 12 de Novembro de 2026 no Zed de Boulevard (Nova Odessa, São Paulo). Membros fundadores do 1º Lote terão acesso antecipado exclusivo para realização do tour técnico, testes de equipamentos e boas-vindas personalizadas nos 3 dias anteriores à abertura oficial.",
  },
  {
    q: 'O que é exatamente o "1º Lote" de inauguração?',
    a: "O 1º Lote é uma cota limitada a apenas 100 vagas com a menor tarifa de adesão que a Lanetto Fitness terá. Você garante o preço de pré-abertura congelado durante todo o plano, isenção completa de matrículas e o Kit Fundador Lanetto Black entregue na recepção.",
  },
  {
    q: "Como funciona a adesão e o pagamento online?",
    a: "Você realiza sua reserva de forma 100% segura através do link de checkout protegido. Aceitamos cartões de crédito em até 12x sem juros e Pix com confirmação imediata. Seu voucher de Membro Fundador é gerado instantaneamente no seu e-mail e WhatsApp.",
  },
  {
    q: "Posso cancelar antes da inauguração caso meus planos mudem?",
    a: "Sim, com tranquilidade absoluta. Você possui garantia incondicional de devolução de 100% do valor pago até 7 dias após o seu primeiro treino oficial na unidade. Transparência e respeito mútuo são pilares do padrão Lanetto.",
  },
];

export const INTERESTS = [
  "Musculação & Alta Performance",
  "Longevidade, Mobilidade & Saúde",
  "Emagrecimento & Condicionamento",
  "Aulas Coletivas & Recovery",
];

export const LAT = -22.7788;
export const LNG = -47.2965;
export const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.01}%2C${LAT - 0.006}%2C${LNG + 0.01}%2C${LAT + 0.006}&layer=mapnik&marker=${LAT}%2C${LNG}`;

export const MALL_PERKS: { t: string; i: ReactNode }[] = [
  {
    t: "Estacionamento amplo e seguro para alunos e visitantes.",
    i: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 12l-4-4-4 4M12 16V8" />
      </>
    ),
  },
  {
    t: "Monitoramento e segurança 24 horas por dia em todo o mall.",
    i: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    t: "Próximo a bistrôs funcionais, empórios e cafeterias selecionadas.",
    i: (
      <>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </>
    ),
  },
];
