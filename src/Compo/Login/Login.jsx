import { useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import React from 'react';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] =useState("")
  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log("HiMEnnn");
      if (data.message === "Login successful") {
        alert("Login successful!");
        window.location.href = "/dashboard";
      } else {
        setErrorMessage(data.error || "Login failed. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      setErrorMessage("Login failed. Please try again.");
    });
  };
  
  

  return (
<div className="relative flex items-center justify-center w-full min-h-screen bg-gray-900 text-gray-200">
  <img
    src="/background2.gif"
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    <div className="flex flex-col w-full h-full items-center">
    <h2 className="text-6xl text-gray-200 font-bold text-center mb-8 opacity-90">grafty</h2>
    <div className="relative z-10 p-8 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg sm:w-[30%] w-[80%]">
    <form onSubmit={handleLogin} className="flex flex-col space-y-8">
    <div className="flex flex-col space-y-3 text-gray-800">
    <div className="relative">
        <input
          id="email"
          type="text"  
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="cursor-text p-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-blue-500 peer"
        />
        <label
          htmlFor="email"
          className="absolute left-3 top-3 text-gray-500 transition-all transform scale-100 origin-top-left peer-focus:scale-75 peer-focus:-top-0.5 peer-focus:text-lime-400 peer-valid:scale-75 peer-valid:-top-0.5"
        >
          EMAIL.ADDRESS
        </label>
      </div>

        <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="cursor-text p-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-blue-500 peer peer-focus:text-lime-400"
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 top-3 text-gray-500 transition-all transform scale-100 origin-top-left peer-focus:scale-75 peer-focus:-top-0.5 peer-focus:text-lime-400 peer-valid:scale-75 peer-valid:-top-0.5"
                >
                  PASSWORD
                </label>
              </div>
    </div>
    <div className="flex justify-center group">
        <button
            type="submit"
            className="p-3 flex justify-center items-center gap-1 w-[50%] rounded-full bg-gray-200 border-3 border-lime-400 hover:bg-lime-400 text-gray-700 cursor-pointer font-bold transition"
        >
            Sign in
            <RiLoginCircleFill className="text-lime-400 text-2xl group-hover:text-gray-200"/>
        </button>
    </div>
    <div className="text-center text-gray-500">
  <p>
    Don't have an account yet? <a href="/register" className="text-lime-400 hover:text-lime-600">Sign up</a>
  </p>
</div>
</form>


</div>
    <div className="flex flex-col justify-center items-center gap-1">
    <a href="/" className="underline mt-4 text-sm text-gray-500 hover:text-gray-400 cursor-pointer opacity-55">FORGOT YOUR PASSWORD</a>
    <a href="/dashboard" className="underline mt-4 text-sm text-gray-500 hover:text-gray-400 cursor-pointer opacity-55">GO TO DASHBOARD</a>
    </div>

    </div>

    </div>
  );
}