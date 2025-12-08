import React, { useState } from "react";
import axios from "axios"

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pswd: "",
    cpswd: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      name: name === "name" ? value : data.name,
      email: name === "email" ? value : data.email,
      pswd: name === "pswd" ? value : data.pswd,
      cpswd: name === "cpswd" ? value : data.cpswd,
      date: name === "date" ? value : data.date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/data/add", data);
      alert("User registrered sucessfully");
      setData({ name: "", email: "", pswd: "", cpswd: "", date: "" });
    } catch (error) {
      console.log("Error submitting the form", error);
    }
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px",
        }}
      >
        <h4>Register form </h4>
        <label>Name:</label>
        <br />
        <input
          type="String"
          onChange={handleChange}
          name="name"
          value={data.name}
        ></input>
        <br />
        <label> Email:</label>
        <br />
        <input
          type="String"
          onChange={handleChange}
          name="email"
          value={data.email}
        ></input>
        <br />
        <label> password:</label>
        <br />
        <input
          type="String"
          onChange={handleChange}
          name="pswd"
          value={data.pswd}
        ></input>
        <br />
        <label>Confirm password:</label>
        <br />
        <input
          type="String"
          onChange={handleChange}
          name="cpswd"
          value={data.cpswd}
        ></input>
        <br />
        <label> DOB:</label>
        <br />
        <input
          type="date"
          onChange={handleChange}
          name="date"
          value={data.date}
        ></input>
        <br />
        <button onClick={handleSubmit}> Submit</button>
        <p className="mt-4">
          Already a user? <span className="btn">Login here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
