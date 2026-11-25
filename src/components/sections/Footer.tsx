import type { ReactNode } from "react";
import Logo from "../ui/Logo";
import { INSTAGRAM_URL } from "../../data/landing";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-white transition hover:text-purple-300"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="currentColor"
        aria-hidden="true"
      >
        {children}
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0710] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#" aria-label="L'Anetto Fitness - Início">
          <Logo />
        </a>

        <p className="flex max-w-full flex-nowrap items-center justify-center gap-[0.9em] whitespace-nowrap text-center text-[clamp(7.5px,2.4vw,11px)] font-medium uppercase tracking-[0.16em] text-white/80 sm:tracking-[0.3em] md:tracking-[0.35em]">
          <span>Movimento</span>
          <span aria-hidden="true">•</span>
          <span>Bem-estar</span>
          <span aria-hidden="true">•</span>
          <span>Evolução</span>
        </p>

        <div className="flex items-center gap-5">
          <SocialLink href={INSTAGRAM_URL} label="Instagram">
            <path d="M12 2.2c3.200 0 3.600 0 4.800.1 3.300.1 4.800 1.700 4.900 4.900.1 1.300.1 1.600.1 4.800s0 3.600-.1 4.800c-.1 3.200-1.700 4.800-4.900 4.900-1.300.1-1.600.1-4.800.1s-3.600 0-4.800-.1c-3.300-.1-4.800-1.700-4.900-4.900C2.200 15.600 2.200 15.200 2.200 12s0-3.600.1-4.800C2.400 3.900 4 2.400 7.200 2.300 8.400 2.200 8.800 2.200 12 2.200zM12 0C8.700 0 8.300 0 7.100.1 2.700.3.300 2.700.1 7.100 0 8.300 0 8.700 0 12s0 3.700.1 4.900c.2 4.400 2.600 6.800 7 7C8.300 24 8.700 24 12 24s3.700 0 4.900-.1c4.400-.2 6.800-2.600 7-7 .1-1.200.1-1.600.1-4.900s0-3.700-.1-4.900c-.2-4.400-2.600-6.800-7-7C15.700 0 15.300 0 12 0zm0 5.800a6.200 6.200 0 1 0 0 12.400 6.200 6.200 0 0 0 0-12.400zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.400-11.800a1.400 1.400 0 1 0 0 2.900 1.400 1.400 0 0 0 0-2.900z" />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
