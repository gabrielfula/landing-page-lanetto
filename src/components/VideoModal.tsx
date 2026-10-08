import type { VideoItem } from "../data/landing";

type VideoModalProps = {
  video: VideoItem | null;
  onClose: () => void;
};

export default function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="videoModalTitle"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="modal-overlay"
    >
      <div className="modal-card max-w-[640px]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de vídeo"
          className="modal-close"
        >
          &times;
        </button>
        <h3
          id="videoModalTitle"
          className="mb-2 mt-0 text-[1.35rem] font-extrabold text-white"
        >
          {video.modalTitle}
        </h3>
        <p className="mb-5 text-sm text-[#9aa4b2]">{video.modalDesc}</p>

        <div className="flex h-80 w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-black">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-purple-300/50 bg-gradient-to-br from-[#5E1DA6] to-[#3B0A75] text-white shadow-[0_0_26px_rgba(94,29,166,0.75)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-slate-200">
            [Prévia do vídeo institucional da obra]
          </span>
          <span className="mt-1 text-xs text-[#9aa4b2]">
            O player oficial de alta resolução será liberado no canal VIP.
          </span>
        </div>
      </div>
    </div>
  );
}
