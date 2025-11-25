const express = require("express");
const Router = express.Router();

const {getData,postData,putData,delData} = require("../Controller/controller");
//const  = require("../Controller/controller");

Router.get("/all", getData);
Router.post("/add", postData);
Router.put("/update/:id",putData)
Router.delete("/delete/:id",delData)

module.exports = Router;
