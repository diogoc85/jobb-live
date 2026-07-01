import React from "react";
import Link from "next/link";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/layout/Footer";
import JsonLd from "../components/seo/JsonLd";
import FaqAccordion from "../components/ui/FaqAccordion";
import { getMetadataForPath } from "../lib/seo";

export const metadata = getMetadataForPath("/duvidas");

interface FAQItem {
  question: string;
  answerText: string;
  answerJsx: React.ReactNode;
}

export default function DuvidasPage() {
  const faqItems: FAQItem[] = [
    {
      question: "O que é a JobbLive?",
      answerText: "A JobbLive é um sistema de gestão desenvolvido para agências, produtoras e empresas de eventos. A plataforma reúne em um único lugar o controle financeiro, gestão de projetos, orçamentos, contratos, fornecedores, notas fiscais, relatórios e muito mais, tornando a operação mais organizada, produtiva e rentável.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          A JobbLive é um sistema de gestão desenvolvido para agências, produtoras e empresas de eventos. A plataforma reúne em um único lugar o controle financeiro, gestão de projetos, orçamentos, contratos, fornecedores, notas fiscais, relatórios e muito mais, tornando a operação mais organizada, produtiva e rentável.
        </p>
      )
    },
    {
      question: "Para quais empresas a JobbLive é indicada?",
      answerText: "A JobbLive foi desenvolvida para empresas que gerenciam projetos e equipes, especialmente: Agências de marketing, Agências de live marketing, Produtoras de eventos, Empresas de eventos corporativos, Empresas de comunicação, Agências promocionais.",
      answerJsx: (
        <div>
          <p className="text-body-md text-foreground/80 leading-relaxed text-pretty mb-3">
            A JobbLive foi desenvolvida para empresas que gerenciam projetos e equipes, especialmente:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-body-md text-foreground/80 leading-relaxed">
            <li>Agências de marketing</li>
            <li>Agências de live marketing</li>
            <li>Produtoras de eventos</li>
            <li>Empresas de eventos corporativos</li>
            <li>Empresas de comunicação</li>
            <li>Agências promocionais</li>
          </ul>
        </div>
      )
    },
    {
      question: "Quais funcionalidades a JobbLive oferece?",
      answerText: "A plataforma reúne diversas funcionalidades para centralizar a gestão da sua empresa, incluindo: Gestão de projetos, Controle financeiro, Fluxo de caixa, Conciliação bancária via OFX, Emissão de Nota Fiscal eletrônica, Gestão de fornecedores, Geração de contratos em PDF, Assinatura eletrônica integrada (D4Sign e DocuSign), Controle de tarefas, Relatórios gerenciais, Dashboard com indicadores em tempo real.",
      answerJsx: (
        <div>
          <p className="text-body-md text-foreground/80 leading-relaxed text-pretty mb-3">
            A plataforma reúne diversas funcionalidades para centralizar a gestão da sua empresa, incluindo:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-body-md text-foreground/80 leading-relaxed">
            <li>Gestão de projetos</li>
            <li>Controle financeiro</li>
            <li>Fluxo de caixa</li>
            <li>Conciliação bancária via OFX</li>
            <li>Emissão de Nota Fiscal eletrônica</li>
            <li>Gestão de fornecedores</li>
            <li>Geração de contratos em PDF</li>
            <li>Assinatura eletrônica integrada (D4Sign e DocuSign)</li>
            <li>Controle de tarefas</li>
            <li>Relatórios gerenciais</li>
            <li>Dashboard com indicadores em tempo real</li>
          </ul>
        </div>
      )
    },
    {
      question: "Posso emitir Nota Fiscal pelo sistema?",
      answerText: "Sim. A JobbLive possui integração para emissão de Nota Fiscal eletrônica diretamente pelo sistema, eliminando processos manuais e agilizando a rotina financeira da empresa.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. A JobbLive possui integração para emissão de Nota Fiscal eletrônica diretamente pelo sistema, eliminando processos manuais e agilizando a rotina financeira da empresa.
        </p>
      )
    },
    {
      question: "A plataforma possui conciliação bancária?",
      answerText: "Sim. Através da importação de arquivos OFX, a JobbLive realiza a conciliação bancária de forma rápida e organizada, facilitando o controle das movimentações financeiras.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. Através da importação de arquivos OFX, a JobbLive realiza a conciliação bancária de forma rápida e organizada, facilitando o controle das movimentações financeiras.
        </p>
      )
    },
    {
      question: "É possível gerar contratos automaticamente?",
      answerText: "Sim. Você pode criar diversos modelos personalizados de contratos e gerar documentos em PDF automaticamente utilizando as informações cadastradas no sistema.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. Você pode criar diversos modelos personalizados de contratos e gerar documentos em PDF automaticamente utilizando as informações cadastradas no sistema.
        </p>
      )
    },
    {
      question: "A JobbLive possui assinatura eletrônica?",
      answerText: "Sim. A plataforma possui integração com D4Sign e DocuSign, permitindo enviar contratos para assinatura digital diretamente pelo sistema, com praticidade, validade jurídica e segurança.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. A plataforma possui integração com D4Sign e DocuSign, permitindo enviar contratos para assinatura digital diretamente pelo sistema, com praticidade, validade jurídica e segurança.
        </p>
      )
    },
    {
      question: "Os fornecedores podem atualizar seus próprios dados?",
      answerText: "Sim. A JobbLive oferece um portal onde fornecedores podem atualizar seus dados cadastrais de forma simples. As informações são sincronizadas automaticamente, reduzindo erros e retrabalho.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. A JobbLive oferece um portal onde fornecedores podem atualizar seus dados cadastrais de forma simples. As informações são sincronizadas automaticamente, reduzindo erros e retrabalho.
        </p>
      )
    },
    {
      question: "Posso acompanhar o lucro dos meus projetos?",
      answerText: "Sim. A plataforma permite acompanhar receitas, despesas, custos e margem de lucro por projeto, oferecendo uma visão clara da rentabilidade da operação.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. A plataforma permite acompanhar receitas, despesas, custos e margem de lucro por projeto, oferecendo uma visão clara da rentabilidade da operação.
        </p>
      )
    },
    {
      question: "Meus dados ficam seguros?",
      answerText: "Sim. A JobbLive utiliza boas práticas de segurança da informação para proteger os dados da sua empresa, garantindo confiabilidade, controle de acesso e armazenamento seguro.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. A JobbLive utiliza boas práticas de segurança da informação para proteger os dados da sua empresa, garantindo confiabilidade, controle de acesso e armazenamento seguro.
        </p>
      )
    },
    {
      question: "Preciso instalar algum programa?",
      answerText: "Não. A JobbLive é uma plataforma online (SaaS), acessível diretamente pelo navegador, sem necessidade de instalação.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Não. A JobbLive é uma plataforma online (SaaS), acessível diretamente pelo navegador, sem necessidade de instalação.
        </p>
      )
    },
    {
      question: "Posso acessar de qualquer lugar?",
      answerText: "Sim. Basta ter acesso à internet para utilizar a plataforma de qualquer computador ou dispositivo compatível.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. Basta ter acesso à internet para utilizar a plataforma de qualquer computador ou dispositivo compatível.
        </p>
      )
    },
    {
      question: "A JobbLive oferece treinamento?",
      answerText: "Sim. Nossa equipe auxilia na implantação do sistema e oferece treinamento para que sua empresa aproveite todos os recursos da plataforma com rapidez.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. Nossa equipe auxilia na implantação do sistema e oferece treinamento para que sua empresa aproveite todos os recursos da plataforma com rapidez.
        </p>
      )
    },
    {
      question: "Existe suporte técnico?",
      answerText: "Sim. Nossa equipe de suporte está disponível para esclarecer dúvidas, auxiliar na utilização da plataforma e garantir que sua operação funcione sem interrupções.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. Nossa equipe de suporte está disponível para esclarecer dúvidas, auxiliar na utilização da plataforma e garantir que sua operação funcione sem interrupções.
        </p>
      )
    },
    {
      question: "Como posso solicitar uma demonstração?",
      answerText: "É muito simples. Basta preencher o formulário de contato ou clicar no botão 'Agendar Demonstração' para que nossa equipe apresente a plataforma e entenda as necessidades da sua empresa.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          É muito simples. Basta preencher o formulário de contato ou clicar no botão <strong className="font-semibold text-foreground">&quot;Agendar Demonstração&quot;</strong> para que nossa equipe apresente a plataforma e entenda as necessidades da sua empresa.
        </p>
      )
    },
    {
      question: "A JobbLive substitui planilhas e outros sistemas?",
      answerText: "Sim. A proposta da JobbLive é centralizar toda a operação da agência em um único sistema, reduzindo o uso de planilhas e ferramentas desconectadas. Assim, você ganha mais produtividade, controle e visibilidade sobre projetos, financeiro e resultados.",
      answerJsx: (
        <p className="text-body-md text-foreground/80 leading-relaxed text-pretty">
          Sim. A proposta da JobbLive é centralizar toda a operação da agência em um único sistema, reduzindo o uso de planilhas e ferramentas desconectadas. Assim, você ganha mais produtividade, controle e visibilidade sobre projetos, financeiro e resultados.
        </p>
      )
    }
  ];

  // Gera o Schema JSON-LD de FAQ
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answerText,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground">
      {/* Injeta o Schema JSON-LD para otimização em motores de IA (GEO) e buscas (SEO) */}
      <JsonLd data={faqSchema} />
      
      <Navbar />
      
      <main className="flex-1 py-24 md:py-32 bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6 lg:px-8">
          
          {/* Cabeçalho da Página */}
          <div className="text-center mb-16">
            <h1 className="hero-animate-fade-up delay-1 max-w-4xl mx-auto text-foreground text-pretty tracking-tightest leading-tightest mb-6">
              Dúvidas Frequentes
            </h1>
            <p className="text-body-md text-foreground/60 max-w-2xl mx-auto text-pretty">
              Encontre respostas rápidas para as principais perguntas sobre a plataforma JobbLive.
            </p>
          </div>

          {/* Lista de Acordeões Interativos */}
          <FaqAccordion items={faqItems} />

          {/* Bloco de CTA de Contato */}
          <div className="mt-20 text-center bg-primary-500 text-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto animate-fade-up">
            <h3 className="text-2xl font-display font-normal text-white mb-3 text-pretty">
              Ainda tem dúvidas sobre o JobbLive?
            </h3>
            <p className="text-body-md text-white/80 mb-6 text-pretty">
              Nossa equipe está pronta para ajudar você a entender como podemos transformar a gestão da sua agência.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-2">
              <Link
                href="/agendar-demo"
                className="btn btn-dark btn-md px-6 w-full sm:w-auto text-center"
              >
                Agendar Demonstração
              </Link>
              <Link
                href="/links"
                className="btn btn-md px-6 bg-white/20 text-white hover:bg-white/30 transition-colors duration-150 w-full sm:w-auto text-center"
              >
                Falar Conosco
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
