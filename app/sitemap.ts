
import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Função recursiva para varrer a pasta app/ buscando rotas estáticas fisicamente criadas
function getStaticRoutes(dir: string, baseRoute = ''): string[] {
    const routes: string[] = []
    
    // Pastas a serem ignoradas na geração automática de rotas do sitemap
    const ignoreDirs = ['api', 'components', 'config', 'lib']
    const folderName = path.basename(dir)
    
    // Se a pasta atual deve ser ignorada, retorna vazio
    if (ignoreDirs.includes(folderName)) {
        return []
    }

    // Lê os arquivos e pastas sob o diretório atual
    const files = fs.readdirSync(dir)

    for (const file of files) {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
            // Ignorar pastas de grupos de rotas do Next.js (ex: (marketing)), mas ler o conteúdo interno sem incluir o nome na rota
            const isRouteGroup = file.startsWith('(') && file.endsWith(')')
            const nextBaseRoute = isRouteGroup ? baseRoute : `${baseRoute}/${file}`
            routes.push(...getStaticRoutes(fullPath, nextBaseRoute))
        } else if (file.match(/^page\.(tsx|ts|jsx|js)$/)) {
            // Ignorar páginas com parâmetros dinâmicos de rota (ex: [slug]), 
            // pois estas devem ser resolvidas via banco/CMS de forma separada
            if (!baseRoute.includes('[') && !baseRoute.includes(']')) {
                routes.push(baseRoute === '' ? '/' : baseRoute)
            }
        }
    }

    return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
    // URL base do site vinda das variáveis de ambiente.
    // IMPORTANTE: Altere o fallback 'https://exemplo.com.br' para o domínio oficial do seu projeto caso não use .env
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://exemplo.com.br'
    
    // Caminho absoluto da pasta app do Next.js
    const appDirectory = path.join(process.cwd(), 'app')
    
    // Obtém automaticamente todas as páginas físicas estáticas
    const staticPaths = getStaticRoutes(appDirectory)
    
    // Mapeia os caminhos encontrados para o formato de Sitemap do Next.js
    const routes = staticPaths.map(routePath => ({
        url: `${baseUrl}${routePath === '/' ? '' : routePath}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: routePath === '/' ? 1.0 : 0.8,
    }))

    // Adiciona as rotas estáticas de cada segmento atendido
    const segmentos = [
      'agencia-de-marketing',
      'agencia-de-live-marketing',
      'agencia-de-publicidade',
      'agencia-de-conteudo-digital',
      'agencia-de-ativacao-de-marca',
      'agencia-de-trade-marketing',
      'organizador-de-feiras-e-congressos',
      'organizador-de-festivais-e-shows'
    ];

    const segmentoRoutes = segmentos.map(slug => ({
        url: `${baseUrl}/segmentos/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...segmentoRoutes];
}