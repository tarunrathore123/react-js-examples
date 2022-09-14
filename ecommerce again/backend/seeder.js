import mongoose from "mongoose";
// import dotenv from "dotenv";
// import colors from "colors";
// import users from "./data/users.js";
import products from "./products.js";
// import User from "./models/userModel.js";
import Product from "./models/productModel.js";
// import Order from "./models/orderModel.js";
// import connectDB from "./config/db.js";

// dotenv.config();

await mongoose.connect(
  "mongodb+srv://1234567890:1234567890@cluster0.erlyh.mongodb.net/ecommerceAgain?retryWrites=true&w=majority"
);

const importData = async () => {
  try {
    // await Order.deleteMany();
    await Product.deleteMany();
    // await User.deleteMany();

    // const createdUsers = await User.insertMany(users);

    // const adminUser = createdUsers[0]._id;

    // const sampleProducts = products.map((product) => {
    //   return { ...product };
    // });
    console.log(products);

    await Product.insertMany(products);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// const destroyData = async () => {
//   try {
//     await Order.deleteMany();
//     await Product.deleteMany();
//     await User.deleteMany();

//     console.log("Data Destroyed!".red.inverse);
//     process.exit();
//   } catch (error) {
//     console.error(`${error}`.red.inverse);
//     process.exit(1);
//   }
// };

importData();

if (process.argv[2] === "-d") {
  //   destroyData();
} else {
  //   importData();
}
