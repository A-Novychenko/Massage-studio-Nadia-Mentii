import {useForm, SubmitHandler} from "react-hook-form";
import {useState} from "react";
import {MdDone} from "react-icons/md";
import {BiErrorAlt} from "react-icons/bi";
import {Watch} from "react-loader-spinner";

import styles from "./TgForm.module.scss";

export const TgForm = ({closeModal}: CloseModalProps) => {
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<IFormInput>();

  const [isVisibleNotify, setIsVisibleNotify] = useState(""); //"" or  succ or fail
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    const {name, phone, comment} = data;
    setIsLoading(true);
    try {
      const sendData = `<b>Запис із сайта</b>\n<b>Ім'я: ${name}</b>\n<b>Телефон: ${phone}</b>\n<b>Коментар: ${comment}</b>\n`;

      // const res = await fetch(`/api/telegram/`, {
      const res = await fetch(`${process.env.BASE_HOST}/api/telegram/`, {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(sendData),
      });

      if (!res.ok) {
        throw new Error("Error TG send");
      }
      setIsLoading(false);
      reset();
      setIsVisibleNotify("succ");
    } catch (error) {
      setIsLoading(true);
      setIsVisibleNotify("fail");
    } finally {
      setTimeout(() => {
        setIsVisibleNotify("");
        closeModal();
      }, 3000);
    }
  };

  return (
    <>
      <form className={styles.wrap} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_wrap}>
          <label className={styles.label}>{`Ім'я`}</label>
          <input {...register("name")} className={styles.input} />
        </div>

        <div className={styles.input_wrap_phone}>
          <label className={styles.label}>Телефон</label>
          <input
            {...register("phone", {required: true})}
            className={styles.input}
          />
          {errors.phone ? (
            <p className={styles.error_label}>Введіть телефон</p>
          ) : (
            <p className={styles.error_label_tranparent}>X</p>
          )}
        </div>

        <div className={styles.input_wrap}>
          <label className={styles.label}>Коментар</label>
          <textarea {...register("comment")} className={styles.textarea} />
        </div>

        <button type="submit" className={styles.submit_btn}>
          {!isLoading && <span className={styles.btnText}>Записатись</span>}

          {isLoading && (
            <Watch
              height="51"
              width="51"
              radius="40"
              color="#ffffff"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              visible={true}
            />
          )}
        </button>
      </form>

      <>
        {isVisibleNotify === "succ" && (
          <div className={styles.notify_wrap_succ}>
            <div className={styles.notify_success}>
              <MdDone size={120} />
            </div>
            <p className={styles.notify_success_msg}>
              Очікуйте зворотнього дзвінка
            </p>
          </div>
        )}

        {isVisibleNotify === "fail" && (
          <div className={styles.notify_wrap_fail}>
            <div className={styles.notify_fail}>
              <BiErrorAlt size={120} />
            </div>
            <p className={styles.notify_fail_msg}>Сервіс зламався.</p>
            <p className={styles.notify_fail_msg}>
              Записатись можливо за телефоном 063-177-22-23
            </p>
          </div>
        )}
      </>
    </>
  );
};
