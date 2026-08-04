import Card from '@/components/jogoCard';
import { BemAval, EmAlta, Lancamentos } from '@/lib/API/API';
import { FaMedal } from 'react-icons/fa6';
import { FaFireAlt, FaRocket } from 'react-icons/fa';
import Titulo from '@/components/titulo/titulo';

export const revalidate = 3600;

export default async function Categoria() {
  const [lancamentos, emAlta, bemAval] = await Promise.all([
    Lancamentos(),
    EmAlta(),
    BemAval(),
  ]);

  return (
    <div className="flex flex-col lg:w-[84%]">
      <div className="mb-[20px] flex flex-col">
        <Titulo icon={<FaRocket size={34} />} text="Em alta" link="em-alta" />
        <ul className="flex gap-[16px]">
          {emAlta.map((jogo) => (
            <Card key={jogo.id} jogo={jogo} />
          ))}
        </ul>
      </div>
      <div className="mb-[20px] flex flex-col">
        <Titulo
          icon={<FaMedal size={34} />}
          text="Mais hypados"
          link="melhores"
        />
        <ul className="flex gap-[16px]">
          {bemAval.map((jogo) => (
            <Card key={jogo.id} jogo={jogo} />
          ))}
        </ul>
      </div>
      <div className="mb-[32px] flex flex-col gap-[20px]">
        <Titulo
          icon={<FaFireAlt size={34} />}
          text="Lançamentos"
          link="lancamentos"
        />
        <ul className="flex gap-[16px]">
          {lancamentos.map((jogo) => (
            <Card key={jogo.id} jogo={jogo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
