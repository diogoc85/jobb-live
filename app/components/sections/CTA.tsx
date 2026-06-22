import React from "react";
import Link from "next/link";
import contactsData from "../../config/contacts.json";

export default function CTA() {
  const whatsappLink = contactsData.whatsappLink || "#";
  const testeLink = "https://app.jobblive.com.br/register";

  return (
    <section className="cta w-full bg-primary-500 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 animate-fade-up">

          {/* Título */}
          <h2 className="text-pretty leading-tight tracking-tightest text-white font-display max-w-3xl">
            Comece a organizar sua agência ainda hoje.
          </h2>

          {/* Subtítulo */}
          <p className="text-heading-6 text-white/80 text-pretty">
            Teste grátis ou fale com um dos nossos consultores!
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            {/* Botão Primário Escuro */}
            <Link
              href={testeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-lg px-8"
            >
              Teste grátis por 7 dias
            </Link>

            {/* Botão Ghost Claro */}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg px-8 bg-white/20 text-white hover:bg-white/30 transition-colors duration-150"
            >
              Falar com um consultor
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
