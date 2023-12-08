import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqn7HqYwspFFc3PAtVCDslRiBGKFl1neI",
    authDomain: "grid-management.firebaseapp.com",
    projectId: "grid-management",
    storageBucket: "grid-management.appspot.com",
    messagingSenderId: "390656021856",
    appId: "1:390656021856:web:1e878d0130121b9b7e7a05"
  };
  
  // init firebase
  initializeApp(firebaseConfig)
  
  // init firestore service
  const db = getFirestore()
  export default db