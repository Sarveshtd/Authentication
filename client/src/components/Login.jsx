import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {
  return (
    <div>
      <form>
        <label> Email:</label>
        <br />
        <input type="String"></input><br />
        <label> password:</label>
        <br />
        <input type="String"></input><br />
        <button className="btn btn-primary"> Submit</button>
      </form>
    </div>
  );
};

export default Login;
