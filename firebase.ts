import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQuMbxkJyPibK3S8M9ySdQl4_gNGAI1KI",
  authDomain: "chatgpt-b1d56.firebaseapp.com",
  projectId: "chatgpt-b1d56",
  storageBucket: "chatgpt-b1d56.appspot.com",
  messagingSenderId: "728935978387",
  appId: "1:728935978387:web:c723d3af9b99e77afb4466",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};