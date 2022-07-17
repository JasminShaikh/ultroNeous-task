const express = require("express");
const Validator = require("../middlewares/validator/authValidator");
const authController = require("../controllers/authController");

const Router = express.Router();

Router.post("/login", Validator.authCheckCredentials, authController.login);

module.exports = Router;
