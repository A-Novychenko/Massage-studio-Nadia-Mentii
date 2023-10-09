import {NextRequest, NextResponse} from "next/server";

export const GET = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/reviews/", {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

  const data = await res.json();

  return NextResponse.json({status: 200, data});
};

export const POST = async (req: Request) => {
  const reqData = await req.json();

  const res = await fetch("http://127.0.0.1:1337/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    body: JSON.stringify(reqData),
  });

  const data = await res.json();

  console.log("data", data);

  return NextResponse.json({status: 200, data});
};
