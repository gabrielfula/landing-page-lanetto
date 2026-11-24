/**
 * Logo da L'Anetto: marca "L'" (public/logo-mark.png) + nome em texto branco.
 * Se preferir usar uma imagem pronta do logotipo completo, troque este
 * componente por um <img src="/sua-logo.png" />.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/logo-white.png" alt="" className="h-11 w-auto sm:h-12" />
    </span>
  );
}
