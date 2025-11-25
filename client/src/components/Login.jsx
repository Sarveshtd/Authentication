import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {
  return (
    <div>
      <form style={{display:"flex", alignItems:"center", flexDirection:"column" , padding:"0px", gap:2}}>
        <h4>Login form </h4>
        <label> Email:</label>
        <br />
        <input type="String"></input><br />
        <label> password:</label>
        <br />
        <input type="String"></input><br />
        <button > Submit</button>
        <p className="mt-4">New user? <span className="btn">Register here</span></p>
      </form>
    </div>
  );
};

export default Login;
