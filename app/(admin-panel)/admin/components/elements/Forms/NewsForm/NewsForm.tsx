"use client";

import {useForm, SubmitHandler} from "react-hook-form";

import {AdminUploadImg} from "../../UploadImg/UploadImg";
import {useState} from "react";

import styles from "./NewsForm.module.scss";

interface IFormInput {
  title: string;
  imgLink: string;
  imgLargeLink: string;
  shortDescription: string;
  longDescription: string;
}

export const AdminNewsForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<IFormInput>();

  const [imgLink, setImgLink] = useState("");
  const [imgLargeLink, setImgLargeLink] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    try {
      const res = await fetch("api/news-posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      reset();
      setImgLink("");
      setImgLargeLink("");
    } catch (error) {}
  };

  return (
    <div className={styles.add_slide_box}>
      <p className={styles.name_subsection}>Додати слайд</p>
      <div>
        <p>Маленьке зображення</p>
        <AdminUploadImg setImgLink={setImgLink} />
      </div>
      <div>
        <p>Велике зображення</p>
        <AdminUploadImg setImgLink={setImgLargeLink} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Заголовок
          </label>
          <input
            className={styles.input}
            {...register("title", {required: true})}
          />
          {errors.title && <p role="alert">{errors.title.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Короткий опис
          </label>
          <input
            className={styles.input}
            {...register("shortDescription", {required: true})}
          />
          {errors.shortDescription && (
            <p role="alert">{errors.shortDescription.message}</p>
          )}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Детальний опис
          </label>
          <input
            className={styles.input}
            {...register("longDescription", {required: true})}
          />
          {errors.longDescription && (
            <p role="alert">{errors.longDescription.message}</p>
          )}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Посилання на маленьке
            зображення для списку новин (заповнюється автоматично при успішно
            завантаженому зображенні після натискання згенерувати посилання)
          </label>
          <input
            className={styles.input}
            // style={{backgroundColor: "#b4b4b4", outline: "transparent"}}
            value={imgLink}
            readOnly
            {...register("imgLink", {required: true})}
          />
          {errors.imgLink && <p role="alert">{errors.imgLink.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Посилання на велике
            зображення для сторінки цього поста (заповнюється автоматично при
            успішно завантаженому зображенні після натискання згенерувати
            посилання)
          </label>
          <input
            className={styles.input}
            // style={{backgroundColor: "#b4b4b4", outline: "transparent"}}
            value={imgLargeLink}
            readOnly
            {...register("imgLargeLink", {required: true})}
          />
          {errors.imgLargeLink && (
            <p role="alert">{errors.imgLargeLink.message}</p>
          )}
        </div>

        <button className={styles.submit_btn} type="submit">
          Зберегти
        </button>
      </form>
    </div>
  );
};
