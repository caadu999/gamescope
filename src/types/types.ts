export type Data = {
  count: number;
  results: Results[];
};

export type Results = {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  description_raw: string;
  genres: Genre[]
};

export type Detalhes = {
  id: number;
  description_raw: string;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  genres: Genre[];
  publishers: Publisher[];
};

export type Genre = {
  id: number;
  name: string;
};

export type Publisher = {
  name: string;
  id: number;
};
