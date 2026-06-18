# DESIGN_SYSTEM.md - Diretrizes do Design System do Cliente

Este documento foi gerado automaticamente pelo Assistente de Setup para servir como especificação visual da marca e estilo do cliente para desenvolvedores e agentes.

## 0. Escopo
- **Superfícies cobertas**: Componentes do site Next.js, botões, cartões, gradientes e blocos de conteúdo da landing page.
- **Fora do escopo**: Painéis administrativos de terceiros.

## 1. Princípios de Design
* **Consistência em Primeiro Lugar**: Nunca insira cores hexadecimais no código TSX de forma rígida (ex: `bg-[#ff0000]`). Use sempre as classes do Tailwind baseadas nos tokens (ex: `bg-primary`).
* **Hierarquia e Contraste**: Garantir que as cores de texto (`text-foreground`) possuam contraste WCAG AA sobre o fundo (`bg-background`).
* **Tipografia Leve e Elegante**: Todos os botões, links e menus de navegação devem **sempre** utilizar o peso de fonte regular (`font-normal`), promovendo uma estética limpa, moderna e sofisticada.
* **Estilo Limpo e Espaçoso**: Margens generosas (`gap-8`, `py-20`) e cantos arredondados de forma harmoniosa.
* **Sem Efeitos de Blob**: Nunca crie ou utilize efeitos de fundo do tipo "blob" (formas orgânicas coloridas desfocadas e animadas no fundo), pois afetam a performance do site e a clareza visual dos textos.

## 2. Plataformas & Restrições do Projeto
- **Tipo de App**: SPA / Landing Page Corporativa (Next.js App Router).
- **Frameworks**: React 19 + Next.js 16 + Tailwind CSS v4.
- **Temas**: Suporte a personalização de cores do cliente via variáveis CSS no `globals.css`.

---

## 3. Tokens de Design (Cores e Fontes Atuais do Cliente)

