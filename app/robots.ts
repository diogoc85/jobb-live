
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // URL base do site vinda das variáveis de ambiente.
    // IMPORTANTE: Altere o fallback 'https://exemplo.com.br' para o domínio oficial do seu projeto caso não use .env
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://exemplo.com.br'

    return {
        rules: [
            // Regra Geral: Permite indexação de tudo, exceto rotas sensíveis e APIs
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'], // Proteja suas rotas sensíveis aqui
            },
            // Robôs de IA (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended)
            // Mantidos liberados (allow: '/') para beneficiar estratégias de GEO (Generative Engine Optimization).
            // Caso queira BLOQUEAR o rastreamento para treinamento de IA nestes bots,
            // altere a linha 'allow: "/"' para 'disallow: "/""' ou disallow: ["/"].
            {
                userAgent: [
                    'GPTBot',
                    'ClaudeBot',
                    'Google-Extended',
                    'Applebot-Extended'
                ],
                allow: '/',
                disallow: ['/api/', '/admin/'],
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}