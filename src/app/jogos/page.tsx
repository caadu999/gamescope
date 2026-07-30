import { anton, geist, suisse } from '../../../public/fonts/fonts';
import Destaque from './destaque';
import Categoria from './categoria';

export default function Jogos() {
  return (
    <div className="flex w-[99vw] flex-col items-center justify-center">
      <div className="mb-10 mt-10 flex items-center justify-between overflow-y-auto pl-4 lg:mb-10 lg:mt-16 lg:w-[90%] xl:w-[90%] xl:max-w-[1590px]">
        <div className="flex flex-col gap-2 lg:w-80">
          <span
            className={`flex items-center gap-4 lg:text-sm ${suisse.className}`}
          >
            {' '}
            <div className="h-[12px] w-[12px] rounded-full bg-gray-500">
              {' '}
            </div>{' '}
            01 _
          </span>
          <h1
            className={`text-[70px] font-bold leading-[90px] text-[#E8E8E3] lg:text-[80px] lg:leading-[90px] ${anton.className}`}
          >
            CATÁLOGO <br /> DE JOGOS
          </h1>
          <p
            className={`w-[80%] font-[600] text-[#938F8a] lg:w-full lg:text-lg ${geist.className}`}
          >
            Explore nosso catálogo com milhares de jogos. Encontre sua próxima
            aventura
          </p>
        </div>
        <Destaque />
      </div>
      <Categoria />
    </div>
  );
}
