"use server";

import {revalidatePath} from "next/cache";

export async function createComment(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      comment: formData.get("comment"),
      grade: formData.get("grade"),
    };

    const res = await fetch(`${process.env.BASE_HOST}/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({...data, date: Date.now().toString()}),
    });

    revalidatePath("/");
    return {loading: false, error: false, message: "Коментар додано"};
  } catch (e) {
    // return {message: "Failed to create todo"};
    return {loading: false, error: true, message: "Помилка, спробуйте пізніше"};
  }
}
