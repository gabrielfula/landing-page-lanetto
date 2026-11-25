import { useEffect } from "react";
import type { Photo } from "../../data/landing";

type Props = {
  photos: Photo[];
  /** Índice da foto aberta; null = fechado */
  index: number | null;
  onChange: (index: number | null) => void;
};

/** Visualizador de foto em tela cheia (Esc fecha, setas navegam). */
export default function Lightbox({ photos, index, onChange }: Props) {
  const open = index !== null;
  const n = photos.length;

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") onChange(((index ?? 0) + 1) % n);
      if (e.key === "ArrowLeft") onChange(((index ?? 0) - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, n, onChange]);

  if (index === null || !photos[index]) return null;
  const photo = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={() => onChange(null)}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="max-h-full max-w-full rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        aria-label="Fechar foto"
        onClick={() => onChange(null)}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-2xl leading-none text-white transition hover:bg-white/10"
      >
        ×
      </button>

      {n > 1 &&
        (
          [
            ["‹", -1, "left-3", "Foto anterior"],
            ["›", 1, "right-3", "Próxima foto"],
          ] as const
        ).map(([label, dir, pos, aria]) => (
          <button
            key={label}
            type="button"
            aria-label={aria}
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + dir + n) % n);
            }}
            className={`absolute top-1/2 ${pos} flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20`}
          >
            {label}
          </button>
        ))}
    </div>
  );
}
