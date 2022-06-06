import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { BrowserRouter } from 'react-router-dom';

// import css and bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYZ5DR3MyuiO8HX7a2yuekxNRJe2zAPoc",
    authDomain: "foody-6af26.firebaseapp.com",
    databaseURL: "https://foody-6af26-default-rtdb.firebaseio.com",
    projectId: "foody-6af26",
    storageBucket: "foody-6af26.appspot.com",
    messagingSenderId: "360796269413",
    appId: "1:360796269413:web:882279bc05c0f465d8cf8c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
