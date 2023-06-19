// src/user/pages/LoginPage.tsx

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../services/apiService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(email, password);
      // Store the authentication token (you might want to use Redux or Context API for this)
      localStorage.setItem("authToken", response.data.token);
      // Redirect to homepage or dashboard after successful login
      history.push("/");
    } catch (error) {
      // Display error message to user
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
