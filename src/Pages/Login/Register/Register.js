import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-form">
      <h2>Please Register</h2>
      <form>
        <input type="text" name="name" id="" placeholder="Name" required />
        <input type="email" name="email" id="" placeholder="Email" required />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
      </form>
    </div>
  );
};

export default Register;
