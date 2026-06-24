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
  image: string;
};
