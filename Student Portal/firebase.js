 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBOatBGI7S01yt2EV8nR21E61hjNYNkkFg",
authDomain: "student-portal-f600d.firebaseapp.com",
projectId: "student-portal-f600d",
storageBucket: "student-portal-f600d.appspot.com",
messagingSenderId: "221651746567",
appId: "1:221651746567:web:ed059ac16f2d28910e8fa2",
measurementId: "G-1NQCHMWSZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




  