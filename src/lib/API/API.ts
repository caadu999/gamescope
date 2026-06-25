import { Data, Results, ScreenshotData } from '@/types/types';
import { APIURL } from './axios';
import { Detalhes } from '@/types/types';

export async function getJogos() {
  const res = await APIURL.get<Data>('/games');
  return res.data.results;
}

export async function getLancamentos() {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&ordering=released&page_size=20`,
  );

  if (!res.ok) throw new Error('Falha ao buscar lançamentos');

  const data = await res.json();
  return data.results as Results[];
}
export async function getJogosEmAlta() {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&ordering=-rating&page_size=20`,
  );

  if (!res.ok) throw new Error('Falha ao buscar Jogos em Alta');

  const data = await res.json();
  return data.results as Results[];
}
export async function getMaisBemAvaliados() {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&ordering=-metacritic&page_size=20`,
  );

  if (!res.ok) throw new Error('Falha ao buscar Jogos mais bem avaliados');

  const data = await res.json();
  return data.results as Results[];
}

export async function getJogoDestaque() {
  const res = await APIURL.get<Data>('/games', {
    params: {
      ordering: '-metacritic',
    },
  });

  return res.data.results[0];
}

export async function getDetalhes(slug: string) {
  const res = await APIURL.get<Detalhes>(`/games/${slug}`);
  return res.data;
}

export async function getJogoSlug(slug: string) {
  const res = await APIURL.get<Detalhes>(`games/${slug}`);
  return res.data;
}

export async function getScreenshots(slug: string) {
  const res = await APIURL.get<ScreenshotData>(`/games/${slug}/screenshots`);
  return res.data.results;
}

export async function Search(query: string) {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${encodeURIComponent(query)}&page_size=9`,
  );

  if (!res.ok) throw new Error('Falha ao buscar Jogos');

  const data = await res.json();
  return data.results as Results[];
}
