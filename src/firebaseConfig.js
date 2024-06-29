import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJ0P2blu1DHOXMThK44Fs1NltJbu-4dA8",
    authDomain: "ecommerce-project-a9d72.firebaseapp.com",
    projectId: "ecommerce-project-a9d72",
    storageBucket: "ecommerce-project-a9d72.appspot.com",
    messagingSenderId: "201909754852",
    appId: "1:201909754852:web:3091e7a5505ad59184c5f1",
    measurementId: "G-9L9Q1RTX11"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth };
