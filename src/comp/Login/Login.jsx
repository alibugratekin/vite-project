import React, { useState } from "react";
import "./Login.css";
import "./Tail.css"



const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isSignIn ? "Signed In!" : "Signed Up!");
  };

  return (
    <div className="login-container">
      <img
        src="https://www.tercihyazilim.com/Upload/8292/Images/web-site-nedir.jpg?width=1024"
        alt="Login Illustration"
        style={{
          width: "400px",
          height: "auto",
          borderRadius: "20px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        }}
      />

      {/* Form Kutusu */}
      <div className="box shadow-xl transition-all duration-500">
        <div className="text-right text-sm mb-4">
          {isSignIn ? (
            <>
              <span className="text-gray-600">Don't have an account? </span>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </a>
            </>
          ) : (
            <>
              <span className="text-gray-600">Already have an account? </span>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </a>
            </>
          )}
        </div>

        <h2 className="text-3xl font-bold text-center mb-1">Welcome</h2>
        <h1 className="text-xl text-center mb-6 text-gray-600">
          {isSignIn ? "Sign In to your account" : "Create a new account"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input-style"
              placeholder="E-mail"
              required
            />
          </div>

          {!isSignIn && (
            <>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="input-style"
                  placeholder="Username"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="number"
                  className="input-style"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-style"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-submit hover:scale-105 transition-transform"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {isSignIn && (
            <div className="text-sm text-center mt-2 text-gray-500">
              <span>Forgot Password? </span>
              <a href="#" className="text-blue-600 hover:underline">
                Click here
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;