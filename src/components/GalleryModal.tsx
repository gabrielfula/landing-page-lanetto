import { useEffect, useMemo, useState } from "react";
import { GALLERY, GALLERY_CATEGORIES } from "../data/landing";

type Props = { open: boolean; onClose: () => void };

const ALL = { id: "all", label: "Todas", photos: GALLERY };
const TABS = [ALL, ...GALLERY_CATEGORIES];

export default function GalleryModal({ open, onClose }: Props) {
  const [tab, setTab] = useState("all");
  const [current, setCurrent] = useState<number | null>(null);

  const photos = useMemo(
    () => (TABS.find((t) => t.id === tab) ?? ALL).photos,
    [tab],
  );

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const n = photos.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (current !== null) setCurrent(null);
        else onClose();
      }
      if (current !== null && e.key === "ArrowRight")
        setCurrent((c) => (c === null ? c : (c + 1) % n));
      if (current !== null && e.key === "ArrowLeft")
        setCurrent((c) => (c === null ? c : (c - 1 + n) % n));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, current, onClose, photos.length]);

  if (!open) return null;

  const close = () => {
    setCurrent(null);
    onClose();
  };
  const selected = current !== null ? photos[current] : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos"
      className="fixed inset-0 z-[999] overflow-y-auto bg-[#08060c]/95 px-6 py-10 backdrop-blur"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6 flex items-center justify-between">
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

        {/* Categorias / ambientes */}
        <div
          role="tablist"
          aria-label="Ambientes"
          className="mb-6 flex flex-wrap gap-2"
        >
          {TABS.map((t) => {
            const active = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setTab(t.id);
                  setCurrent(null);
                }}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
                  active
                    ? "border-purple-300/60 bg-gradient-to-br from-[#6b21b8] to-[#3b0a75] text-white shadow-[0_6px_20px_rgba(94,29,166,0.45)]"
                    : "border-white/20 text-white/80 hover:bg-white/10"
                }`}
              >
                {t.label}
                <span
                  className={`ml-2 text-[11px] ${active ? "text-white/80" : "text-white/50"}`}
                >
                  {t.photos.length}
                </span>
              </button>
            );
          })}
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((p, i) => (
            <li key={`${tab}-${i}`}>
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
                  c === null ? c : (c + dir + photos.length) % photos.length,
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
