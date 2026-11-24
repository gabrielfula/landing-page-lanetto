import Button from "../ui/Button";
import Reveal from "../Reveal";
import Icon from "../Icon";
import Diagonals from "../ui/Diagonals";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { MAP_EMBED_URL, MESSAGES } from "../../data/landing";
import { wppLink } from "../../helpers/Helper";

export default function Opening() {
  return (
    <section className="relative overflow-hidden bg-[#0b0710] text-white">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-[1fr_1.15fr]">
        {/* Mapa da localização */}
        <div className="min-h-[280px] p-6 md:p-8">
          <div className="h-full min-h-[260px] overflow-hidden rounded-2xl border border-purple-400/30 shadow-[0_10px_40px_rgba(94,29,166,0.35)]">
            <iframe
              title="Mapa: Zed de Boulevard, Nova Odessa - SP"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[260px] w-full border-0"
            />
          </div>
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
