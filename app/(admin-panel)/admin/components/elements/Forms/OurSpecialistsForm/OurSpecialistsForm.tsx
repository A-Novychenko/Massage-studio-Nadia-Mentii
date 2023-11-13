"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { AdminUploadImg } from "../../UploadImg/UploadImg";
import { useState } from "react";

import styles from "./OurSpecialistsForm.module.scss";

interface IFormInput {
  name: string;
  summary: string;
  info: string;
  photoLink: string;
  сertificateLink: string;
}

export const AdminOurSpecialistsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const [photoLink, setPhotoLink] = useState("");
  const [сertificateLink, setСertificateLink] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    try {
      // const res = await fetch(`${process.env.BASE_HOST}/api/specialists`, {
      const res = await fetch(`api/specialists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      reset();
      setPhotoLink("");
      setСertificateLink("");
    } catch (error) {}
  };

  return (
    <div className={styles.add_slide_box}>
      <p className={styles.name_subsection}>Додати слайд</p>
      <div>
        <p>Фото</p>
        <AdminUploadImg setImgLink={setPhotoLink} />
      </div>
      <div>
        <p>Сертифікат</p>
        <AdminUploadImg setImgLink={setСertificateLink} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>ПІБ
          </label>
          <input
            className={styles.input}
            {...register("name", { required: true })}
          />
          {errors.name && <p role="alert">{errors.name.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Резюме
          </label>
          <input
            className={styles.input}
            {...register("summary", { required: true })}
          />
          {errors.summary && <p role="alert">{errors.summary.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>не обовязково</span>Додаткова
            інформація
          </label>
          <input className={styles.input} {...register("info")} />
          {errors.info && <p role="alert">{errors.info.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Посилання на фото
            (заповнюється автоматично при успішно завантаженому зображенні після
            натискання згенерувати посилання)
          </label>
          <input
            className={styles.input}
            // style={{backgroundColor: "#b4b4b4", outline: "transparent"}}
            value={photoLink}
            readOnly
            {...register("photoLink", { required: true })}
          />
          {errors.photoLink && <p role="alert">{errors.photoLink.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Посилання на сертифікат
            (заповнюється автоматично при успішно завантаженому зображенні після
            натискання згенерувати посилання)
          </label>
          <input
            className={styles.input}
            // style={{backgroundColor: "#b4b4b4", outline: "transparent"}}
            value={сertificateLink}
            readOnly
            {...register("сertificateLink", { required: true })}
          />
          {errors.сertificateLink && (
            <p role="alert">{errors.сertificateLink.message}</p>
          )}
        </div>

        <button className={styles.submit_btn} type="submit">
          Зберегти
        </button>
      </form>
    </div>
  );
};
