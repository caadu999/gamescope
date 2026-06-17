import Header from '@/components/header';
import { getJogoSlug } from '@/lib/API/API';
import Image from 'next/image';

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
      <Image
        src={detalhes.background_image}
        width={500}
        height={300}
        alt={detalhes.name}
      ></Image>

      <ul>
        {detalhes.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h1>{detalhes?.name}</h1>
      <p>{detalhes.rating ? detalhes.rating : "Esse jogo ainda não foi avaliado"}</p>
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
