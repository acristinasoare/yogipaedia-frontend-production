// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCGLwuMP4vxDEJ48cPX2qzO9Xs9o6FK90A",
	authDomain: "yogipedia-f8bc5.firebaseapp.com",
	projectId: "yogipedia-f8bc5",
	storageBucket: "yogipedia-f8bc5.appspot.com",
	messagingSenderId: "312051038617",
	appId: "1:312051038617:web:9edf1b325dbd14cb9c7b08",
};

// Initialize Firebase inside our app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference that we can use to handle authentication and export this so we can use the refeence in our React components
export const auth = getAuth(app);

// Export the Firebase app by default so we can use it with other Firebase services in our app if we need to
export default app;
