"use client";

import {useForm, SubmitHandler} from "react-hook-form";

import styles from "./PriceForm.module.scss";

interface IFormInput {
  service: string;
  duration: string;
  price: string;
}

export const AdminPriceForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    try {
      const res = await fetch(`${process.env.BASE_HOST}api/prices`, {
        // const res = await fetch("api/prices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      reset();
    } catch (error) {}
  };

  return (
    <div className={styles.add_slide_box}>
      <p className={styles.name_subsection}>Додати послугу</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Назва послуги
          </label>
          <input
            className={styles.input}
            {...register("service", {required: true})}
          />
          {errors.service && <p role="alert">{errors.service.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Тривалість
          </label>
          <input
            className={styles.input}
            {...register("duration", {required: true})}
          />
          {errors.duration && <p role="alert">{errors.duration.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label className={styles.input_label}>
            <span className={styles.requared}>*</span>Ціна
          </label>
          <input
            className={styles.input}
            {...register("price", {required: true})}
          />
          {errors.price && <p role="alert">{errors.price.message}</p>}
        </div>

        <button className={styles.submit_btn} type="submit">
          Зберегти
        </button>
      </form>
    </div>
  );
};
