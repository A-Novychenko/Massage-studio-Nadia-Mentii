"use client";

import React, {useState} from "react";
import {useForm, Controller} from "react-hook-form";

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

export const AdminUploadImg = ({setImgLink}: AdminUploadImgProps) => {
  const {handleSubmit, control, reset} = useForm<FormData>();

  const [file, setFile] = useState<File>();

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onSubmit = async (data: FormData) => {
    if (typeof file === "undefined") return;

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-cloudinary", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const {results} = await response.json();

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
    <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex"}}>
      <div>
        <label>Виберіть файл:</label>
        <Controller
          name="file"
          control={control}
          defaultValue={undefined}
          render={({field: {onChange}}) => (
            <InputFile onChange={handleOnChange} ref={inputRef} />
          )}
        />
      </div>
      <button type="submit">Завантажити</button>
    </form>
  );
};
