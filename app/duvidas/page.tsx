import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/layout/Footer";

export default function DuvidasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-display-md font-black text-foreground mb-4">Dúvidas Frequentes</h1>
        <p className="text-body-lg text-foreground/60 max-w-2xl mx-auto">
          Encontre as respostas para as dúvidas mais comuns. Página em construção.
        </p>
      </main>
      <Footer />
    </div>
  );
}
