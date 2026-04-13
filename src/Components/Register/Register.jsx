import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../utils/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log("form submited", email, password,terms);

    //    const passwordPatterns = /^.{6,}$/;
    //    if(passwordPatterns.test(password)){
    //     console.log('password not match');
    //     setError('password must be 6 charecter or longer')
    //     return;
    //    }

    const passwordPatterns =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^%*(),.?":{}|<>]).{6,}$/;
    if (!passwordPatterns.test(password)) {
      setError(
        "Password must be at least 6 charecters long, and include at least one upercase & one lowercase and one special charecter",
      );
      return;
    }

    //    reset  stae error & success
    setError("");
    setSuccess(false);

    if(!terms){
        setError('Please accept our terms and conditions');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("after creat a new user", result.user);
        setSuccess(true);
        event.target.reset();
      })
      .catch((error) => {
        console.log("error happen : ", error.message);
        setError(error.message);
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                    />
                    <button
                      onClick={handleTogglePasswordShow}
                      className="absolute top-1.5 right-6 btn btn-xs"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div>
                    <label class="label">
                      <input 
                      type="checkbox" 
                      class="checkbox"
                      name="terms" />
                      Accept Terms & Conditions
                    </label>
                  </div>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                {success && (
                  <p className="text-lg text-green-600">
                    Account created SuccessFully
                  </p>
                )}
                {error && <p className="text-red-500">{error}</p>}
              </form>
              <p >Already Have an Account? <Link className="text-blue-400 underline" to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
