import FirebaseCustomAuth from "../../../lib/FirabaseCustomAuth";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    const user = (await FirebaseCustomAuth.getInstance().isAuthenticated(
      req
    )) as DecodedIdToken;

    const db = await getFirestore();
    //@ts-ignore
    const body: ClassData = await req.json();
    const uid = uuidv4();
    const document = doc(db, "class/" + uid);
    for (const key of body.explanation) {
      if (!key.uid) key.uid = uuidv4();
    }
    for (const key of body.levels) {
      if (!key.uid) key.uid = uuidv4();
    }
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
    if (error instanceof Response) {
      return error;
    }
    console.log(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const user = (await FirebaseCustomAuth.getInstance().isAuthenticated(
      req
    )) as DecodedIdToken;

    const db = await getFirestore();
    const collectionRef = collection(db, "class");
    const q = query(collectionRef, where("teacher", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const result = [];

    querySnapshot.forEach((doc) => {
      result.push({ ...doc.data(), uid: doc.id });
    });

    return NextResponse.json([...result]);
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.log(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
