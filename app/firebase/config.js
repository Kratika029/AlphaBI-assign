
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { initialize } from "next/dist/server/lib/render-server";

// const firebaseConfig = {
  
//     apiKey: "AIzaSyDS6ZaZnX0ezQIjym-XODauUAM-QSBoqoo",
//     authDomain: "alphabi-auth-df2cd.firebaseapp.com",
//     projectId: "alphabi-auth-df2cd",
//     storageBucket: "alphabi-auth-df2cd.appspot.com",
//     messagingSenderId: "130247191119",
//     appId: "1:130247191119:web:988ed20cd47a62847e183a"

// };
const firebaseConfig = {
    apiKey: "AIzaSyCXKXEZwU2NAB6jyD7VL6NpzgnCx74oFs0",
    authDomain: "alphabi-project-ba7ea.firebaseapp.com",
    projectId: "alphabi-project-ba7ea",
    storageBucket: "alphabi-project-ba7ea.appspot.com",
    messagingSenderId: "231649520399",
    appId: "1:231649520399:web:100d17e63aafde1093ac7a"
  };


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app)

export {app, auth}
