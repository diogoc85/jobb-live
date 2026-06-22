import type { Metadata } from "next";
import { Suspense } from "react";
import Analytics from "./lib/tracking/Analytics";
import { getMetadataForPath } from "./lib/seo";
import themeData from "./config/theme.json";
import SmoothScroll from "./components/ui/SmoothScroll";
import WhatsAppButton from "./components/ui/WhatsAppButton";
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

  // Unifica famílias e pesos para evitar requisições duplicadas que podem quebrar o Google Fonts
  const fontFamilies: string[] = [];

  if (titleFont === bodyFont) {
    fontFamilies.push(`${encodeURIComponent(titleFont)}:wght@300;400;500;600;700;800`);
  } else {
    fontFamilies.push(`${encodeURIComponent(titleFont)}:wght@300;400;500;600;700;800`);
    fontFamilies.push(`${encodeURIComponent(bodyFont)}:wght@300;400;500;600;700`);
  }

  // Adiciona Sofia Sans Extra Condensed de forma independente
  fontFamilies.push("Sofia+Sans+Extra+Condensed:wght@300;400;500;600;700;800;900");

  const googleFontsUrl = `https://fonts.googleapis.com/css2?${fontFamilies.map(f => `family=${f}`).join('&')}&display=swap`;

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
      <body className="antialiased min-h-full flex flex-col" suppressHydrationWarning>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
