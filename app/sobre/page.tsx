import { getMetadataForPath } from "../lib/seo";

// Consome os metadados dinâmicos para a rota "/sobre" vindos do seo.json
export const metadata = getMetadataForPath("/sobre");

export default function SobrePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">Sobre Nós</h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Esta é uma página de teste para validar a automação e centralização de SEO do template.
        </p>
      </main>
    </div>
  );
}
