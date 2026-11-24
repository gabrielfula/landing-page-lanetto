import type { ReactNode } from "react";
import Arrow from "./Arrow";

type ButtonProps = {
  children: ReactNode;
  /** Link (se começar com http abre em nova aba). Sem href vira <button>. */
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "outline-light";
  /** Ícone opcional à esquerda do texto (ex.: <WhatsAppIcon />). */
  icon?: ReactNode;
  className?: string;
};

/** Botão pílula do design (sólido roxo ou contornado). */
export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  icon,
  className = "",
}: ButtonProps) {
  const styles = {
    solid:
      "border-purple-400/40 bg-gradient-to-br from-[#6b21b8] to-[#3b0a75] text-white shadow-[0_6px_22px_rgba(94,29,166,0.45)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(134,54,224,0.6)]",
    outline:
      "border-[#5e1da6]/60 bg-transparent text-[#5e1da6] hover:bg-[#5e1da6] hover:text-white",
    "outline-light":
      "border-purple-400/60 bg-[#2a0a52]/50 text-white hover:bg-[#5e1da6]",
  }[variant];

  const classes = `inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${styles} ${className}`;
  const content = (
    <>
      {icon}
      {children}
      <Arrow />
    </>
  );

  if (!href) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {content}
    </a>
  );
}
