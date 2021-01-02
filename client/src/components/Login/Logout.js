import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../reducers/userReducer";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const user = useSelector(selectUser);
  return (
    <div className="logout">
      <h1 style={{ color: "lightgray" }}>
        Welcome! <span style={{ color: "white" }}>{user.name}</span>
      </h1>
      <button
        style={{
          cursor: "pointer",
          padding: "7px 15px",
          backgroundColor: "yellow",
          border: "none",
          marginTop: "5px",
          display: "block",
        }}
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
