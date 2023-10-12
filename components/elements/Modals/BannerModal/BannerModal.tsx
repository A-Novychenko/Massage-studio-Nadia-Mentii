"use client";

import {AiOutlineClose} from "react-icons/ai";

import {TgForm} from "../../Form/TgForm/TgForm";

import styles from "./BannerModal.module.scss";

export const BannerModal = ({isOpen, closeModal}: BunnerModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className={styles.container}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <AiOutlineClose color="#fff" size={20} />
            </button>
            <div className={styles.contentBox}>
              <TgForm closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
