'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type SobreContextProps = {
  isOpen: boolean | null;
  setIsOpen: Dispatch<SetStateAction<boolean | null>>;
};

export const CardContext = createContext<SobreContextProps | null>(null);

export function CardProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  return (
    <CardContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CardContext.Provider>
  );
}
