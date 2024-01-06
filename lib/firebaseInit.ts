import * as firebase from "firebase/app";
import * as firebaseAdmin from "firebase-admin";
const serviceAccount: firebaseAdmin.ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};
export default class FirebaseInit {
  public createFirebaseApp() {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    });
  }
  public createFirebaseAdminApp() {
    try {
      firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
      });
    } catch (error) {
      console.log("Firebase admin app already exists");
    }
  }
}
