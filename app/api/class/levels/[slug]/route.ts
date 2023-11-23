import FirebaseCustomAuth from "../../../../../lib/FirabaseCustomAuth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { slug: string } }
) {
  await FirebaseCustomAuth.getInstance().isAuthenticated(req);
  const db = await getFirestore();
  const document = doc(db, "class/" + params.slug);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) {
    return NextResponse.json(docSnap.data().levels);
  } else {
    console.log("No such document!");
  }
  return NextResponse.json({
    levels: [],
  });
}

export async function POST(
  req: NextApiRequest,
  { params }: { params: { slug: string } }
) {
  await FirebaseCustomAuth.getInstance().isAuthenticated(req);
  const db = await getFirestore();
  //@ts-ignore
  const body = await req.json();
  console.log(body, params);
  const document = doc(db, "class/" + params.slug);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) {
    const class_ = {
      ...docSnap.data(),
      levels: [...docSnap.data().levels, { ...body, uid: uuidv4() }],
    };
    console.log(class_);
    await setDoc(document, class_);
    return NextResponse.json({
      class_,
    });
  } else {
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}

export async function PUT(
  req: NextApiRequest,
  { params }: { params: { slug: string } }
) {
  await FirebaseCustomAuth.getInstance().isAuthenticated(req);
  const db = await getFirestore();
  //@ts-ignore
  const body = await req.json();
  //@ts-ignore
  const index = req.nextUrl.searchParams.get("index");
  console.log(body, params);
  const document = doc(db, "class/" + params.slug);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) {
    const class_ = {
      ...docSnap.data(),
    };

    class_.levels[index] = body;
    console.log(class_);
    await setDoc(document, class_);
    return NextResponse.json({
      class_,
    });
  } else {
    return new NextResponse("Not found", {
      status: 401,
    });
  }
}
