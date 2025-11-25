const data = require("../Model/input");

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
    const checkId = await data.find({ email: email });
    if (!checkId) {
      return res.send("Email already available");
    }
    const addData = await data.create({
      name,
      email,
      password,
      c_password,
      dob,
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
    const del=await data.findByIdAndDelete(id)
    res.send(`user deleted sucessfully`,del)
  } catch (error) {
    console.log('Error deleting the data',error);
    
  }
};

module.exports = { getData, postData,putData,delData };
