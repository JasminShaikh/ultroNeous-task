const mongoose = require("mongoose");
const { SCHEMA } = require("../helpers/constants");
const Schema = mongoose.Schema;

const userPropertySchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    property_id: {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserProperty = mongoose.model("UserProperty", userPropertySchema);

module.exports = UserProperty;
