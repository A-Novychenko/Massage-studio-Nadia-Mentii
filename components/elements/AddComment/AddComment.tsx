"use client";

import {useState, useEffect} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {AiOutlineClose} from "react-icons/ai";
import {experimental_useFormState as useFormState} from "react-dom";

import styles from "./AddComment.module.scss";
import {experimental_useFormStatus} from "react-dom";
import {createComment} from "@/app/actions";
import {Watch} from "react-loader-spinner";

const initialState = {
  message: null,
  loading: false,
  error: false,
};

export const AddComment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, formAction] = useFormState(createComment, initialState);
  const {pending} = experimental_useFormStatus();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [grade, setGrade] = useState("5");

  const resetForm = () => {
    setName("");
    setComment("");
    setGrade("5");
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
                state.message = null;
                resetForm();
              }}
            >
              <AiOutlineClose size={32} />
            </button>
          </div>

          <form
            action={formAction}
            className={styles.form_container}
            onSubmit={() => {
              state.loading = true;
              resetForm();
            }}
          >
            <div className={styles.input_container}>
              <label className={styles.input_label}>
                <span className={styles.requared}>*</span>
                {`${"Ім'я"}`}
              </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className={styles.input_container}>
              <label className={styles.input_label}>
                <span className={styles.requared}>*</span>Коментар
              </label>
              <textarea
                className={styles.textarea}
                id="comment"
                name="comment"
                required
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </div>

            <div className={styles.grade_box}>
              <div className={styles.grade_header}>
                <span className={styles.requared}>*</span>
                <p> Оцінка</p>
              </div>
              <div className={styles.grade_btns}>
                <label
                  className={styles.grade_btn_wrap}
                  style={{
                    backgroundColor: grade === "1" ? "#2196F3" : "transparent",
                  }}
                >
                  <p>1</p>
                  <input
                    className="visually-hidden"
                    type="radio"
                    value={1}
                    id="grade"
                    name="grade"
                    required
                    checked={grade === "1"}
                    onChange={(e) => {
                      setGrade(e.target.value);
                    }}
                  />
                </label>
                <label
                  className={styles.grade_btn_wrap}
                  style={{
                    backgroundColor: grade === "2" ? "#2196F3" : "transparent",
                  }}
                >
                  <p>2</p>
                  <input
                    className="visually-hidden"
                    type="radio"
                    value={2}
                    id="grade"
                    name="grade"
                    required
                    checked={grade === "2"}
                    onChange={(e) => {
                      setGrade(e.target.value);
                    }}
                  />
                </label>
                <label
                  className={styles.grade_btn_wrap}
                  style={{
                    backgroundColor: grade === "3" ? "#2196F3" : "transparent",
                  }}
                >
                  <p>3</p>
                  <input
                    className="visually-hidden"
                    type="radio"
                    value={3}
                    id="grade"
                    name="grade"
                    required
                    checked={grade === "3"}
                    onChange={(e) => {
                      setGrade(e.target.value);
                    }}
                  />
                </label>
                <label
                  className={styles.grade_btn_wrap}
                  style={{
                    backgroundColor: grade === "4" ? "#2196F3" : "transparent",
                  }}
                >
                  <p>4</p>
                  <input
                    className="visually-hidden"
                    type="radio"
                    value={4}
                    id="grade"
                    name="grade"
                    required
                    checked={grade === "4"}
                    onChange={(e) => {
                      setGrade(e.target.value);
                    }}
                  />
                </label>
                <label
                  className={styles.grade_btn_wrap}
                  style={{
                    backgroundColor: grade === "5" ? "#2196F3" : "transparent",
                  }}
                >
                  <p>5</p>
                  <input
                    className="visually-hidden"
                    type="radio"
                    value={5}
                    id="grade"
                    name="grade"
                    required
                    checked={grade === "5"}
                    onChange={(e) => {
                      setGrade(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>

            <button
              className={styles.submit_btn}
              type="submit"
              aria-disabled={pending}
            >
              {state.loading ? (
                <Watch
                  height="40"
                  width="40"
                  radius="35"
                  color="#ffffff"
                  ariaLabel="watch-loading"
                  wrapperStyle={{}}
                  visible={true}
                />
              ) : (
                <span className={styles.submit_btn_text}>Зберегти</span>
              )}
            </button>

            {state.message && (
              <div className={styles.notification_box}>
                <p
                  aria-live="polite"
                  className={styles.notification_text}
                  role="status"
                >
                  {state?.message}
                </p>
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
};
