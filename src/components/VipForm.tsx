import { useState, type FormEvent } from "react";
import { wppLink } from "../helpers/Helper";
import { INTERESTS } from "../data/landing";

// async function notifyTelegram(vip: {
//   name: string;
//   phone: string;
//   interest: string;
// }) {
//   const text = [
//     "🏋️ *Novo lead — Lista VIP Lanetto Fitness*",
//     "",
//     `*Nome:* ${vip.name}`,
//     `*WhatsApp:* ${vip.phone}`,
//     `*Interesse:* ${vip.interest}`,
//     `*Quando:* ${new Date().toLocaleString("pt-BR")}`,
//   ].join("\n");

//   /* Vou fazer a requisicao para o backend aqui */

//   // try {
//   //   // const res = await fetch();
//   //   if (!res.ok) {
//   //     console.error("Falha ao notificar Telegram:", await res.text());
//   //   }
//   // } catch (err) {
//   //   console.error("Erro ao notificar Telegram:", err);
//   // }
// }

export default function VipForm() {
  const [vipSent, setVipSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [vip, setVip] = useState({
    name: "",
    phone: "",
    interest: INTERESTS[0],
  });

  const handleVipSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!vip.name.trim() || !vip.phone.trim()) return;

    setSending(true);
    // await notifyTelegram(vip);
    setSending(false);
    setVipSent(true);
  };

  const vipWpp = wppLink(
    `Olá! Meu nome é ${vip.name}. Me cadastrei na Lista VIP da Lanetto Fitness (Interesse: ${vip.interest}) e quero assegurar minha condição do 1º Lote.`,
  );

  return (
    <section id="vip-list" className="px-6 py-20">
      <div className="mx-auto max-w-[680px] rounded-3xl border border-purple-500/40 bg-[radial-gradient(circle_at_top_right,rgba(94,29,166,0.25)_0%,rgba(20,16,30,0.96)_100%)] px-9 py-12 text-center shadow-[0_20px_55px_rgba(0,0,0,0.75),0_0_35px_rgba(94,29,166,0.2)]">
        <span className="pill mb-4">Acesso Antecipado</span>
        <h2 className="mb-3 text-[2.1rem] font-extrabold text-white">
          Entre para a Lista VIP
        </h2>
        <p className="mb-8 text-base text-[#9aa4b2]">
          Seja o primeiro a saber da abertura do 1º lote e garanta condições
          exclusivas com atendimento individualizado do nosso concierge.
        </p>

        {!vipSent ? (
          <form onSubmit={handleVipSubmit} className="text-left">
            <div className="mb-5">
              <label htmlFor="vipName" className="field-label">
                Nome Completo
              </label>
              <input
                id="vipName"
                type="text"
                required
                placeholder="Ex: Dr. Marcelo Albuquerque"
                value={vip.name}
                onChange={(e) => setVip({ ...vip, name: e.target.value })}
                className="input-field"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="vipPhone" className="field-label">
                WhatsApp (com DDD)
              </label>
              <input
                id="vipPhone"
                type="tel"
                required
                placeholder="(11) 99999-9999"
                value={vip.phone}
                onChange={(e) => setVip({ ...vip, phone: e.target.value })}
                className="input-field"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="vipInterest" className="field-label">
                Foco Principal de Treino
              </label>
              <select
                id="vipInterest"
                value={vip.interest}
                onChange={(e) => setVip({ ...vip, interest: e.target.value })}
                className="input-field"
              >
                {INTERESTS.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-hero btn-lg mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Entrar na Lista VIP Agora"}
            </button>
          </form>
        ) : (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-purple-500 bg-[#5E1DA6]/25 p-6 text-center text-white"
          >
            <h4 className="mb-2 text-xl font-extrabold text-purple-500">
              🎉 Inscrição Confirmada!
            </h4>
            <p className="mb-4 text-[15px] text-slate-200">
              Parabéns! Suas informações foram cadastradas na prioridade máxima
              da <strong>Lista VIP Lanetto Fitness</strong>. Nosso concierge
              entrará em contato via WhatsApp.
            </p>
            <a
              href={vipWpp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-sm"
            >
              Falar com Concierge no WhatsApp Agora
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
