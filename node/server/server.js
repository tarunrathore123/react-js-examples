import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("in middleware");
  next();
});
app.use((req, res, next) => {
  console.log("in another middleware");
  next();
});
app.get("/", (req, res) => {
  res.send("<h1>Hi there!</h1>");
});

app.listen(5000, () => {
  console.log("started");
});
