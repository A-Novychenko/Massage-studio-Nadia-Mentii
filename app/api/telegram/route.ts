import axios from "axios";
import {NextRequest, NextResponse} from "next/server";

const sendTgAxios = axios.create();

export const POST = async (req: Request, res: Response) => {
  const {TOKEN, METHOD, TG_URL, CHAT_ID} = process.env;
  const BASE_URL = `${TG_URL}${TOKEN}/${METHOD}`;
  const msg = await req.json();

  const result = await sendTgAxios.post(BASE_URL, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: msg,
  });

  return NextResponse.json({status: 200});
};
