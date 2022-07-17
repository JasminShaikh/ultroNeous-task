const { convertToBcrypt } = require("../helpers/encrypt");
const db = require("../models");
require("dotenv").config();

const user = new db.User({
  full_name: "Test",
  username: "test",
  email: "test@gmail.com",
  password: convertToBcrypt("test@123"),
});

db.mongoose
  .connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true })
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });

const seedDB = async () => {
  await db.User.deleteMany({});
  await user.save();
};

seedDB().then(() => {
  db.mongoose.connection.close();
});
