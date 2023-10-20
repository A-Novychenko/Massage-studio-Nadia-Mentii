"use client";

import {MdBorderColor} from "react-icons/md";

import {usePriceModal} from "@/components/Providers/PriceModalProvider";

import styles from "./BuyBtn.module.scss";

export const BuyBtn = ({attributes}: {attributes: PriceData}) => {
  const {isOpen, toggleModal, setData} = usePriceModal();

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          toggleModal(true);
          setData(attributes);
        }}
      >
        <MdBorderColor />
        <br />
        <span>Записатись</span>
      </button>
    </div>
  );
};
