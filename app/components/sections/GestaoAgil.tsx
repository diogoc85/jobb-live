"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

interface StorytellingItem {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
}

const storytellingItems: StorytellingItem[] = [
  {
    id: 0,
    label: "Conciliação bancária inteligente por arquivo Ofx",
    title: "Conciliação bancária inteligente por arquivo Ofx",
    description: "Tenha praticidade e economize tempo com nossa solução de conciliação bancária. Simplificamos o processo para que você gerencie suas finanças com facilidade, reduzindo tarefas manuais e ganhando mais eficiência diariamente.",
    image: "/assets/img/conciliacao-bancaria.jpg"
  },
  {
    id: 1,
    label: "Emissão de nota fiscal eletrônica",
    title: "Emissão de nota fiscal eletrônica",
    description: "A emissão de nota fiscal eletrônica integrada ao sistema financeiro traz mais agilidade e eficiência operacional. Automatize processos, elimine digitações manuais e garanta mais segurança nas transações comerciais diariamente.",
    image: "/assets/img/notas-fiscais.jpg"
  },
  {
    id: 2,
    label: "Envio de cadastro de fornecedores por link",
    title: "Envio de cadastro de fornecedores por link",
    description: "Agora seu fornecedor pode atualizar os próprios dados com facilidade e rapidez diretamente pelo sistema. Todas as informações ficam salvas automaticamente em apenas um clique, reduzindo erros operacionais internos.",
    image: "/assets/img/fornecedores-link.jpg"
  },
  {
    id: 3,
    label: "Geração de contrato em PDF",
    title: "Geração de contrato em PDF",
    description: "Crie contratos em PDF e tenha flexibilidade para cadastrar diferentes modelos diretamente em nosso sistema. Personalize, organize e envie contratos para clientes ou fornecedores com mais praticidade diariamente.",
    image: "/assets/img/contratos-pdf.jpg"
  },
  {
    id: 4,
    label: "Integração com a D4sign e Docusign",
    title: "Integração com a D4sign e Docusign. Tenha a praticidade da assinatura digital.",
    description: "Além de gerar contratos em PDF de maneira prática e automatizada, agora você também pode enviá-los online. Permita que clientes e fornecedores assinem documentos digitalmente com rapidez, segurança e praticidade.",
    image: "/assets/img/integracao-d4sign-docusign.jpg"
  }
];

export default function GestaoAgil() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;
      const containerTop = window.scrollY + rect.top;

      // Executa a lógica de storytelling no scroll em telas maiores
      if (window.innerWidth >= 1024) {
        if (rect.top <= 0 && rect.bottom >= windowHeight) {
          const scrolled = window.scrollY - containerTop;
          const scrollableDist = containerHeight - windowHeight;
          const progress = scrolled / scrollableDist;
          const index = Math.min(
            storytellingItems.length - 1,
            Math.max(0, Math.floor(progress * storytellingItems.length))
          );
          setActiveIndex(index);
        } else if (rect.top > 0) {
          setActiveIndex(0);
        } else if (rect.bottom < windowHeight) {
          setActiveIndex(storytellingItems.length - 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToItem = (index: number) => {
    if (window.innerWidth < 1024) {
      setActiveIndex(index);
      return;
    }

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const containerHeight = rect.height;
    const containerTop = window.scrollY + rect.top;
    const scrollableDist = containerHeight - windowHeight;

    // Calcula a posição do scroll correspondente à faixa do item clicado
    const targetScroll =
      containerTop + (index / (storytellingItems.length - 0.7)) * scrollableDist;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  return (
    <section
      ref={containerRef}
      className="gestao-agil w-full relative bg-white lg:h-[300vh]"
    >
      {/* Container Sticky para Desktop e Normal para Mobile */}
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center overflow-hidden py-16 lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Lado Esquerdo: Textos do Cabeçalho e Lista de Facilidades */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-overline text-primary-500 font-normal tracking-widest uppercase mb-4 text-pretty">
                Gestão Ágil Integrada
              </span>
              <h2 className="text-pretty leading-tight tracking-tightest mb-6 font-display text-foreground text-3xl md:text-5xl">
                Agilize os processos com o JobbLive <br />
                e <span className="text-primary-500">economize horas de trabalho.</span>
              </h2>
              <p className="text-body-lg text-foreground/70 text-pretty mb-8">
                Conheça algumas das facilidades que o JobbLive oferece ao seu dia a dia.
              </p>

              {/* Lista Interativa */}
              <ul className="flex flex-col gap-4 pl-0 list-none">
                {storytellingItems.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToItem(idx)}
                        className={`flex items-center gap-3 text-left font-sans text-body-md transition-all duration-300 group cursor-pointer border-none bg-transparent p-0 ${isActive
                          ? "text-primary-500 font-medium translate-x-2"
                          : "text-foreground/50 hover:text-foreground/80"
                          }`}
                      >
                        <ArrowRight
                          size={18}
                          className={`shrink-0 transition-transform duration-300 ${isActive ? "text-primary-500 scale-110" : "text-foreground/40 group-hover:translate-x-1"
                            }`}
                        />
                        <span className="leading-snug">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Lado Direito: Preview do Sistema com Texto Sobreposto em proporção 3:4 */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[480px] aspect-[3/4] overflow-hidden bg-neutral-900 rounded-none shadow-none border border-neutral-200">

                {/* Imagens de Fundo com Transição Suave */}
                <div className="absolute inset-0 w-full h-full z-0">
                  {storytellingItems.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <div
                        key={item.id}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${isActive
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                          }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-center"
                          unoptimized
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Overlay de Gradiente Escuro para legibilidade do texto */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)"
                  }}
                  aria-hidden="true"
                />

                {/* Textos Dinâmicos Sobrepostos */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 flex flex-col justify-end min-h-[40%] text-white">
                  {storytellingItems.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <div
                        key={item.id}
                        className={`transition-all duration-500 ease-in-out ${isActive
                          ? "block opacity-100 translate-y-0"
                          : "hidden opacity-0 translate-y-4"
                          }`}
                      >
                        {/* Título */}
                        <h3 className="text-xl md:text-2xl font-display text-white font-normal mb-3 leading-tight text-pretty">
                          {item.title}
                        </h3>
                        {/* Parágrafo/Descrição */}
                        <p className="text-sm text-neutral-300 font-sans text-pretty leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
