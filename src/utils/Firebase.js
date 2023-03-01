import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || dotenv.required().REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || dotenv.required().REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID || dotenv.required().REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || dotenv.required().REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || dotenv.required().REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID || dotenv.required().REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;