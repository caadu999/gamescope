# GAMESCOPE

> Projeto em desenvolvimento.

Uma plataforma para descoberta e exploração de jogos digitais desenvolvida com Next.js e TypeScript.

## Funcionalidades atuais

- Listagem de jogos
- Página de detalhes
- Screenshots dos jogos
- Exibição de gêneros

## Próximas funcionalidades

- Busca de jogos
- Sistema de favoritos
- Filtros avançados
- Melhorias na pagina de detalhe

## Tecnologias

- Next.js
- React
- TypeScript
- Sass Modules
- Axios
- RAWG API

## Instalação

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Vercel

`https://gamescope-zeta.vercel.app/`

## Otimização de Performance

Foi realizada uma análise de performance com o Google PageSpeed Insights, que apontou três pontos de melhoria. Abaixo estão descritas as ações tomadas.

### 1. Otimização de Imagens

As imagens do projeto são fornecidas por uma API de terceiros (RAWG). O projeto já utilizava o componente `<Image>` do Next.js, que aplica automaticamente:

- Lazy loading
- Conversão para os formatos WebP/AVIF

Nenhuma alteração foi necessária — a implementação já estava correta.

### 2. Latência do Servidor (TTFB de 3.743ms)

O PageSpeed apontou um Time to First Byte muito acima do recomendado (< 600ms). Duas correções foram aplicadas:

- **Região do servidor:** alterada de `iad1` (Virginia, EUA) para `gru1` (São Paulo, Brasil) nas configurações da Vercel, reduzindo a distância física entre servidor e usuários.
- **Cache das requisições:** adicionado `export const revalidate = 3600` nas páginas que consomem a API da RAWG, evitando uma nova chamada à API a cada acesso.

```js
// app/page.tsx
export const revalidate = 3600; // cache de 1 hora
```

### 3. Atraso na Renderização do LCP (560ms)

O elemento de maior conteúdo visível (LCP) era o título principal (`h1`), que usa uma fonte local customizada. A fonte bloqueava a renderização do texto até ser totalmente carregada.

**Correção:** adicionado `display: 'swap'` na importação da fonte via `next/font/local`.
Com isso, o browser exibe o texto imediatamente com uma fonte fallback do sistema, substituindo pela fonte customizada assim que ela carrega.

### Resultado esperado

Essas três melhorias reduzem o LCP e o TTFB medidos pelo PageSpeed, otimizando o carregamento inicial da página.