### 3.1 Fonte de Verdade dos Tokens
- **Configurações em JSON**: [`app/config/theme.json`](file:///c:/Users/Diogo/Documents/AI/modelo/app/config/theme.json)
- **Folha de Estilos**: [`app/globals.css`](file:///c:/Users/Diogo/Documents/AI/modelo/app/globals.css)

### 3.2 Cores de Marca

#### Cor Primária: `#29ffdb` (Escala de tons ancorada no 500)

| Classe Tailwind | Hex | Uso sugerido |
|---|---|---|
| `bg-primary-50` / `text-primary-50` | `#f0fffc` | Fundos levíssimos, hover states sutis |
| `bg-primary-100` | `#d8fff9` | Fills de badges, highlights |
| `bg-primary-200` | `#b4fff2` | Estados desabilitados com tom de marca |
| `bg-primary-300` | `#89ffeb` | Ícones secundários, bordas suaves |
| `bg-primary-400` | `#54ffe2` | Hover de botão primário |
| **`bg-primary-500`** | **`#29ffdb`** | **COR PRINCIPAL — botões, links, destaques** |
| `bg-primary-600` | `#23d9ba` | Active/pressed de botão primário |
| `bg-primary-700` | `#1db399` | Texto de erro em fundos claros |
| `bg-primary-800` | `#158572` | Texto sobre fundo primary-100/200 |
| `bg-primary-900` | `#0e594d` | Texto de alta ênfase em contexto de marca |

#### Cor Secundária: `#548356` (Escala de tons ancorada no 500)

| Classe Tailwind | Hex | Uso sugerido |
|---|---|---|
| `bg-secondary-50` / `text-secondary-50` | `#f3f6f3` | Fundos levíssimos, hover states sutis |
| `bg-secondary-100` | `#e0e9e1` | Fills de badges, highlights |
| `bg-secondary-200` | `#c3d4c4` | Estados desabilitados com tom de marca |
| `bg-secondary-300` | `#a1bba2` | Ícones secundários, bordas suaves |
| `bg-secondary-400` | `#769c78` | Hover de botão secundário |
| **`bg-secondary-500`** | **`#548356`** | **COR SECUNDÁRIA — destaques, badges, estados** |
| `bg-secondary-600` | `#476f49` | Active/pressed de botão secundário |
| `bg-secondary-700` | `#3b5c3c` | Texto em fundos claros |
| `bg-secondary-800` | `#2c442d` | Texto sobre fundo secondary-100/200 |
| `bg-secondary-900` | `#1d2e1e` | Texto de alta ênfase em contexto secundário |

#### Outras Cores
- **Foreground (Texto)**: `#f0fbe9` (Uso com Tailwind: `text-foreground`)
- **Background (Fundo)**: `#3d5561` (Uso com Tailwind: `bg-background`)

### 3.3 Tipografia (Carregada via Google Fonts no layout.tsx)
- **Títulos (H1, H2, H3, etc.)**: Font Family `"Golos"` (Mapeada para a classe Tailwind `font-display`)
- **Corpo e Parágrafos**: Font Family `"Inter"` (Mapeada para a classe Tailwind `font-sans`)
- **Peso de Fontes (Regra Estrita)**: Links, menus de navegação e botões usam sempre o peso **regular** (`font-normal` / 400). Nunca devem usar negrito (bold ou semibold).

---

## 4. Diretrizes de Espaçamentos (Grid Base de 8px)

Todos os espaçamentos no globals.css e no design system do site utilizam a escala base de 8px:

| Classe Tailwind | px | Uso sugerido |
|---|---|---|
| `gap-1` / `p-1` | 8px | Margem interna mínima, gap ícone-texto |
| `gap-2` / `p-2` | 16px | Distância entre elementos pequenos, padding de badges |
| `gap-3` / `p-3` | 24px | Padding de cartões (cards), gap entre inputs |
| `gap-4` / `p-4` | 32px | Distância entre cards grandes, padding mobile |
| `gap-6` / `p-6` | 48px | Altura de cabeçalhos de seções, padding de navbar |
| `py-8` | 64px | Espaçamento vertical padrão de seções (mobile) |
| `py-10` | 80px | Espaçamento vertical padrão de seções (tablet) |
| `py-13` | 104px | Espaçamento vertical padrão de seções (desktop/hero) |

---

## 5. Botões & Links (Classes e Modificadores)

### 5.1 Classes de Botões
* **Primário**: `.btn-primary` (Fundo primário, texto de alto contraste dinâmico).
* **Secundário**: `.btn-secondary` (Sem fundo, contorno de 1.5px na cor primária, texto primário).
* **Ghost**: `.btn-ghost` (Sem fundo, contorno sutil neutro, texto foreground).
* **Dark**: `.btn-dark` (Fundo foreground, texto background).

*Todos os botões usam a classe utilitária `rounded-md` (cantos de 8px) e peso de fonte `font-normal` (400) obrigatoriamente.*

### 5.2 Modificadores de Tamanho
* **Pequeno (32px)**: `.btn-sm`
* **Médio (40px)**: `.btn-md`
* **Grande (48px)**: `.btn-lg`

### 5.3 Classes de Links
* **Navegação**: `.link-nav` (Tom cinza/texto padrão, muda para primário no hover).
* **Navegação Ativo**: `.link-nav-active` (Cor primária).
* **CTA Textual**: `.link-cta` (Formatado exatamente igual a `.link-nav`, conforme convenção do layout).

### 5.4 Classes e Padrão de Ícones
* **Ícones de Contato/Informação**: `.contact-icon` (Aplica a cor primária `var(--color-primary-500)`).
* **Regra de Consistência**: Todos os ícones em blocos informativos de contato (como WhatsApp, E-mail, Telefone, Endereço) devem utilizar obrigatoriamente a classe `.contact-icon` (ou o utilitário `text-primary`) para garantir a consistência cromática, sendo vedado o uso de cores mistas ou diferentes (como usar `text-secondary` para e-mail e `text-primary` para WhatsApp).

---

## 6. Responsividade & Breakpoints (Mobile-First)

| Prefixo Tailwind | Min-width | Dispositivo Alvo |
|---|---|---|
| *(sem prefixo)* | 0px | Dispositivos mobile padrão |
| `md:` | 768px | Tablets em modo retrato |
| `lg:` | 1024px | Laptops e tablets horizontais |
| `xl:` | 1280px | Monitores de computador comuns |
| `2xl:` | 1440px | Monitores wide de alta resolução |

### Layouts Padrão Recomendados:
* **Container**: `<div className="container-site">` (Alinhado ao centro com espaçamento dinâmico).
* **Heading H1**: `text-5xl md:text-7xl lg:text-9xl`
* **Heading H2**: `text-3xl md:text-5xl lg:text-7xl`
* **Heading H3**: `text-2xl md:text-4xl lg:text-5xl`

---

## 7. Diretrizes de Acessibilidade
- **Focos Visíveis**: Qualquer botão ou link interativo deve possuir estados focáveis claros (ex: `focus:ring-2 focus:ring-primary`).
- **Navegação via Teclado**: Todo o site deve ser navegável via tecla TAB.
