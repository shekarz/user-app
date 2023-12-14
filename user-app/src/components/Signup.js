import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Signup:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Signup</h1>
        <form>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 mb-4"
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded p-2 mb-4"
          />
          <button
            type="button"
            onClick={handleSignup}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
