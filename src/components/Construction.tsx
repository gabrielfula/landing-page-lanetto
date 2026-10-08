import { VIDEOS, type VideoItem } from "../data/landing";

type ConstructionProps = {
  onSelectVideo: (video: VideoItem) => void;
};

export default function Construction({ onSelectVideo }: ConstructionProps) {
  return (
    <section
      id="obra"
      className="bg-gradient-to-b from-[#0e0d14]/60 to-[#14101c]/70 px-6 py-20"
    >
      <div className="mx-auto mb-12 max-w-[680px] text-center">
        <span className="section-tag">Bastidores &amp; Execução</span>
        <h2 className="section-title">Acompanhe a transformação</h2>
        <p className="section-subtitle">
          Veja cada detalhe do projeto ganhando vida. Do piso emborrachado
          importado à iluminação biofílica, tudo está sendo executado em ritmo
          acelerado.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1160px] gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        {VIDEOS.map((v) => (
          <article
            key={v.title}
            onClick={() => onSelectVideo(v)}
            className="group cursor-pointer overflow-hidden rounded-[18px] border border-[#8636E0]/20 bg-[#151122] transition hover:-translate-y-0.5 hover:border-purple-500"
          >
            <div
              className="relative flex h-[220px] items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url('${v.img}')` }}
            >
              <div className="absolute inset-0 bg-[#0e0a18]/55 transition group-hover:bg-[#0e0a18]/30" />
              <div
                aria-label="Reproduzir vídeo"
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-purple-300/50 bg-gradient-to-br from-[#5E1DA6] to-[#3B0A75] text-white shadow-[0_0_26px_rgba(94,29,166,0.75)] transition group-hover:scale-110"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            <div className="px-6 py-5">
              <span className="text-[11.6px] font-extrabold uppercase tracking-[0.1em] text-purple-500">
                {v.stage}
              </span>
              <h3 className="my-1.5 mb-2 text-[1.05rem] font-bold text-white">
                {v.title}
              </h3>
              <p className="m-0 text-[13.6px] text-[#9aa4b2]">{v.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
