"use client";

import {AiOutlineClose} from "react-icons/ai";
import {BuySessionForm} from "../../Form/BuySessionForm/BuySessionForm";
import {usePriceModal} from "@/components/Providers/PriceModalProvider";

import styles from "./PriceModal.module.scss";

export const PriceModal = () => {
  const {isOpen, toggleModal, data} = usePriceModal();

  return (
    <>
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleModal(false);
            }
          }}
        >
          <div className={styles.content_box}>
            <button
              className={styles.close_btn}
              onClick={() => {
                toggleModal(false);
              }}
            >
              <AiOutlineClose size={32} />
            </button>

            <div className={styles.order}>
              <p>{data?.service}</p>
              <p>{`Тривалість: ${data?.duration}`}</p>
              <p>{`Вартість: ${data?.price}`}</p>
            </div>
            <BuySessionForm serviceData={data} />
          </div>
        </div>
      )}
    </>
  );
};
