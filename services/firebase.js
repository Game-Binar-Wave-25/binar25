import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAH7QxNzKXmGOr0jsnsS_-FRyYzIvPL_D8",
  authDomain: "testingfajar-f893b.firebaseapp.com",
  databaseURL: "https://testingfajar-f893b-default-rtdb.firebaseio.com",
  projectId: "testingfajar-f893b",
  storageBucket: "testingfajar-f893b.appspot.com",
  messagingSenderId: "160512182293",
  appId: "1:160512182293:web:0a9e03a45c5e2f924a661c",
  measurementId: "G-GFYJH8DXMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app)
// const analytics = getAnalytics(app);

export default authFirebase