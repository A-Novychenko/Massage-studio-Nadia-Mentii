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
      // const res = await fetch(`${process.env.BASE_HOST}api/slides`, {
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
    <div className={styles.add_slide_box}>
      <p className={styles.name_subsection}>Додати слайд</p>
      <AdminUploadImg setImgLink={setImgLink} />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Посилання на зображення
            (заповнюється автоматично при успішно завантаженому зображенні після
            натискання згенерувати посилання)
          </label>
          <input
            className={styles.input}
            style={{backgroundColor: "#b4b4b4", outline: "transparent"}}
            value={imgLink}
            readOnly
            {...register("imgLink", {required: true})}
          />
          {errors.imgLink && <p role="alert">{errors.imgLink.message}</p>}
        </div>

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

        <button className={styles.submit_btn} type="submit">
          Зберегти
        </button>
      </form>
    </div>
  );
};
