const data = require("../Model/input");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getData = async (req, res) => {
  try {
    const findData = await data.find({});
    res.send(findData, "Data fetched sucessfuly");
  } catch (error) {
    console.log(`Something went wrong`);
  }
};

const postData = async (req, res) => {
  try {
    const { name, email, password, c_password, dob } = await req.body;

    if (!name || !email || !password || !c_password || !dob) {
      return res.send("Enter missing fields");
    }

    if (!password || !c_password) {
      return res.send("Passowrd mismatch");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const checkId = await data.find({ email: email });
    if (!checkId) {
      return res.send("Email already available");
    }
    const addData = await data.create({
      name,
      email,
      password: hashedPassword,
      dob,
    });
    console.log("JWT SECRET =", process.env.JWT_SECRETKEY);


    //const addData=new data({name,email,password: hashedPassword,dob})

    const token = jwt.sign({ id: addData._id }, process.env.JWT_SECRETKEY, {      expiresIn: "7d"    });

    res.cookie("token", token, {
      htttpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).send("User created sucessfully");
  } catch (error) {
    console.log(`Error adding data`, error);
  }
};

const putData = async (req, res) => {
  try {
    const getId = await req.params.id;
    const { name, dob } = await req.body;
    const updated = await data.findByIdAndUpdate(getId, { name, dob });
    res.send(updated, "User updated sucessfully");
  } catch (error) {
    res.send(`Error while updating data`, error);
  }
};

const delData = async (req, res) => {
  try {
    const getId = await req.params.id;
    const del = await data.findByIdAndDelete(id);
    res.send(`user deleted sucessfully`, del);
  } catch (error) {
    console.log("Error deleting the data", error);
  }
};

const userLogin = async (req, res) => {
  const { email, password } = await req.body;

  if (!email || !password) {
    return res.json("Enter missing fields");
  }
  try {
    const checkEmail = await data.findOne({ email });

    if (!checkEmail) {
      return res.send("Email id is not available");
    }

    const isMatch=await bcrypt.compare(password,checkEmail.password)
    if(!isMatch){
      return res.send("Password mismatch")
    }

    const token=jwt.sign({id:data._id},JWT_SECRETKEY,{expiresIn:"7d"})
    res.cookie("token",token,{
      httpOnly:true,
      secure:process.env.NODE_ENV
    })

  } 
  catch (error) {
    return res.send("Error occured", error);
  }
};

module.exports = { getData, postData, putData, delData };
