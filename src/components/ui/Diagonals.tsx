
export default function Diagonals({ side = "right" }: { side?: "left" | "right" }) {
  const pos = side === "right" ? "right-0" : "left-0";
  const skew = side === "right" ? "-skew-x-[28deg]" : "skew-x-[28deg]";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 ${pos} w-[38%] overflow-hidden`}
    >
      <div
        className={`absolute -inset-y-4 ${side === "right" ? "right-[-6%]" : "left-[-6%]"} w-1/2 ${skew} bg-gradient-to-b from-[#6b21b8]/60 to-[#3b0a75]/20`}
      />
      <div
        className={`absolute -inset-y-4 ${side === "right" ? "right-[-24%]" : "left-[-24%]"} w-1/3 ${skew} bg-gradient-to-b from-[#8636e0]/40 to-[#3b0a75]/10`}
      />
    </div>
  );
}
