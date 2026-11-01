import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Variant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "zoomIn";

const variants: Record<Variant, Variants> = {
  fadeUp: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 48 }, visible: { opacity: 1, x: 0 } },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
};

// Dispara quando o topo do elemento passa de 15% da altura da tela.
// (Evita o bug de seções muito altas nunca atingirem "amount: 0.2".)
const viewport = { once: true, margin: "0px 0px -15% 0px" } as const;

type RevealProps = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
