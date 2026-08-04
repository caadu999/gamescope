import { Genre } from '@/types/types';
import { geist } from '../../../public/fonts/fonts';

type TagsProps = {
  text: Genre;
};

export default function Tags({ text }: TagsProps) {
  const resumo = text.name.slice(0, 5) + '...';
  return (
    <li
      className={`flex w-fit items-center justify-center rounded-[3px] bg-[#E8E8E3] px-4 py-1 text-[18px] font-bold text-[#141414] ${geist.className}`}
    >
      {text.name.length > 10 ? resumo : text.name}
    </li>
  );
}
