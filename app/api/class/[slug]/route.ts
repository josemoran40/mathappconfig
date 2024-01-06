import FirebaseCustomAuth from "../../../../lib/FirabaseCustomAuth";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await FirebaseCustomAuth.getInstance().isAuthenticated(req);
    const db = await getFirestore();
    const document = doc(db, "class/" + params.slug);
    const docSnap = await getDoc(document);
    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    } else {
      console.log("No such document!");
      return new Response("Not found", {
        status: 404,
      });
    }
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
