// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { ReactNativeFirebase } from "@react-native-firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBLn5NgfbbMfITueaN9lHGhe5s0fKT3r4",
  authDomain: "weather-app-5b64f.firebaseapp.com",
  projectId: "weather-app-5b64f",
  storageBucket: "weather-app-5b64f.firebasestorage.app",
  messagingSenderId: "884550337867",
  appId: "1:884550337867:web:beeff5b119fc6b7f60d4ce",
  measurementId: "G-2DVV85CSQ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const analytics = getAnalytics(app);