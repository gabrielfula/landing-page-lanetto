import { useEffect, useState } from "react";
import { GALLERY } from "../data/landing";

type Props = { open: boolean; onClose: () => void };

export default function GalleryModal({ open, onClose }: Props) {
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (current !== null) setCurrent(null);
        else onClose();
      }
      if (current !== null && e.key === "ArrowRight")
        setCurrent((c) => (c === null ? c : (c + 1) % GALLERY.length));
      if (current !== null && e.key === "ArrowLeft")
        setCurrent((c) => (c === null ? c : (c - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, current, onClose]);

  if (!open) return null;

  const close = () => {
    setCurrent(null);
    onClose();
  };
  const selected = current !== null ? GALLERY[current] : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos"
      className="fixed inset-0 z-[999] overflow-y-auto bg-[#08060c]/95 px-6 py-10 backdrop-blur"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">
            Conheça a <span className="text-[#b45cf5]">academia</span>
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar galeria"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl leading-none text-white transition hover:bg-white/10"
          >
            ×
          </button>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((p, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => p.src && setCurrent(i)}
                aria-label={`Ampliar: ${p.alt}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#2a1244] to-[#0b0710] text-left"
              >
                {p.src ? (
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="flex h-full w-full items-end p-3 text-xs text-white/50">
                    {p.alt}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setCurrent(null)}
        >
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-full max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {(
            [
              ["‹", -1, "left-3"],
              ["›", 1, "right-3"],
            ] as const
          ).map(([label, dir, pos]) => (
            <button
              key={label}
              type="button"
              aria-label={dir < 0 ? "Foto anterior" : "Próxima foto"}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((c) =>
                  c === null ? c : (c + dir + GALLERY.length) % GALLERY.length,
                );
              }}
              className={`absolute top-1/2 ${pos} flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
