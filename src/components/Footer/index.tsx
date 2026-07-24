'use client';

import Accordion from './accrodion';
import { faqs } from './data';

import { anton } from '../../../public/fonts/fonts';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <>
      <div
        className="relative flex h-[800px] w-full flex-col items-center overflow-hidden bg-[#45444F] md:flex-row"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div className="fixed bottom-0 flex h-[800px] w-full justify-between p-8 xl:items-center xl:justify-center xl:gap-60">
          <h1
            className={`${anton.className} text-[100px] font-bold leading-[120px] text-[#CACACA]`}
          >
            FAQ
          </h1>
          <div className="items-left flex flex-col justify-center gap-4">
            {faqs.map((item, i) => (
              <motion.div key={item.id}>
                <Accordion item={item} />
              </motion.div>
            ))}

            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
