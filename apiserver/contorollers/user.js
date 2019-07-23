const UserModel = require("../models/User");

// 注册

const postSigUp = (req, res) => {
  const user = new UserModel(req.body);
  user
    .save()
    .then(() => {
      res.send({
        code: 0,
        msg: "OK"
      });
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: error.message
      });
    });
};

// 登录

const postSigIn = (req, res) => {
  UserModel.findOne(req.body)
    .then(data => {
      if (data) {
        res.send({
          code: 0,
          msg: "OK"
        });
      } else {
        res.send({
          code: -1,
          msg: "用户名或密码错误"
        });
      }
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: error.message
      });
    });
};

module.exports = {
  postSigUp,
  postSigIn
};
