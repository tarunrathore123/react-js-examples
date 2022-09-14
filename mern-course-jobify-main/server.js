import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import "express-async-errors";

import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(express.json()); // express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
const __dirname = dirname(fileURLToPath(import.meta.url));
// only when ready to deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(helmet()); // to secure headers
app.use(xss()); // prevent XSS attacks
app.use(mongoSanitize());

// auth routes
import authRouter from "./routes/authRoutes.js";
app.use("/api/v1/auth", authRouter);

import jobsRouter from "./routes/jobsRoutes.js";
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("/", (req, res) => {
  res.send("its goodw");
});

if (process.env.NODE_ENV !== "production") {
  // app.use(morgan("dev"));
}

// only when ready to deploy
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
      // console.log(db);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
