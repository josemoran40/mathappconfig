import FirebaseCustomAuth from "../../../../lib/FirabaseCustomAuth";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { slug: string } }
) {
  await FirebaseCustomAuth.getInstance().isAuthenticated(req);
  const db = await getFirestore();
  const document = doc(db, "class/" + params.slug);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) {
    return NextResponse.json(docSnap.data());
  } else {
    console.log("No such document!");
    return new Response("Not found", {
      status: 401,
    });
  }
}
