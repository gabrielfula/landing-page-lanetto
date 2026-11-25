import { useState } from "react";
import Button from "../ui/Button";
import Reveal from "../Reveal";
import Photo from "../ui/Photo";
import { PHOTOS } from "../../data/landing";
import Lightbox from "../ui/Lightbox";

const MAIN_PHOTOS = [PHOTOS.esteira, PHOTOS.yoga, PHOTOS.pilates];

const CARD =
  "group block overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(59,10,117,0.18)] cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e1da6]";
const ZOOM = "transition duration-500 group-hover:scale-105";

export default function Experience({
  onOpenGallery,
}: {
  onOpenGallery: () => void;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="experiencia" className="bg-[#f6f1ee] px-6 py-16">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[0.8fr_1.6fr]">
        <Reveal variant="fadeUp">
          <h2 className="text-[clamp(2rem,4vw,2.6rem)] font-semibold leading-[1.08] tracking-tight text-[#2a1244]">
            Experiência
            <br />
            <span className="text-[#5e1da6]">L'Anetto</span>
          </h2>
          <p className="mt-5 max-w-[320px] text-[15px] leading-relaxed text-[#3a2a4a]">
            Cada detalhe foi pensado para proporcionar uma experiência completa.
            Ambientes modernos, espaços amplos e uma atmosfera que inspira.
          </p>
          <Button
            onClick={onOpenGallery}
            variant="outline"
            className="mt-7 !px-5 !py-2.5"
          >
            Conheça a academia
          </Button>
        </Reveal>

        <Reveal variant="fadeIn" delay={0.1}>
          <div className="grid grid-cols-[1.6fr_1fr] grid-rows-2 gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setOpen(0)}
              aria-label={`Ampliar: ${PHOTOS.esteira.alt}`}
              className={`${CARD} row-span-2 min-h-[260px] sm:min-h-[320px]`}
            >
              <Photo
                photo={PHOTOS.esteira}
                className={ZOOM}
                placeholder={
                  <div className="h-full w-full bg-gradient-to-br from-[#2a1244] to-[#0b0710]" />
                }
              />
            </button>

            <button
              type="button"
              onClick={() => setOpen(1)}
              aria-label={`Ampliar: ${PHOTOS.yoga.alt}`}
              className={`${CARD} min-h-[120px]`}
            >
              <Photo
                photo={PHOTOS.yoga}
                className={ZOOM}
                placeholder={
                  <div className="h-full w-full bg-gradient-to-br from-[#5e1da6] to-[#1a0836]" />
                }
              />
            </button>

            <button
              type="button"
              onClick={() => setOpen(2)}
              aria-label={`Ampliar: ${PHOTOS.pilates.alt}`}
              className={`${CARD} min-h-[120px]`}
            >
              <Photo
                photo={PHOTOS.pilates}
                className={ZOOM}
                placeholder={
                  <div className="h-full w-full bg-gradient-to-br from-[#8b7a6b] to-[#3a2f28]" />
                }
              />
            </button>
          </div>
        </Reveal>
      </div>

      <Lightbox photos={MAIN_PHOTOS} index={open} onChange={setOpen} />
    </section>
  );
}
