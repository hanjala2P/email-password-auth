import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../utils/firebase.init';

const Login = () => {

    const [error,setError]=useState('');
    const emailRef =useRef();
    const handleLogin =(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value
        console.log('Login successfully',email,password);

        setError('')
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            console.log(result.user);
            if(result.user.emailVerified){
              alert('please verify your email address')
            }
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })
    }
      const handleForgetPassword =()=>{
       
        const email =emailRef.current.value;
         console.log('forger password',email);
         sendPasswordResetEmail(auth,email)
         .then(()=> {
          alert('please check your email to reset password')
         })
      }
    return (
        <div className='mx-auto'>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} action="">
                    <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" ref={emailRef} />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        {
            error && <p className='text-warning'>{error}</p>
        }
        <p> Don't Have any account <Link className="text-blue-400 underline" to='/register'>Regsiter</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;