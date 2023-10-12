import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import FirebaseInit from "../../../lib/firebaseInit";

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
    const token = await result.user.getIdToken();
    return NextResponse.json({
      email: res.email,
      token,
    });
  } catch (error) {
    if (
      error instanceof FirebaseError &&
      (error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-email" ||
        error.code === "auth/wrong-password")
    ) {
      return new Response("Usuario no encontrado", {
        status: 401,
      });
    } else {
      console.log(error);
      return new Response("Internal Server Error", {
        status: 500,
      });
    }
  }
}
