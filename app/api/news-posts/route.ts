import {NextRequest, NextResponse} from "next/server";
import {ObjectId} from "mongodb";

import clientPromise from "@/services/mongoDB";

export const GET = async (req: Request, {params}: {params: {_id: string}}) => {
  const client = await clientPromise;
  const db = client.db("db-site-content");

  const data = await db.collection("news-posts").find().toArray();

  return NextResponse.json({status: 200, data});
};

export const POST = async (req: Request, res: Response) => {
  const client = await clientPromise;
  const db = client.db("db-site-content");

  const data = await req.json();

  const {insertedId} = await db.collection("news-posts").insertOne(data);

  const post = await db.collection("news-posts").findOne(insertedId);

  return NextResponse.json({status: 201, data: post});
};
