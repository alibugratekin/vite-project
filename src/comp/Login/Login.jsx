import React, { useState } from 'react'
import './Login.css'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignIn) {
    setIsSignIn(true);
    }
  };

  
  return (
    <div className="login">
      <div className="box">
        {isSignIn ? (
          <>
            <span>Don't have an account? </span>
            <a href="#" onClick={() => setIsSignIn(false)}>
              Sign Up
            </a>
          </>
        ) :
         (
          <>
            <span>Have an account? </span>
            <a href="#" onClick={() => setIsSignIn(true)}>
              Sign In
            </a>
          </>
        )}
        
        
        <h2>Welcome</h2>
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Enter e-mail address</label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="E-mail address"
              required
            />
          </div>
          <br />
          <br />
          
          
          
          {!isSignIn && (
            <>
              <div>
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  required
                />
              </div>
              <br />
              <br />
              <div>
                <label htmlFor="number">Contact Number</label>
              </div>
              <div>
                <input
                  type="text"
                  id="number"
                  placeholder="Contact Number"
                  required
                />
              </div>
              <br />
              <br />
            </>
          )}
          
          
          
          
          <div>
            <label htmlFor="password">Enter your password</label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <br />
          <br />
          <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
          <br />
          <br />

          
          
          
          
          {isSignIn && (
            <>
              <span>Forgot Password? </span>
              <a href="#">Click here</a>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
