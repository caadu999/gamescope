import { Data } from '@/types/types';
import { APIURL } from './axios';
import { Detalhes } from '@/types/types';

export async function getJogos() {
  const res = await APIURL.get<Data>('/games');
  return res.data.results;
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
