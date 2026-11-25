import Button from "../ui/Button";
import Reveal from "../Reveal";
import Icon from "../Icon";
import Diagonals from "../ui/Diagonals";
import Photo from "../ui/Photo";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { MESSAGES, PHOTOS } from "../../data/landing";
import { wppLink } from "../../helpers/Helper";

export default function Opening() {
  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-[#0b0710] text-white pt-5"
    >
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-[1fr_1.15fr]">
        {/* Foto: halteres (PHOTOS.halteres em src/data/landing.tsx) */}
        <div className="relative h-[220px] md:h-auto md:min-h-[300px]">
          <div className="absolute inset-0">
            <Photo
              photo={PHOTOS.halteres}
              className="object-[35%_center]"
              placeholder={
                <div
                  aria-hidden="true"
                  className="h-full w-full bg-[radial-gradient(ellipse_at_40%_60%,rgba(94,29,166,0.35),transparent_65%)]"
                />
              }
            />
          </div>
          {/* Sombra suave em todas as bordas da foto */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_28px_#0b0710] md:shadow-[inset_0_0_90px_40px_#0b0710]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0710]/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0b0710]"
          />
        </div>

        <div className="relative px-6 py-14 md:px-12">
          <Diagonals side="right" />
          <Reveal
            variant="fadeUp"
            className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start"
          >
            <Icon size={44} className="shrink-0 text-[#a855f7]">
              <path d="M12 22s7-6.500 7-12a7 7 0 0 0-14 0c0 5.500 7 12 7 12z" />
              <circle cx="12" cy="10" r="2.500" />
            </Icon>
            <div>
              <p className="text-[17px] text-white/90">Inauguração em</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">
                Janeiro de 2027
              </p>
              <p className="mt-1 text-[15px] text-white/90">
                Zed de Boulevard, Nova Odessa – SP
              </p>
              <Button
                href={wppLink(MESSAGES.vaga)}
                variant="outline-light"
                icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}
                className="mt-6"
              >
                Garanta sua vaga
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
