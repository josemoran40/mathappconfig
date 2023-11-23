import FirebaseCustomAuth from "../../../lib/FirabaseCustomAuth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await FirebaseCustomAuth.getInstance().isAuthenticated(req);

    const db = await getFirestore();
    //@ts-ignore
    const body = await req.json();
    const uid = uuidv4();
    const document = doc(db, "class/" + uid);
    const class_ = {
      ...body,
      teacher: user.uid,
    };
    await setDoc(document, class_);
    return NextResponse.json({
      class_,
      uid,
    });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
