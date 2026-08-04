import { Resultss } from '@/types/types';

const agora = Math.floor(Date.now() / 1000);

// API IGDB

// jogo em destaque

export async function getJogoDestacado() {
  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.CLIENT_ID!,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: 'fields name, id, slug, summary, rating,genres.name, total_rating_count, cover.image_id; where rating != null & cover != null & summary != null & total_rating_count > 500 & rating > 90; sort total_rating_count desc; limit 1;',
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar jogo.');
  }

  const data = await response.json();
  return data[0] as Resultss;
}

//pagina do jogo

export async function getJogosSlug(slug: string) {
  const response = await fetch(`https://api.igdb.com/v4/games`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.CLIENT_ID!,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: `fields name, first_release_date, id, slug, summary, screenshots.image_id, rating,genres.name, involved_companies.company.name, total_rating_count, cover.image_id; where slug = "${slug}"; limit 1;`,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`IGDB (${response.status}): ${error}`);
  }

  const data = await response.json();
  return data[0] as Resultss;
}

// pegar lançamentos

export async function Lancamentos() {
  const response = await fetch(`https://api.igdb.com/v4/games`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.CLIENT_ID!,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: `fields name, first_release_date, id, slug, summary, screenshots.image_id, rating,genres.name, involved_companies.company.name, total_rating_count, cover.image_id; where cover != null & rating != null & first_release_date <= ${agora}; sort first_release_date desc; limit 4;`,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`IGDB (${response.status}): ${error}`);
  }

  const data = await response.json();
  return data as Resultss[];
}

export async function EmAlta() {
  const response = await fetch(`https://api.igdb.com/v4/games`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.CLIENT_ID!,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: `fields name, first_release_date, id, slug, summary, screenshots.image_id, rating,genres.name, involved_companies.company.name, total_rating_count, cover.image_id; where cover != null & rating != null & total_rating_count > 50; sort rating desc; limit 4;`,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`IGDB (${response.status}): ${error}`);
  }

  const data = await response.json();
  return data as Resultss[];
}
export async function BemAval() {
  const response = await fetch(`https://api.igdb.com/v4/games`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.CLIENT_ID!,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: `fields name, first_release_date, id, slug, summary, screenshots.image_id, hypes, genres.name, involved_companies.company.name, cover.image_id; where cover != null & hypes != null & first_release_date > ${agora}; sort hypes desc; limit 4;`,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`IGDB (${response.status}): ${error}`);
  }

  const data = await response.json();
  return data as Resultss[];
}

//search

export async function Search(query: string) {
  if (!query.trim()) return [];

  const termoSanitizado = query.replace(/"/g, '');

  const response = await fetch(`https://api.igdb.com/v4/games`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.CLIENT_ID!,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: `search "${termoSanitizado}"; fields name, first_release_date, id, slug, summary, screenshots.image_id, rating, genres.name, involved_companies.company.name, total_rating_count, cover.image_id; where cover != null; limit 20;`,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`IGDB (${response.status}): ${error}`);
  }

  const data = await response.json();
  return data as Resultss[];
}
