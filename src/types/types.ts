export type Data = {
  count: number;
  results: Results[];
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  description_raw: string;
  genres: Genre[];
};
export type Resultss = {
  id: number;
  name: string;
  slug: string;
  summary: string;
  rating: number;
  total_rating: number;
  first_release_date: number;
  cover: Cover;
  screenshots: Screenshot[];
  genres: Genre[];
  platforms: Platform[];
  involved_companies: InvolvedCompany[];
};

export type Company = {
  id: number;
  name: string;
};

export type InvolvedCompany = {
  publisher: boolean;
  developer: boolean;
  company: Company;
};

export interface Cover {
  image_id: string;
}

export interface Platform {
  name: string;
}

export type Results = {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  description_raw: string;
  genres: Genre[];
};

export type Detalhes = {
  slug: string;
  id: number;
  description_raw: string;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  genres: Genre[];
  publishers: Publisher[];
  screenshot: Screenshot[];
};

export type Genre = {
  id: number;
  name: string;
};

export type Publisher = {
  name: string;
  id: number;
};

export type ScreenshotData = {
  count: number;
  results: Screenshot[];
};

export type Screenshot = {
  id: number;
  image_id: string;
};
