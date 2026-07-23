import { GiConsoleController } from 'react-icons/gi';
import { FaKeyboard } from 'react-icons/fa';
import { MdVideogameAsset } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { oldschoolGrotesk } from '@/lib/fonts';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import TituloHome from '@/components/tituloHome';

import Link from 'next/link';

export default function Sobre() {
  return (
    <div className="min-h-[calc(100vh - 80px)] flex flex-col items-center p-4 text-[#fdf9f0]">
      <div className="flex flex-col items-center">
        <TituloHome text="Sobre o Gamescope"></TituloHome>

        <p className="mb-4 xl:mb-6 xl:w-[600px] xl:text-center xl:text-lg">
          Seu próximo jogo favorito está a um clique de distância.
        </p>
        <div className="mb-5 flex gap-2 border-b-[1px] border-solid border-[#434141] pb-2 xl:mb-0 xl:gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#fdc317]">
            <GiConsoleController size={34} color="#161616" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#7a78ff]">
            <FaKeyboard size={34} color="#161616" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#ff6d38]">
            <MdVideogameAsset size={34} color="#161616" />
          </div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#bdfb84]">
            <FaHeart size={34} color="#161616" />
          </div>
        </div>
      </div>
      <h2
        className={`mb-3 text-center text-3xl md:text-4xl xl:hidden ${oldschoolGrotesk.className}`}
      >
        O que estamos construindo
      </h2>
      <p className="text-[#dadada] xl:hidden xl:text-[22px]">
        Reunimos detalhes completos sobre milhares de títulos: sinopses, notas,
        plataformas disponíveis, datas de lançamento, gêneros, desenvolvedoras e
        muito mais. Tudo pensado para facilitar sua pesquisa e ajudar você a
        descobrir novos jogos ou relembrar clássicos.
      </p>
      <p className="mt-2 text-[#dadada] xl:hidden">
        Além disso, o Gamescope conta com um sistema de lista de desejos
        <span className="border-b-2 font-bold"> wishlist</span>, onde você pode
        salvar os jogos que mais chamaram sua atenção e acompanhar tudo o que
        ainda pretende jogar sem perder nenhum título de vista.
      </p>
      <Link
        href={'/jogos'}
        className="mt-6 flex w-full items-center justify-between rounded-[40px] bg-[#c7ff69] px-6 py-3 font-bold text-[#161616] transition-all duration-[300ms] ease-out hover:rounded-[22px] xl:hidden"
      >
        Explorar <FaArrowAltCircleRight size={28} />
      </Link>

      <div className="flex flex-col md:flex-row md:gap-2 xl:m-auto xl:mb-4 xl:w-[80%] xl:justify-center xl:gap-4">
        <div className="mt-6 flex w-full flex-col justify-center gap-2 rounded-lg border-[1px] border-solid border-[#434141] bg-[#1b1d22] p-4 xl:h-52">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#fdc317] xl:mb-2">
            <GiConsoleController size={34} color="#161616" />
          </div>
          <h3 className="text-[22px] font-bold">Para Gamers</h3>
          <p className="w-[60%] text-[16px] text-[#979494] md:w-[80%]">
            Construído por quem entende de jogos, cada detalhe do Gamescope
            pensa em você.
          </p>
        </div>
        <div className="mt-6 flex w-full flex-col justify-center gap-2 rounded-lg border-[1px] border-solid border-[#434141] bg-[#1b1d22] p-4 xl:h-52">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#7a78ff] xl:mb-2">
            <IoExtensionPuzzle size={34} color="#161616" />
          </div>
          <h3 className="text-[22px] font-bold">Organização</h3>
          <p className="w-[60%] text-[16px] text-[#979494] md:w-[80%]">
            Salve os jogos que você quer jogar e nunca mais perca um lançamento
            de vista.
          </p>
        </div>
        <div className="mt-6 flex w-full flex-col justify-center gap-2 rounded-lg border-[1px] border-solid border-[#434141] bg-[#1b1d22] p-4 xl:h-52">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#bdfb84] xl:mb-2">
            <FaCheck size={30} color="#161616" />
          </div>
          <h3 className="text-[22px] font-bold">Informações</h3>
          <p className="w-[60%] text-[16px] text-[#979494] md:w-[80%]">
            Notas, plataformas, gêneros e datas de lançamento. tudo em um só
            lugar.
          </p>
        </div>
      </div>
      <div className="hidden w-full flex-col justify-center gap-2 rounded-lg border-[1px] border-solid border-[#434141] bg-[#1b1d22] p-4 xl:m-auto xl:flex xl:h-52 xl:w-[80%]">
        <h2 className={`pl-4 text-5xl ${oldschoolGrotesk.className}`}>
          Seu mundo de jogos, <br /> organizado{' '}
          <span className="text-[#bdfb84]"> do seu jeito.</span>
        </h2>
      </div>
    </div>
  );
}
