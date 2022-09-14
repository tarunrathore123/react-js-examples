// to run server .js file add
// add   "type": "module",
// in package.json

import path from "path";
import express from "express";

const app = express();

const __dirname = path.resolve();
// console.log(__dirname);
// app.use(express.static(path.join(__dirname, "/frontend/build")));

// app.get("*", (req, res) =>
//   res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
// );
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in 5000`));
