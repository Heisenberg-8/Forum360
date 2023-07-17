import React, { useState, useEffect } from "react";
import "./Login.css";
import Message from "./Message.jsx";
import { generatetoken } from "./data";
import { setToken, getToken } from "./token";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentScreen, setCurrentScreen] = useState("login");
  const [token, updateToken] = useState(getToken());

  useEffect(() => {
    generatetoken().then((tokendata) => {
      setToken(tokendata);
      updateToken(tokendata);
    });
  }, []);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    generatetoken().then((tokendata) => {
      setToken(tokendata);
      setCurrentScreen("messaging");
    });
  }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  return (
    <div className="main">
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
