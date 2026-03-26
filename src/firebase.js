import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqg-jKcFQpO8Q_D8j-Za2RSpZBtLxBUPQ",
  authDomain: "finance-dashboard-879a2.firebaseapp.com",
  projectId: "finance-dashboard-879a2",
  storageBucket: "finance-dashboard-879a2.firebasestorage.app",
  messagingSenderId: "268635155123",
  appId: "1:268635155123:web:16eb9e5acdf392cbb39ec6",
  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
