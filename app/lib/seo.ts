import { Metadata } from 'next';
import seoData from '../config/seo.json';

interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
}

const typedSeoData = seoData as Record<string, PageSeo>;

/**
 * Retorna os metadados de SEO (título, descrição, keywords, canonical e tags sociais)
 * baseados na rota informada. Se a rota não for encontrada, retorna os metadados
 * da rota principal ("/") como fallback.
 */
export function getMetadataForPath(pathname: string): Metadata {
  const pageSeo = typedSeoData[pathname] || typedSeoData['/'];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://exemplo.com.br';
  const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;

  if (!pageSeo) {
    return {
      title: "Template Next.js",
      description: "Site construído com o template Next.js",
      alternates: {
        canonical: canonicalUrl,
      }
    };
  }

  const titleStr = pageSeo.title;
  const descStr = pageSeo.description;

  return {
    title: titleStr,
    description: descStr,
    keywords: pageSeo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: canonicalUrl,
      title: titleStr,
      description: descStr,
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: titleStr,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: titleStr,
      description: descStr,
      images: [`${siteUrl}/og-image.jpg`],
    }
  };
}
