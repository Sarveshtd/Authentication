const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());


const Route=require("./Routes/routing")

app.use("/data",Route)

const connectDB = async (req, res) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Validation");
    console.log(`Connected to DB`);
  } catch (error) {
    console.log(`Error while connecting to DB`);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});
