import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import {CartContextProvider} from './context/CartContext'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYidQnqzcpAjKVTPa967IufeqYc6ZVTzE",
  authDomain: "pet-shop-coder.firebaseapp.com",
  projectId: "pet-shop-coder",
  storageBucket: "pet-shop-coder.appspot.com",
  messagingSenderId: "581561891870",
  appId: "1:581561891870:web:4ccc1cb95ab7bb0e77420f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>
);
reportWebVitals();
