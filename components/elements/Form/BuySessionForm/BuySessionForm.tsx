"use client";

import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Watch} from "react-loader-spinner";
import {MdDone} from "react-icons/md";
import {BiErrorAlt} from "react-icons/bi";

import {usePriceModal} from "@/components/Providers/PriceModalProvider";
import styles from "./BuySessionForm.module.scss";

export const BuySessionForm = ({
  serviceData,
}: {
  serviceData: PriceFormProps;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<InputsBuySessionForm>();

  const {isOpen, toggleModal, setData} = usePriceModal();

  const [isVisibleNotify, setIsVisibleNotify] = useState(""); //"" or  succ or fail
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<InputsBuySessionForm> = async (data) => {
    console.log(data);
    const {name, phone} = data;
    const {service, duration, price} = serviceData;
    setIsLoading(true);
    try {
      const sendData = `<b>Заявка із сайта (PriceForm)</b>\n<b>Ім'я: ${name}</b>\n<b>Телефон: ${phone}</b>\n<b>Послуга: ${service}</b>\n<b>Тривалість: ${duration}</b>\n<b>Ціна: ${price}</b>\n`;

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
        toggleModal(false);
      }, 3000);
    }
  };

  return (
    <>
      <form className={styles.wrap} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <p> {`${"Ім'я"}`}</p>
          <input className={styles.input} {...register("name")} />
        </label>

        <label className={styles.label}>
          <p> Телефон</p>
          <input
            className={styles.input}
            {...register("phone", {required: true})}
          />
        </label>

        {errors.phone ? (
          <span style={{color: "red"}}>Введіть телефон!</span>
        ) : (
          <span style={{color: "transparent"}}>*</span>
        )}

        <button type="submit" className={styles.submit_btn}>
          {!isLoading && <span className={styles.btnText}>Записатись</span>}

          {isLoading && (
            <Watch
              height="49"
              width="49"
              radius="24"
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
