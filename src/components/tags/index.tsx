import { Genre } from '@/types/types';
import { geist } from '../../../public/fonts/fonts';

type TagsProps = {
  text: Genre;
};

export default function Tags({ text }: TagsProps) {
  return (
    <li
      className={`flex w-fit flex-wrap items-center justify-center rounded-[3px] bg-[#E8E8E3] px-4 py-1 text-[18px] font-bold text-[#141414] ${geist.className}`}
    >
      {text.name}
    </li>
  );
}
