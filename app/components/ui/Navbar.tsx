"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import contactsData from "../../config/contacts.json";
import themeData from "../../config/theme.json";

// Ícones SVG do Phosphor Icons
const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 fill-current">
    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16Zm176,80H40a8,8,0,0,1,0,16H216a8,8,0,0,1,0-16Z" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 fill-current">
    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const brandName = process.env.NEXT_PUBLIC_PROJECT_NAME || "Jobb";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
  ];

  return (
    <header className="full bg-background border-b border-foreground/10 z-50 sticky top-0">
      <div className="container-site h-16 md:h-20 flex items-center justify-between">
        {/* Logotipo */}
        <Link href="/" className="font-display text-xl md:text-2xl font-black text-foreground tracking-tighter hover:opacity-90 transition-opacity flex items-center">
          {themeData.logoLight ? (
            <Image
              src={themeData.logoLight}
              alt={brandName}
              width={120}
              height={36}
              className="h-8 md:h-9 w-auto object-contain"
              style={{ height: 'auto' }}
              unoptimized
              priority
            />
          ) : (
            <>
              {brandName}<span className="text-primary">.</span>
            </>
          )}
        </Link>

        {/* Links de navegação desktop */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "link-nav link-nav-active text-sm text-primary font-normal"
                    : "link-nav text-sm text-foreground/80 hover:text-primary transition-colors"
                }
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href={contactsData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm ml-2"
          >
            Falar no WhatsApp
          </a>
        </nav>

        {/* Botão Hambúrguer Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
          aria-label="Abrir menu"
        >
          <ListIcon />
        </button>
      </div>

      {/* Navbar Mobile Full-Screen */}
      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-background z-50 flex flex-col p-4 md:hidden">
          {/* Topo do Menu Mobile */}
          <div className="flex items-center justify-between w-full h-16 border-b border-foreground/10">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="font-display text-xl font-black text-foreground tracking-tighter flex items-center"
            >
              {themeData.logoLight ? (
                <Image
                  src={themeData.logoLight}
                  alt={brandName}
                  width={105}
                  height={28}
                  className="h-7 w-auto object-contain"
                  style={{ height: 'auto' }}
                  unoptimized
                  priority
                />
              ) : (
                <>
                  {brandName}<span className="text-primary">.</span>
                </>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
              aria-label="Fechar menu"
            >
              <XIcon />
            </button>
          </div>

          {/* Links Mobile alinhados à esquerda e espaçados */}
          <nav className="flex flex-col gap-6 mt-8 px-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    isActive
                      ? "text-xl font-normal text-primary"
                      : "text-xl font-normal text-foreground/90 hover:text-primary transition-colors"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
            
            <hr className="border-foreground/10 my-2" />
            
            <a
              href={contactsData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-primary btn-lg w-full text-center mt-2"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
