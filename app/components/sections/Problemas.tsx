import React from "react";
import Image from "next/image";

const ArrowDownRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-10 h-10 fill-current">
    <path d="M200,104v96a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h76.69L50.34,69.66a8,8,0,0,1,11.32-11.32L184,180.69V104a8,8,0,0,1,16,0Z" />
  </svg>
);

const XCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 fill-current">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-133.66a8,8,0,0,1,0,11.32L139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35A8,8,0,0,1,165.66,82.34Z" />
  </svg>
);

export default function Problemas() {
  const problemsList = [
    "Projetos sem controle de custo",
    "Orçamentos que não refletem a realidade",
    "Financeiro descentralizado",
    "Falta de visibilidade do lucro"
  ];

  return (
    <section className="problemas w-full relative overflow-hidden py-16 md:py-12 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Box centralizado com a imagem e fundo escuro */}
        <div className=" relative w-full overflow-hidden bg-secondary-900 text-secondary-50 px-8 py-12 md:p-16 lg:px-24 lg:py-20 rounded-none">

          {/* Imagem de Fundo Nativa do Next.js (Assets do Projeto) */}
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <Image
              src="/assets/img/bg-Problema.jpg"
              alt="Problemas de gestão financeira na agência"
              fill
              className="object-cover object-center"
              unoptimized
              priority={false}
            />
          </div>

          {/* Conteúdo Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Coluna da Esquerda: Título */}
            <div className="flex flex-col animate-fade-right">

              {/* Ícone Estilizado (Seta para baixo/direita vermelha) */}
              <div className="relative text-primary-500 mb-6 w-10 h-10">
                <div className="absolute top-0 left-0">
                  <ArrowDownRightIcon />
                </div>
              </div>

              <h2 className="text-display-sm text-pretty leading-tight tracking-tightest text-secondary-50">
                Sua agência perde <br className="hidden lg:block" />
                dinheiro <span className="text-primary-500">e você <br className="hidden lg:block" />
                  nem percebe?</span>
              </h2>
            </div>

            {/* Coluna da Direita: Lista de Problemas */}
            <div className="flex flex-col gap-8 md:pl-8 lg:pl-6">

              <ul className="flex flex-col gap-6 pl-0">
                {problemsList.map((problem, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-4 animate-fade-left stagger-${index + 1}`}
                  >
                    <div className="text-primary-500 shrink-0">
                      <XCircleIcon />
                    </div>
                    <span className="text-heading-5 text-secondary-50 font-normal tracking-tight">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`animate-fade-left stagger-5`}>
                <p className="text-body-lg text-secondary-200 max-w-md text-pretty">
                  Sua agência está enfrentando algum dos problemas acima? O JobbLive resolve isso pra você.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
