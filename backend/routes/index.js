var express = require("express");
var router = express.Router();

const {
  getAllUsers,
  readUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.route("/users").get(getAllUsers).post(createUser);

//read, update and delete specific user
router.route("/users/:userid").get(readUser).put(updateUser).delete(deleteUser);

module.exports = router;
