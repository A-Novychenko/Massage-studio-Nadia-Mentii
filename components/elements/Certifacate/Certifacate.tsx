"use client";

import {usePriceModal} from "@/components/Providers/PriceModalProvider";
import styles from "./Certifacate.module.scss";
import Image from "next/image";

export const Certifacate = ({сertificateLink}: {сertificateLink: string}) => {
  const {isOpen, toggleModal, setData} = usePriceModal();
  console.log("isOpen", isOpen);

  return (
    <div className={styles.wrap}>
      <button type="button" onClick={() => toggleModal(true)}>
        Переглянути сертифікати
      </button>

      {isOpen && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <button type="button" onClick={() => toggleModal(false)}>
              X
            </button>
            <p>Тут буде слайдер з сертифікатами</p>
            <Image
              src={сertificateLink}
              alt="Сертифікат"
              width={1000}
              height={680}
            />
          </div>
        </div>
      )}
    </div>
  );
};
