"use client";

import {useForm, SubmitHandler} from "react-hook-form";

interface IFormInput {
  name: string;
  comment: string;
  grade: number;
}

export const AddComment = () => {
  const {register, handleSubmit} = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    const fixData = {...data, grade: Number(data.grade)};

    console.log("fixData", fixData);

    const addCommentRes = await fetch("http://127.0.0.1:1337/api/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(fixData),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{display: "flex", flexDirection: "column"}}
    >
      <label>{`Ім'я`}</label>
      <input {...register("name")} />

      <label>Коментар</label>
      <input {...register("comment")} />

      <div style={{display: "flex", flexDirection: "row", gap: 10}}>
        <p> Оцінка</p>
        <label>
          <p>1</p> <input {...register("grade")} type="radio" value={1} />
        </label>
        <label>
          <p>2</p> <input {...register("grade")} type="radio" value={2} />
        </label>
        <label>
          <p>3</p> <input {...register("grade")} type="radio" value={3} />
        </label>
        <label>
          <p>4</p> <input {...register("grade")} type="radio" value={4} />
        </label>
        <label>
          <p>5</p> <input {...register("grade")} type="radio" value={5} />
        </label>
      </div>

      <input type="submit" title="Опублікувати" />
    </form>
  );
};
