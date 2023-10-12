import { NextApiRequest } from "next";
import FirebaseInit from "./firebaseInit";
import * as firebaseAdmin from "firebase-admin";

export default class FirebaseCustomAuth {
  private static instance: FirebaseCustomAuth;

  private firebase = new FirebaseInit();

  constructor() {
    if (!this.firebase) {
      this.firebase = new FirebaseInit();
    }
    this.firebase.createFirebaseAdminApp();
  }

  public async isAuthenticated(req: NextApiRequest) {
    // @ts-ignore
    const token = req.headers.get("Authorization") || "";
    const decodedToken = await firebaseAdmin
      .auth()
      .verifyIdToken(token.split(" ")[1]);
    if (!decodedToken || !decodedToken.uid) {
      return new Response("Usuario no encontrado", {
        status: 401,
      });
    }
    return decodedToken;
  }

  public static getInstance(): FirebaseCustomAuth {
    if (!FirebaseCustomAuth.instance) {
      FirebaseCustomAuth.instance = new FirebaseCustomAuth();
    }
    return FirebaseCustomAuth.instance;
  }
}
