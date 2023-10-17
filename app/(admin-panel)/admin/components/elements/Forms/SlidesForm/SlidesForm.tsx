"use client";

import {useForm, SubmitHandler} from "react-hook-form";

import styles from "./SlidesForm.module.scss";
import {AdminUploadImg} from "../../UploadImg/UploadImg";
import {useState} from "react";

interface IFormInput {
  title: string;
  imgLink: string;
}

export const AdminSlidesForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<IFormInput>();

  const [imgLink, setImgLink] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    try {
      const res = await fetch("api/slides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      reset();
      setImgLink("");
    } catch (error) {}
  };

  return (
    <>
      <AdminUploadImg setImgLink={setImgLink} />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
        <div className={styles.input_container}>
          <label className={styles.input_label}>Заголовок</label>
          <input
            className={styles.input}
            {...register("title", {required: true})}
          />
          {errors.title && <p role="alert">{errors.title.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>Посилання на зображення</label>
          <input
            value={imgLink}
            className={styles.input}
            {...register("imgLink", {required: true})}
          />
          {errors.imgLink && <p role="alert">{errors.imgLink.message}</p>}
        </div>

        <button className={styles.submit_btn} type="submit">
          Зберегти
        </button>
      </form>
    </>
  );
};
