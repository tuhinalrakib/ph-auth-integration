// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8SLgBMAPeL_Wx7zqGXdnXafYbG5-RnIk",
  authDomain: "auth-integration-bb30a.firebaseapp.com",
  projectId: "auth-integration-bb30a",
  storageBucket: "auth-integration-bb30a.firebasestorage.app",
  messagingSenderId: "343686722300",
  appId: "1:343686722300:web:0cf92a4df70d7ce23c1d79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)