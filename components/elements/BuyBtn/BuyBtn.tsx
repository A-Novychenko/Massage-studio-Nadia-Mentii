"use client";

import {MdBorderColor} from "react-icons/md";

import styles from "./BuyBtn.module.scss";

export const BuyBtn = () => {
  return (
    <button type="button" className={styles.button}>
      <MdBorderColor />
      <br />
      <span>Записатись</span>
    </button>
  );
};
