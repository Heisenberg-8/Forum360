import React, { useState } from "react";
import "./Login.css";
import Message from "./Message.jsx";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentScreen, setCurrentScreen] = useState("login");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your login logic here

    // Assuming the login is successful, navigate to the messaging screen
    setCurrentScreen("messaging");
  }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
