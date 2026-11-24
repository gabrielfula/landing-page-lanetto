import Button from "../ui/Button";
import Logo from "../ui/Logo";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { NAV, MESSAGES } from "../../data/landing";
import { wppLink } from "../../helpers/Helper";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
        <a href="#" aria-label="L'Anetto Fitness - Início" className="shrink-0">
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Principal"
        >
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              target={n.external ? "_blank" : undefined}
              rel={n.external ? "noopener noreferrer" : undefined}
              className="text-[13px] font-medium text-white/90 transition hover:text-purple-300"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <Button
          href={wppLink(MESSAGES.general)}
          variant="outline-light"
          icon={<WhatsAppIcon className="h-[20px] w-[18px]" />}
          className="!px-4 !py-2 text-[13px]"
        >
          Fale conosco
        </Button>
      </div>
    </header>
  );
}
