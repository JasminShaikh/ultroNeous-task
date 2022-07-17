const mongoose = require("mongoose");
const { SCHEMA } = require("../helpers/constants");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    full_name: { type: String, required: true },
    status: {
      type: String,
      enum: [SCHEMA.STATUS.ACTIVE, SCHEMA.STATUS.INACTIVE],
      trim: true,
      default: SCHEMA.STATUS.ACTIVE,
    },
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
