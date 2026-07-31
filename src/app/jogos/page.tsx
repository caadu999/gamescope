import TituloHome from '@/components/tituloHome';
import Categoria from './categoria';
import SearchInput from '@/components/searchInput';

export default function Jogos() {
  return (
    <div className="flex w-[99vw] flex-col items-center justify-center">
      <div className="mb-10 mt-10 flex flex-col items-center justify-between pl-4 lg:mb-10 lg:mt-16 lg:w-[80%] xl:w-[86%] xl:max-w-[1590px]">
        <TituloHome text="Catálogo de Jogos" />
        <div className="flex">
          <SearchInput />
        </div>
      </div>
      <Categoria />
    </div>
  );
}
