import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/userReducer";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Enter the name");
    } else if (!email) {
      alert("Please Enter Email Id");
    } else if (!password) {
      alert("Please enter the password");
    } else {
      dispatch(
        login({
          name: name,
          email: email,
          password: password,
          isLoggedIn: true,
        })
      );
    }
  };
  return (
    <div className="login">
      <form action="" className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default Login;
