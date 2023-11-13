"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BsUpload } from "react-icons/bs";

import styles from "./UploadImg.module.scss";

type FormData = {
  file: FileList;
};

type InputFileProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type AdminUploadImgProps = {
  setImgLink: React.Dispatch<React.SetStateAction<string>>;
};

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  (props, ref) => <input type="file" ref={ref} onChange={props.onChange} />
);

InputFile.displayName = "InputFile";

export const AdminUploadImg = ({ setImgLink }: AdminUploadImgProps) => {
  const { handleSubmit, control, reset } = useForm<FormData>();

  const [file, setFile] = useState<File>();

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onSubmit = async (data: FormData) => {
    if (typeof file === "undefined") return;

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-cloudinary", {
        // const response = await fetch(
        //   `${process.env.BASE_HOST}/api/upload-cloudinary`,
        //   {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const { results } = await response.json();

        setImgLink(results.secure_url);
        setFile(undefined);

        reset();
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } else {
        console.error("Ошибка при загрузке файла.");
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке файла:", error);
    }
  };

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    setFile(target.files[0]);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className={styles.label}>
          <span className={styles.label_icon}>
            <BsUpload
              size={20}
              color={typeof file === "undefined" ? "#ffffff" : "#00e41e"}
            />
          </span>
          <span
            className={styles.label_text}
            style={{
              color: typeof file === "undefined" ? "#ffffff" : "#00e41e",
            }}
          >
            {typeof file === "undefined" ? "Виберіть файл " : file.name}
          </span>

          <div className="visually-hidden">
            <Controller
              name="file"
              control={control}
              defaultValue={undefined}
              render={({ field: { onChange } }) => (
                <InputFile onChange={handleOnChange} ref={inputRef} />
              )}
            />
          </div>
        </label>
      </div>

      <button
        disabled={typeof file === "undefined"}
        className={
          typeof file === "undefined"
            ? styles.upload_btn
            : styles.upload_btn_active
        }
        type="submit"
      >
        Згенерувати посилання
      </button>
    </form>
  );
};
