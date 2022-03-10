import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuthentication } from "./AuthProvider";

const UserInfo = () => {
  const { authData: data, onLogout } = useAuthentication();
  const navigate = useNavigate();

  async function getLoggedUser() {
		const response = await fetch(`/api/auth/getuser`, {
			method: 'GET',
			// The following also for favorite url, for authenticated urls
			credentials: 'include',
			headers: {
				Accept: 'application/json',
			},
		});

		try {
			const data = await response.json();
			// login(data);
		} catch {
			return null;
		}
	}

  const handleClick = () => {
    if (data.data.name) {
      onLogout(data);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="user-info">
      <button className="link-button" onClick={handleClick}>
        {getLoggedUser ? (
          <>
            <div>Welcome, <strong>{data.data.name}!</strong></div>
            <label className="logout">
              <span aria-label="exit icon" role="img">
                ➡️
              </span>
            </label>
          </>
        ) : (
          <label className="login">Log In</label>
        )}
      </button>
    </div>
  );
};

export default UserInfo;