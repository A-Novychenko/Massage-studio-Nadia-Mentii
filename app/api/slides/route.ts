import {NextRequest, NextResponse} from "next/server";
import clientPromise from "@/services/mongoDB";

export const GET = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/slides/", {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

  const data = await res.json();

  return NextResponse.json({status: 200, data});
};

export const POST = async (req: Request, res: Response) => {
  const client = await clientPromise;
  const db = client.db("db-site-content");

  const data = await res.json();

  const {insertedId} = await db.collection("slides").insertOne(data);

  const post = await db.collection("slides").findOne(insertedId);

  return NextResponse.json({status: 201, data: post});
};
