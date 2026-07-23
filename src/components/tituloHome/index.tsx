import { oldschoolGrotesk } from '@/lib/fonts';

type Props = {
  text: string;
};

export default function TituloHome({ text }: Props) {
  return (
    <h1
      className={`mb-8 mt-8 w-96 select-none text-center text-6xl font-bold md:w-4/5 md:text-7xl lg:w-[80%] lg:text-9xl lg:leading-[110px] xl:w-[1200px] ${oldschoolGrotesk.className}`}
    >
      {text}
    </h1>
  );
}
