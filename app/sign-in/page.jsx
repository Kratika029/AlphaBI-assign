'use client'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase/config'
import {useRouter} from 'next/navigation';



const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const router = useRouter();
  const auth = getAuth();

  const handleSignUpButton = (e) => {

    router.push('../sign-up')

  }


  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=> {
    //   setSuccessMsg('Logged In successfully, YOU will now be redirected to HOME page')
      setEmail('')
      setPassword('')
      sessionStorage.setItem('user',true)
      router.push('/')

    }).catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        if(error.message == 'Firebase: Error (auth/invalid-email).'){setErrorMsg('plz fill all the required fields');}
        if(error.message == 'Firebase: Error (auth/user-not-found).'){setErrorMsg('Email not found');}
        if(error.message == 'Firebase: Error (auth/wrong-password).'){setErrorMsg('Wrong password');}});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-full sm:w-96">
        <h2 className="text-3xl font-semibold mb-4 text-white">Log In</h2>
        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={email}
            onChange= {(e) => 
                setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={password}
            onChange= {(e) => 
                setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={handleSignIn}
        >
          Log In
        </button>

        <div color='white'>
         <font color='white'> New Here? Sign Up</font>
        </div>    
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick = { handleSignUpButton }
        >
          Sign Up
        </button>

      </div>
    </div>
  );
};

export default Signin;
