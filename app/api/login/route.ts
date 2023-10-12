import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import FirebaseInit from "@/lib/firebaseInit";

const firebase = new FirebaseInit();

export async function POST(request: Request) {
  const res = await request.json();
  firebase.createFirebaseApp();
  try {
    const auth = getAuth();
    const result = await signInWithEmailAndPassword(
      auth,
      res.email,
      res.password
    );
    return NextResponse.json({
      email: res.email,
      token: await result.user.getIdToken(),
    });
  } catch (error) {
    if (
      error instanceof FirebaseError &&
      error.code === "auth/user-not-found"
    ) {
      return new Response("Usuario no encontrado", {
        status: 401,
      });
    }
  }
}
