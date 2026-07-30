import { getJogoDestaque } from '@/lib/API/API';

import Image from 'next/image';

export default async function Destaque() {
  const jogoDestaque = await getJogoDestaque();

  return (
    <div className="relative overflow-hidden bg-blue-50 lg:h-[400px] lg:w-[700px] lg:rounded-lg">
      <Image
        src={jogoDestaque.background_image}
        alt={jogoDestaque.name}
        fill
        className="object-cover"
      />
    </div>
  );
}
