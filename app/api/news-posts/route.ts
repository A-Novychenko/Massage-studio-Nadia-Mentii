import {NextRequest, NextResponse} from "next/server";

export const GET = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/news-posts/", {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

  const data = await res.json();

  return NextResponse.json({status: 200, data});
};
