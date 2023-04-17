import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCV0OzvyWjztymefRXCal36SZqOM0ljO3M",
  authDomain: "email-authentication-877f2.firebaseapp.com",
  projectId: "email-authentication-877f2",
  storageBucket: "email-authentication-877f2.appspot.com",
  messagingSenderId: "902625313560",
  appId: "1:902625313560:web:d1f9435033670a8362146d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;