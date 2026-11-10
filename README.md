# GAMESCOPE

> Projeto em desenvolvimento.

O Gamescope é uma plataforma para descoberta e exploração de jogos digitais. A aplicação apresenta jogos, detalhes, gêneros, avaliações, imagens e lançamentos em uma interface desenvolvida com Next.js e TypeScript.

## Funcionalidades atuais

- Listagem de jogos em destaque, lançamentos e jogos em alta
- Busca de jogos
- Página de detalhes por jogo
- Screenshots e capa dos jogos
- Exibição de gêneros, avaliações e empresas envolvidas
- Lista de desejos salva localmente no navegador

## API utilizada

Os dados dos jogos são obtidos por meio da [IGDB API](https://api.igdb.com/), utilizando o endpoint `https://api.igdb.com/v4/games`.

As credenciais da IGDB devem ser configuradas em variáveis de ambiente. Elas não devem ser incluídas diretamente no código ou versionadas:

```env
CLIENT_ID=seu_client_id
ACCESS_TOKEN=seu_access_token
```

Consulte a documentação da [IGDB](https://api-docs.igdb.com/) para criar e gerenciar as credenciais.

## Tecnologias

- Next.js
- React
- TypeScript
- Sass Modules
- Axios
- IGDB API

## Instalação

Entre na pasta do frontend e instale as dependências:

```bash
cd frontend
npm install
```

Crie o arquivo `frontend/.env.local` com as credenciais da IGDB e inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

Na pasta `frontend`, os principais scripts são:

```bash
npm run dev          # inicia o ambiente de desenvolvimento
npm run build        # gera a versão de produção
npm run start        # inicia a aplicação em produção
npm run lint         # verifica problemas de lint
npm run format:check # verifica a formatação dos arquivos
```

## Próximas funcionalidades

- Sistema de login e cadastro de usuários
- Persistência da lista de desejos por usuário
- Banco de dados para armazenar usuários, favoritos e preferências
- Filtros avançados
- Melhorias na página de detalhes

Atualmente, a lista de desejos é armazenada apenas no `localStorage` do navegador. Futuramente, o login permitirá identificar cada usuário e o banco de dados manterá seus dados disponíveis entre diferentes dispositivos e sessões.

## Deploy

A aplicação está disponível em:

[https://gamescope-zeta.vercel.app/](https://gamescope-zeta.vercel.app/)

Em ambientes de produção, as variáveis `CLIENT_ID` e `ACCESS_TOKEN` devem ser configuradas também nas variáveis de ambiente da plataforma de deploy.

## Otimização de performance

Foi realizada uma análise de performance com o Google PageSpeed Insights. As imagens são exibidas com o componente `<Image>` do Next.js, que oferece lazy loading e otimização automática para formatos modernos, como WebP e AVIF.

As páginas que consomem a IGDB utilizam revalidação periódica para reduzir chamadas repetidas à API e melhorar o tempo de resposta:

```ts
export const revalidate = 3600; // cache de 1 hora
```

Também foi configurado `display: 'swap'` na fonte local utilizada pela aplicação. Assim, o texto é exibido imediatamente com uma fonte de fallback enquanto a fonte personalizada é carregada.
