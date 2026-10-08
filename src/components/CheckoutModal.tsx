import { CHECKOUT_URL, PRICE } from "../data/landing";

type CheckoutModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="modal-overlay"
    >
      <div className="modal-card">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="modal-close"
        >
          &times;
        </button>

        <div className="mb-6 text-center">
          <span className="pill mb-3">Link Oficial de Checkout</span>
          <h3
            id="modalTitle"
            className="mb-2 mt-0 text-2xl font-extrabold text-white"
          >
            Garantir 1º Lote Fundador
          </h3>
          <p className="m-0 text-[13.6px] text-[#9aa4b2]">
            Você será redirecionado para a plataforma de pagamento com condição
            restrita de inauguração travada.
          </p>
        </div>

        <div className="mb-6 rounded-xl border border-[#8636E0]/25 bg-[#0b0a12]/85 p-5">
          <div className="mb-2 flex justify-between text-[14.4px]">
            <span className="text-slate-300">Plano Anual Fundador:</span>
            <strong className="text-white">12x de {PRICE}</strong>
          </div>
          <div className="mb-2 flex justify-between text-[13.6px] text-purple-500">
            <span>Taxa de Matrícula:</span>
            <strong>ISENTO (R$ 0,00)</strong>
          </div>
          <div className="flex justify-between text-[13.6px] text-purple-500">
            <span>Kit Lanetto Black VIP:</span>
            <strong>INCLUSO</strong>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero btn-lg w-full"
        >
          Ir para Pagamento Seguro
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <p className="mb-0 mt-4 text-center text-xs text-[#9aa4b2]">
          🔒 Ambiente Criptografado de 256 bits · Garantia incondicional
          pós-abertura.
        </p>
      </div>
    </div>
  );
}
