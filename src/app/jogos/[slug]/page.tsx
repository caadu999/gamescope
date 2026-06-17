import Header from '@/components/header';
import { getJogoSlug, getJogos } from '@/lib/API/API';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Detalhes({ params }: Props) {
  const { slug } = await params;
  const detalhes = await getJogoSlug(slug);
  console.log(detalhes);

  return (
    <div>
      <Header />
      <img src={detalhes.background_image} alt={detalhes.name} />

      <ul>
        {detalhes.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h1>{detalhes?.name}</h1>
      <p>{detalhes.rating}</p>
      <p>{detalhes.description_raw}</p>
      <ul>
        Publishers:
        {detalhes.publishers.map((publisher) => (
          <li key={publisher.id}>{publisher.name}</li>
        ))}
      </ul>
    </div>
  );
}
