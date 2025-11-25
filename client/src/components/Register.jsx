import React from "react";

const Register = () => {
  return (
    <div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px"
        }}
      >
        <h4>Register form </h4>
        <label> Name:</label>
        <br />
        <input type="String"></input>
        <br />
        <label> Email:</label>
        <br />
        <input type="String"></input>
        <br />
        <label> password:</label>
        <br />
        <input type="String"></input>
        <br />
        <label>Confirm password:</label>
        <br />
        <input type="String"></input>
        <br />
        <label> DOB:</label>
        <br />
        <input type="date"></input>
        <br />
        <button> Submit</button>
        <p className="mt-4">
          Already a user? <span className="btn">Login here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
