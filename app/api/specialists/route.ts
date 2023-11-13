import { NextRequest, NextResponse } from "next/server";

import clientPromise from "@/services/mongoDB";

export const GET = async () => {
  const client = await clientPromise;
  const db = client.db("db-site-content");

  const data = await db.collection("specialists").find().toArray();

  return NextResponse.json({ status: 200, data });
};

export const POST = async (req: Request, res: Response) => {
  const client = await clientPromise;
  const db = client.db("db-site-content");

  const data = await req.json();

  const { insertedId } = await db.collection("specialists").insertOne(data);

  const post = await db.collection("specialists").findOne(insertedId);

  return NextResponse.json({ status: 201, data: post });
};
