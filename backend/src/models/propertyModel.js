const mongoose = require("mongoose");
const { SCHEMA } = require("../helpers/constants");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    type: {
      type: String,
      enum: [
        SCHEMA.PROPERTY_TYPE.FLAT,
        SCHEMA.PROPERTY_TYPE.BUNGALOW,
        SCHEMA.PROPERTY_TYPE.VILLA,
      ],
    },
    address: { type: String },
    price: { type: String },
    images: [
      {
        path: { type: String },
      },
    ],
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
