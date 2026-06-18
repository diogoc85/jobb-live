import type { Metadata } from "next";
import { Suspense } from "react";
import Analytics from "./lib/tracking/Analytics";
import { getMetadataForPath } from "./lib/seo";
import themeData from "./config/theme.json";
import "./globals.css";

// Obtém a URL base do site a partir do .env para configurar o metadataBase do Next.js
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://exemplo.com.br';

// Carrega os metadados principais (da rota Home "/")
const baseMetadata = getMetadataForPath("/");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: baseMetadata.title,
  description: baseMetadata.description,
  keywords: baseMetadata.keywords,
  icons: {
    icon: themeData.favicon || "/favicon.ico",
  },
  alternates: baseMetadata.alternates,
  openGraph: {
    ...baseMetadata.openGraph,
    siteName: baseMetadata.title?.toString() || undefined,
  },
  twitter: baseMetadata.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Configura tipografias dinâmicas vindas do setup
  const titleFont = themeData.titleFont || "Outfit";
  const bodyFont = themeData.bodyFont || "Outfit";
  
  // Monta a URL de importação do Google Fonts
  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(titleFont)}:wght@300;400;500;600;700;800&family=${encodeURIComponent(bodyFont)}:wght@300;400;500;600;700&display=swap`;

  return (
    <html
      lang="pt-BR"
      style={{
        "--font-title": `'${titleFont}', sans-serif`,
        "--font-body": `'${bodyFont}', sans-serif`,
      } as React.CSSProperties}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsUrl} rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
