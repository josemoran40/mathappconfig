import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import FirebaseInit from "../../../../lib/firebaseInit";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebase = new FirebaseInit();

export async function POST(request: Request) {
  const res = await request.json();
  firebase.createFirebaseApp();
  try {
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(
      auth,
      res.email,
      res.password
    );

    const token = await result.user.getIdToken();
    const db = await getFirestore();
    const document = doc(db, "users/" + result.user.uid);
    const docSnap = await setDoc(document, {
      email: res.email,
      password: res.password,
      classes: [],
      role: "teacher",
    });

    return new Response("Usuario creado", { status: 200 });
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
