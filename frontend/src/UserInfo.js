import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuthentication } from "./AuthProvider";

const UserInfo = () => {
  const { authData, onLogout } = useAuthentication();
  const navigate = useNavigate();

  const handleClick = () => {
    if (authData.username) {
      onLogout();
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="user-info">
      <button className="link-button" onClick={handleClick}>
        {authData.username ? (
          <label className="logout">
            <strong>Username</strong>: {authData.username}{" "}
            <span aria-label="exit icon" role="img">
              ➡️
            </span>
          </label>
        ) : (
          <label className="login">Log In</label>
        )}
      </button>
    </div>
  );
};

export default UserInfo;
