const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/xiaoqi";

const userCont = require("./contorollers/user");

const server = express();

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("数据库链接成功 OK");
  })
  .catch(error => {
    console.log("数据库链接失败 no");
  });

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "content-type");
  next();
});

server.post("/sign-up", userCont.postSigUp); //注册
server.post("/sign-in", userCont.postSigIn); //登录

server.listen("9090");
