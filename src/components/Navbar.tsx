import { wppLink } from "../helpers/Helper";

const vipWpp = wppLink(
  "Olá, gostaria de informações sobre o 1º Lote da Lanetto Fitness",
);

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-[#5E1DA6]/20 bg-[#0e0d14]/90 px-6 py-3.5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
          <a
            href="#"
            aria-label="Lanetto Fitness Início"
            className="inline-flex items-center gap-2.5 text-white no-underline"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/40 bg-gradient-to-br from-[#5E1DA6] to-[#3B0A75] text-lg font-black tracking-tighter shadow-[0_0_18px_rgba(94,29,166,0.55)]"
            >
              L
            </span>
            <span className="flex flex-col">
              <span className="text-lg font-extrabold uppercase leading-none tracking-[0.12em]">
                LANETTO
              </span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-purple-500">
                FITNESS · BOUTIQUE
              </span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href={vipWpp}
              target="_blank"
              rel="noopener noreferrer"
              title="Conversar no WhatsApp"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-purple-500 hover:bg-[#5E1DA6]/25 hover:text-purple-100"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-8 w-8 fill-current"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.18.181-.077.358.103.177.461.761.99 1.233.682.608 1.258.796 1.438.883.18.087.286.072.393-.051.107-.123.461-.537.584-.722.123-.185.246-.154.412-.092.166.062 1.054.497 1.235.588.181.091.302.135.347.212.045.077.045.447-.099.852z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href="#lote1" className="btn-hero">
              Garanta sua vaga
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
