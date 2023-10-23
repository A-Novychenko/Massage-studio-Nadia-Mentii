"use client";

import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {AiOutlineClose} from "react-icons/ai";

import styles from "./AddComment.module.scss";

interface IFormInput {
  name: string;
  comment: string;
  grade: string;
}

export const AddComment = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<IFormInput>();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    try {
      const res = await fetch(`api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({...data, date: Date.now().toString()}),
      });

      reset();
    } catch (error) {}
  };

  return (
    <>
      {!isOpen ? (
        <button
          className={styles.open_btn}
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Додати відгук
        </button>
      ) : (
        <div className={styles.add_slide_box}>
          <div className={styles.header}>
            <p className={styles.name_subsection}>Додати відгук</p>
            <button
              className={styles.close_btn}
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <AiOutlineClose size={32} />
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form_container}
          >
            <div className={styles.input_container}>
              <label className={styles.input_label}>
                <span className={styles.requared}>*</span>
                {`${"Ім'я"}`}
              </label>
              <input
                className={styles.input}
                {...register("name", {required: true})}
              />
              {errors.name && <p role="alert">{errors.name.message}</p>}
            </div>

            <div className={styles.input_container}>
              <label className={styles.input_label}>
                <span className={styles.requared}>*</span>Коментар
              </label>
              <textarea
                className={styles.textarea}
                {...register("comment", {required: true, min: 2, max: 1000})}
              />
              {errors.comment && <p role="alert">{errors.comment.message}</p>}
            </div>

            <div style={{display: "flex", flexDirection: "row", gap: 10}}>
              <span className={styles.requared}>*</span>
              <p> Оцінка</p>
              <label>
                <p>1</p>
                <input
                  {...register("grade", {required: true})}
                  type="radio"
                  value={1}
                />
              </label>
              <label>
                <p>2</p>
                <input
                  {...register("grade", {required: true})}
                  type="radio"
                  value={2}
                />
              </label>
              <label>
                <p>3</p>
                <input
                  {...register("grade", {required: true})}
                  type="radio"
                  value={3}
                />
              </label>
              <label>
                <p>4</p>
                <input
                  {...register("grade", {required: true})}
                  type="radio"
                  value={4}
                />
              </label>
              <label>
                <p>5</p>
                <input
                  {...register("grade", {required: true})}
                  type="radio"
                  value={5}
                />
              </label>
            </div>
            {errors.grade && <p>Поставте оцінку</p>}

            <button className={styles.submit_btn} type="submit">
              Зберегти
            </button>
          </form>
        </div>
      )}
    </>
  );
};
