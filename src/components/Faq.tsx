import { useState } from "react";
import { FAQS } from "../data/landing";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="p-6">
      <div className="mx-auto max-w-[760px]">
        <div className="mx-auto mb-10 max-w-[680px] text-center">
          <span className="section-tag">Perguntas Frequentes</span>
          <h2 className="section-title">Esclareça suas dúvidas</h2>
          <p className="section-subtitle">
            Tudo o que você precisa saber sobre o pré-lançamento e o 1º lote.
          </p>
        </div>

        {FAQS.map((f, i) => {
          const active = openFaq === i;
          return (
            <div
              key={f.q}
              className="mb-3.5 overflow-hidden rounded-[14px] border card-diff"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(active ? -1 : i)}
                aria-expanded={active}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[1.05rem] font-bold"
              >
                <span className="text-primary-dark">{f.q}</span>
                <span
                  className={`text-xl text-purple-500 transition-transform ${active ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {active && (
                <div className="px-6 pb-5 text-[15px] leading-relaxed text-black">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
