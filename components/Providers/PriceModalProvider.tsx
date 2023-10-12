"use client";

import {ReactNode, createContext, useContext, useState} from "react";

const PriceModalContext = createContext({
  isOpen: false,
  toggleModal: (isOpen: boolean) => {},
  data: {price: "", service: "", duration: ""},
  setData: (data: PriceAttributes) => {},
});

export const usePriceModal = () => useContext(PriceModalContext);

export const PriceModalProvider = ({children}: {children: ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({price: "", service: "", duration: ""});

  const toggleModal = (flag: boolean) => {
    setIsOpen(flag);
    flag
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  };

  return (
    <PriceModalContext.Provider value={{isOpen, toggleModal, data, setData}}>
      {children}
    </PriceModalContext.Provider>
  );
};
