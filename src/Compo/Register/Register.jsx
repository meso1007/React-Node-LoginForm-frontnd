import React, { useState } from 'react';
import { RiLoginCircleFill } from 'react-icons/ri';

const Register = () => {
  // state
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // パスワードが一致しない場合
    if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
    }

    // FetchでPOSTリクエストを送信
    fetch("http://localhost:3002/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Email: email,
            UserName: userName,
            Password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => { throw new Error(data.message || "Unknown error occurred"); });
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (data.message === "User Added!") {
            alert("User registered successfully!");
            // 登録後の処理（リダイレクトなど）
        }
    })
    .catch(error => {
        console.error("Error:", error);
        setErrorMessage(error.message || "Registration failed. Please try again.");
    });
};


  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-gray-900 text-gray-200">
      <img
        src="/back-reg2.gif"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20"></div>

      <div className="flex flex-col w-full h-full items-center">
        <h2 className="text-6xl text-gray-900 font-bold text-center mb-8 opacity-90">grafty</h2>
        
        <div className="relative z-10 p-8 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg sm:w-[30%] w-[80%]">
          <form onSubmit={handleRegister} className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-3">
              {/* Email Input */}
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
                  id="userName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="cursor-text p-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-blue-500 peer"
                />
                <label
                  htmlFor="userName"
                  className="absolute left-3 top-3 text-gray-500 transition-all transform scale-100 origin-top-left peer-focus:scale-75 peer-focus:-top-0.5 peer-focus:text-lime-400 peer-valid:scale-75 peer-valid:-top-0.5"
                >
                  USERNAME
                </label>
              </div>

              {/* Password Input */}
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

              {/* Confirm Password Input */}
              <div className="relative">
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="cursor-text p-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-blue-500 peer peer-focus:text-lime-400"
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute left-3 top-3 text-gray-500 transition-all transform scale-100 origin-top-left peer-focus:scale-75 peer-focus:-top-0.5 peer-focus:text-lime-400 peer-valid:scale-75 peer-valid:-top-0.5"
                >
                  CONFIRM PASSWORD
                </label>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <div className="flex justify-center group">
              <button
                type="submit"
                className="p-3 flex justify-center items-center gap-1 w-[50%] rounded-full bg-gray-200 border-3 border-lime-400 hover:bg-lime-400 text-gray-700 cursor-pointer font-bold transition"
              >
                Sign up
                <RiLoginCircleFill className="text-lime-400 text-2xl group-hover:text-gray-200"/>
              </button>
            </div>

            <div className="text-center text-gray-500">
              <p>
                Already have an account? <a href="/" className="text-lime-400 hover:text-lime-600">Sign in</a>
              </p>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <a href="/" className="underline mt-4 text-sm text-gray-800 hover:text-gray-900 opacity-90 cursor-pointer">FORGOT YOUR PASSWORD</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
