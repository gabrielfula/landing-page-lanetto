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
          className="mb-2 mt-0 text-[1.35rem] font-extrabold text-primary-dark"
        >
          {video.modalTitle}
        </h3>
        <p className="mb-5 text-sm text-black">{video.modalDesc}</p>
      </div>
    </div>
  );
}
