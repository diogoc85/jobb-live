import React from "react";
import Link from "next/link";
import seoData from "./config/seo.json";
import contactsData from "./config/contacts.json";
import Navbar from "./components/ui/Navbar";

// Ícones SVG do Phosphor Icons
const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 fill-current">
    <path d="m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.62-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 fill-current">
    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,62.34a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
  </svg>
);

const EnvelopeSimpleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 fill-current">
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,116.4,52.57,64ZM216,192H40V80.57l83.13,57.15a8,8,0,0,0,9.74,0L216,80.57V192Z" />
  </svg>
);

export default function Home() {
  // Extrai as configurações de SEO da rota Home
  const pageSeo = seoData["/"] || {
    title: "Home | Jobb Live",
    description: "Plataforma de gestão inteligente criada para agências digitais modernas."
  };

  const brandName = process.env.NEXT_PUBLIC_PROJECT_NAME || "Jobb Live";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Menu de Navegação Superior */}
      <Navbar />

      {/* Seção Principal (Main) */}
      <main className="flex-1 flex flex-col justify-center">
        
        {/* Hero Section */}
        <section className="full py-10 md:py-12 lg:py-13 flex items-center min-h-[calc(100vh-80px)] relative overflow-hidden">
          


          <div className="container-site z-10 flex flex-col justify-center gap-2">
            
            {/* Tag superior / Categoria */}
            <span className="text-overline text-primary tracking-widest mb-1 animate-fade-in">
              🚀 {brandName} · Setup Inicial
            </span>

            {/* Título Principal Dinâmico */}
            <h1 className="h1-bold text-pretty text-foreground leading-tightest max-w-4xl tracking-tightest">
              {pageSeo.title}
            </h1>

            {/* Descrição Dinâmica */}
            <p className="text-body-xl text-pretty text-foreground/80 max-w-2xl mt-3 leading-spacious">
              {pageSeo.description}
            </p>

            {/* Grid de Informações de Contato do Setup */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 text-sm text-foreground/80 border-t border-foreground/10 pt-6 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="contact-icon"><WhatsappIcon /></span>
                <span className="font-semibold text-foreground">WhatsApp:</span>
                <a
                  href={contactsData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-cta transition-all"
                >
                  {contactsData.phone}
                </a>
              </div>

              <div className="hidden sm:block text-foreground/10">|</div>

              <div className="flex items-center gap-2">
                <span className="contact-icon"><EnvelopeSimpleIcon /></span>
                <span className="font-semibold text-foreground">E-mail:</span>
                <a 
                  href={`mailto:${contactsData.email}`} 
                  className="link-nav transition-all hover:text-primary"
                >
                  {contactsData.email}
                </a>
              </div>
            </div>

            {/* Botões de Ação do Design System */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
              <a
                href={contactsData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg w-full sm:w-auto"
              >
                <WhatsappIcon />
                Falar com Especialista
              </a>

              <Link
                href="/sobre"
                className="btn-ghost btn-lg w-full sm:w-auto"
              >
                Conhecer a Agência
                <ArrowRightIcon />
              </Link>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Minimalista */}
      <footer className="full py-6 border-t border-foreground/10 bg-background text-2xs text-foreground/60">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-2xs text-foreground/60">
            &copy; {new Date().getFullYear()} {brandName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="link-on-dark text-2xs">Termos de Uso</a>
            <a href="#" className="link-on-dark text-2xs">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
