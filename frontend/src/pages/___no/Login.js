import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthentication } from "../AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuthentication();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (username && password) {
      onLogin({
        username,
        password: (password)
      });

      // Send users back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    }
  };

  return (
    <>
      <div className="control">
        <label for="username">Username</label>
        <input type="text" onChange={handleUsernameChange} value={username} />
      </div>
      <div className="control">
        <label for="password">Password </label>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <div className="control">
        <button className="button" onClick={handleLoginClick}>
          Log in
        </button>
      </div>
    </>
  );
};

export default Login;
