import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyBOwzy1E1phlp5auaavuFjU043WRg64xxc",
  authDomain: "ani-commerce.firebaseapp.com",
  projectId: "ani-commerce",
  storageBucket: "ani-commerce.appspot.com",
  messagingSenderId: "204923416840",
  appId: "1:204923416840:web:ac2f7637d9672f96f5bcbd",
  measurementId: "G-YV9CX83LTN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
