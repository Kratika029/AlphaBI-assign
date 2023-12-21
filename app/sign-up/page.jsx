'use client'
import {useState, useEffect} from 'react';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase/config'
import {useRouter} from 'next/navigation';



const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();


    const handleLoginButton = (e) => {

      router.push('../sign-in')

    }
   
    const handleSignup = async (e) => {
      e.preventDefault();
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        console.log('User registered:', user);
        
        // Store the user flag in sessionStorage
        sessionStorage.setItem('user', 'true');
  
        // Clear email and password fields
        setEmail('');
        setPassword('');
  
        // Redirect to the sign-in page
        router.push('../sign-in');
      } catch (error) {
        // Handle registration error
        console.error('Registration error:', error.message);
      }
    };
  
    // useEffect to ensure sessionStorage is available on the client side
    useEffect(() => {
      // Your code using sessionStorage here (if needed)
    }, []);
  
  
  //   const handleSignup = (e) => {
  //       e.preventDefault();
  //       createUserWithEmailAndPassword(auth,email,password)
  //       .then((userCredential) =>{
           
  //           const user = userCredential.user;
  //           console.log(user);
  //           setEmail('');
  //           setPassword('');
  //           sessionStorage.setItem('user',true)

  //           router.push('../sign-in')

  //           // navigate('/login');
        
  //       }).catch((error) => {
  //               console.log(error.message);});
  
  //  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-full sm:w-96">
        <h2 className="text-3xl font-semibold mb-4 text-white">Sign Up</h2>
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
          onClick={handleSignup}
        >
          Sign Up
        </button>
          <div>
        <div>
         <font color='white'> Already a user? LogIn</font>
        </div>    
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick = { handleLoginButton }
        >
          Log In
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;
