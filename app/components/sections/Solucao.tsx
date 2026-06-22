import React from "react";
import Image from "next/image";
import { FileText, ClipboardText, Wrench, TrendUp, CurrencyDollar, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Solucao() {
  const steps = [
    {
      id: "01",
      title: "Inicie o projeto",
      description: "Preencha todos os dados do cliente.",
      icon: <FileText className="w-6 h-6" />,
      margin: "md:mt-[160px]",
    },
    {
      id: "02",
      title: "Monte o orçamento",
      description: "Utilize modelos prontos ou crie o seu próprio modelo.",
      icon: <ClipboardText className="w-6 h-6" />,
      margin: "md:mt-[120px]",
    },
    {
      id: "03",
      title: "Executar tarefas",
      description: "Crie equipes e tarefas e gerencie através de um painel intuitivo.",
      icon: <Wrench className="w-6 h-6" />,
      margin: "md:mt-[80px]",
    },
    {
      id: "04",
      title: "Gerir o financeiro",
      description: "Custos dos eventos, conciliação bancária e fluxo de caixa",
      icon: <TrendUp className="w-6 h-6" />,
      margin: "md:mt-[40px]",
    },
    {
      id: "05",
      title: "Relatório financeiro",
      description: "Analise o previsto vs realizado, demonstrativo de DRE.",
      icon: <CurrencyDollar className="w-6 h-6" />,
      margin: "md:mt-0",
    },
  ];

  return (
    <section className="solucao w-full relative overflow-hidden py-16 md:py-24">
      {/* Imagem de Fundo */}
      <Image
        src="/assets/img/bg-conectado.png"
        alt=""
        fill
        className="object-cover object-center"
        style={{ position: 'absolute', inset: 0 }}
        unoptimized
        priority={false}
        aria-hidden="true"
      />

      {/* Overlay para garantir legibilidade */}
      <div className="absolute inset-0 z-0 bg-surface/80 pointer-events-none" />
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 0% 100%, var(--color-primary-100) 0%, transparent 60%), radial-gradient(circle at 100% 50%, var(--color-primary-50) 0%, transparent 50%)"
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">

        {/* Bloco de Título Superior Esquerdo */}
        <div className="max-w-2xl mb-12 md:mb-0 text-left animate-fade-right">
          <h2 className="text-pretty leading-tight tracking-tightest mb-4">
            Tudo conectado. <span className="text-primary-500">Finalmente.</span>
          </h2>
          <p className="text-heading-6 text-foreground/70 text-pretty mb-8">
            Com a JobbLive, você conecta orçamento, execução e <br className="hidden md:block" /> financeiro em um único fluxo.
          </p>
          <p className="text-primary-500 text-body-md font-semibold tracking-wide uppercase hover:opacity-80 transition-opacity">
            Como funciona?
          </p>
        </div>

        {/* Grid de Cards Escalonados */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 mt-8 md:mt-0 items-start -mt-4">
          {steps.map((step, index) => {
            const delayClass = `delay-${index + 1}`;

            return (
              <div
                key={step.id}
                className={`flex flex-col bg-white p-6 lg:p-8 rounded-none relative animate-fade-up ${step.margin} ${delayClass}`}
              >
                {/* Número do Card */}
                <div className="text-display-md font-sofia-condensed text-foreground/10 leading-none mb-8">
                  {step.id}
                </div>

                {/* Ícone */}
                <div className="text-primary-500 mb-4">
                  {step.icon}
                </div>

                {/* Título e Descrição */}
                <h3 className="text-body-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-body-md text-foreground/60 text-pretty">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Texto Extra Inferior Direito */}
        <div className="mt-12 md:mt-16 flex justify-end items-center gap-1 text-foreground/60 text-body-md animate-fade-up delay-5">
          <span>E tenha muuuuuito + controle do seu workflow.</span>
          <ArrowUpRight className="w-5 h-5 text-primary-500" />
          <ArrowUpRight className="w-5 h-5 text-primary-500" />
          <ArrowUpRight className="w-5 h-5 text-primary-500" />
        </div>

      </div>
    </section>
  );
}
