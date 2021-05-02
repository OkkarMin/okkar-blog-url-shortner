import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCtdMdjm681U7b7g_D2X-aN-Z7XqZN65EQ",
  authDomain: "okkar-blog-url-shortner.firebaseapp.com",
  projectId: "okkar-blog-url-shortner",
  storageBucket: "okkar-blog-url-shortner.appspot.com",
  messagingSenderId: "814380248268",
  appId: "1:814380248268:web:540957c12c164e023fe669",
  measurementId: "G-XJNCJX9KK3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const analytics = firebase.analytics;

export { firebase, analytics };
