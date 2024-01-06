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
    this.firebase.createFirebaseApp();
  }

  public async isAuthenticated(req: any) {
    // @ts-ignore
    try {
      const token = req.headers.get("Authorization") || "";
      const decodedToken = await firebaseAdmin
        .auth()
        .verifyIdToken(token.split(" ")[1]);
      if (!decodedToken || !decodedToken.uid) {
        throw new Response("Usuario no encontrado", {
          status: 401,
        });
      }
      return decodedToken;
    } catch (error) {
      throw new Response("Sesion expirada", {
        status: 401,
      });
    }
  }

  public static getInstance(): FirebaseCustomAuth {
    if (!FirebaseCustomAuth.instance) {
      FirebaseCustomAuth.instance = new FirebaseCustomAuth();
    }
    return FirebaseCustomAuth.instance;
  }
}
