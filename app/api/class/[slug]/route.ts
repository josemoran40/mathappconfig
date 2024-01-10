import FirebaseCustomAuth from "../../../../lib/FirabaseCustomAuth";
import { NextRequest, NextResponse } from "next/server";
import { getFirestore, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

export async function GET(
  req: NextRequest,
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


export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await FirebaseCustomAuth.getInstance().isAuthenticated(req);
    const db = await getFirestore();
    //@ts-ignore
    const body: ClassData = await req.json();
    //@ts-ignore
    const document = doc(db, "class/" + params.slug);
    const docSnap = await getDoc(document);
    if (docSnap.exists()) {
      const class_ = {
        ...docSnap.data(),
      };

      await setDoc(document, body);
      return NextResponse.json({
        class_,
      });
    } else {
      return new NextResponse("Not found", {
        status: 401,
      });
    }
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}



export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await FirebaseCustomAuth.getInstance().isAuthenticated(req);
    const db = await getFirestore();
    //@ts-ignore
    const document = doc(db, "class/" + params.slug);
    const docSnap = await getDoc(document);
    if (docSnap.exists()) {
      const class_ = {
        ...docSnap.data(),
      };

      await deleteDoc(document);
      return NextResponse.json({
        class_,
      });
    } else {
      return new NextResponse("Not found", {
        status: 401,
      });
    }
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
