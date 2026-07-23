import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

type Props = {
  icon: React.ReactNode;
  text: string;
  className?: string;
  link: string;
};

export default function Titulo({ icon, text, className, link }: Props) {
  return (
    <div
      className={`h-22 flex w-full items-center justify-between rounded-md bg-[pink] p-4 md:mt-4 md:w-[87vw] xl:w-[1200px] ${className}`}
    >
      <Link className="flex w-full justify-between" href={`/jogos/${link}`}>
        <div>{icon}</div>
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          {text} <IoIosArrowForward size={20} />
        </h1>

        <div className="hidden">
          <span>Ver todos</span>
        </div>
      </Link>
    </div>
  );
}
