import FirebaseCustomAuth from "../../../lib/FirabaseCustomAuth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await FirebaseCustomAuth.getInstance().isAuthenticated(req);

  const db = await getFirestore();
  const document = doc(db, "levels/b0UMrsGPjuZyBtI3ha1p/");
  const docSnap = await getDoc(document);
  if (docSnap.exists()) {
    return NextResponse.json(docSnap.data());
  } else {
    console.log("No such document!");
  }
  return NextResponse.json({
    levels: [],
  });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await FirebaseCustomAuth.getInstance().isAuthenticated(req);
  const db = await getFirestore();
  //@ts-ignore
  const body = await req.json();
  const document = doc(db, "levels/b0UMrsGPjuZyBtI3ha1p/");
  const docSnap = await getDoc(document);
  if (docSnap.exists()) {
    const levels = { levels: [...docSnap.data().levels, body] };
    await setDoc(document, levels);
    return NextResponse.json({
      levels,
    });
  } else {
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
