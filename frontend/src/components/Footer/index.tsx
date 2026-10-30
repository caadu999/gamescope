'use client';

import Accordion from './accrodion';
import { faqs } from './data';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [open, setOpen] = useState<number | null>(null);

  function handleToggle(id: number) {
    setOpen(open === id ? null : id);
  }

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        transition={{
          duration: 1,
        }}
        className="relative flex h-[800px] w-full flex-col items-center overflow-hidden bg-[#181715] md:flex-row"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div className="fixed bottom-0 flex h-[800px] w-full flex-col justify-between px-6 py-14 md:flex-row">
          <div className="hidden h-fit items-center gap-2 md:flex">
            <div className="h-4 w-4 rounded-full bg-gray-500"></div>
            <p className="text-lg font-[600]">FAQs</p>
          </div>
          <h1 className="absolute bottom-0 hidden font-[700] md:flex lg:mb-8 lg:w-[30%] lg:text-[48px] lg:leading-[70px] xl:w-[40%] xl:text-[56px]">
            Aqui está tudo que você precisa saber sobre nós!
          </h1>
          <div className="flex flex-col pt-8">
            {faqs.map((item) => (
              <div key={item.id}>
                <Accordion open={open} onToggle={handleToggle} item={item} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
