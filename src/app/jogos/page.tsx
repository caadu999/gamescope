import Categoria from './categoria';
import SearchInput from '@/components/searchInput';
import Intro from '../_intro';
import TituloPaginas from '@/components/tituloPagina';

export default function Jogos() {
  return (
    <>
      <Intro />
      <div className="flex w-[99vw] flex-col items-center justify-center">
        <div className="mb-10 mt-10 flex flex-col items-center justify-between pl-4 lg:mb-10 lg:mt-16 lg:w-[80%] xl:w-[86%] xl:max-w-[1590px]">
          <TituloPaginas text={'Catálogo de jogos'} />
          <div className="flex">
            <SearchInput />
          </div>
        </div>
        <Categoria />
      </div>
    </>
  );
}
