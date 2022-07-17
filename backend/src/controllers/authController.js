const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { compareBcrypt } = require("../helpers/encrypt");
const db = require("../models");
const STATUSCODE = require("../helpers/statusCode");

const login = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res
      .status(STATUSCODE.VALIDATION.CODE)
      .json({ ...err, message: STATUSCODE.VALIDATION.MESSAGE });
  }

  try {
    const userDetails = await db.User.findOne({
      email: req.body.email,
    });

    if (userDetails) {
      const isValidPassword = await compareBcrypt(
        req.body.password,
        userDetails.password
      );

      if (isValidPassword) {
        const token = jwt.sign(
          { user_id: userDetails._id, time: Date() },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "30 days" }
        );
        res.status(STATUSCODE.SUCCESS.CODE).json({
          data: { token: token },
          message: STATUSCODE.SUCCESS.MESSAGE,
        });
      } else {
        res
          .status(STATUSCODE.VALIDATION.CODE)
          .json({ message: "Invalid password!" });
      }
    } else {
      res
        .status(STATUSCODE.VALIDATION.CODE)
        .json({ message: "Invalid username!" });
    }
  } catch (err) {
    return res
      .status(STATUSCODE.UNAUTHORIZE.CODE)
      .json({ error: err.message, message: STATUSCODE.UNAUTHORIZE.MESSAGE });
  }
};

module.exports = {
  login,
};
