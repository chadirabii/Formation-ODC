const mongoose = require("mongoose");
const UserModel = mongoose.model("User");

const getAllUsers = (request, response) => {
  UserModel.find().exec((error, users) => {
    if (error) {
      response.status(400).json(error);
    } else {
      if (users) {
        response.status(201).json(users);
      } else {
        return response.status(404).json({
          message: "user not found",
        });
      }
    }
  });
};

const readUser = (request, response) => {
  const userid = request.params.userid;
  UserModel.findById(userid).exec((err, user) => {
    if (!user) {
      return response.status(404).json({
        message: "user not found",
      });
    } else if (err) {
      return response.status(404).json(err);
    }
    response.status(200).json(user);
  });
};

const createUser = (request, response) => {
  console.log(request.body.firstName);
  UserModel.create(
    {
      name: {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
      },
      departement: request.body.departement,
      email: request.body.email,
      phone: request.body.phone,
      adress: {
        street: request.body.street,
        state: request.body.state,
        zipCode: request.body.zip,
      },
    },
    (error, contact) => {
      if (error) {
        response.status(400).json(error);
      } else {
        response.status(201).json(contact);
      }
    }
  );
};

const updateUser = (request, response) => {
  const userid = request.params.userid;

  UserModel.findById(userid).exec((error, user) => {
    if (!user) {
      return response.status(404).json({
        message: "userid not found",
      });
    } else if (error) {
      return response.status(400).json(error);
    }
    user.name.firstName = request.body.firstName;
    user.name.lastName = request.body.lastName;
    user.departement = request.body.departement;
    user.email = request.body.email;
    user.phone = request.body.phone;
    user.adress.street = request.body.street;
    user.adress.city = request.body.city;
    user.adress.state = request.body.state;
    user.adress.zip = request.body.zip;
    user.save((error, user) => {
      if (error) {
        response.status(404).json(error);
      } else {
        response.status(200).json(user);
      }
    });
  });
};

const deleteUser = (request, response) => {
  const { userid } = request.params;
  if (userid) {
    UserModel.findByIdAndRemove(userid).exec((error, user) => {
      if (error) {
        return response.status(404).json(error);
      }
      response.status(200).json({ message: "user deleted" });
    });
  } else {
    response.status(404).json({ message: "No user" });
  }
};

module.exports = {
  getAllUsers,
  readUser,
  createUser,
  updateUser,
  deleteUser,
};
