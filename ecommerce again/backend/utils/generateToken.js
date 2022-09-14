import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "SECRET_KEY", { expiresIn: "30d" });
};

export default generateToken;
