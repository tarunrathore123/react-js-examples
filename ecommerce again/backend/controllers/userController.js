import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js';
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json({
    users,
  });
};
export const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ user, token: generateToken(user._id) });
};
export const loginUser = async (req, res) => {
  // console.log(req.body);
  const user = await User.findOne({ email: req.body.email });
  // console.log(user.matchPassword(req.body.password));
  if (user && (await user.matchPassword(req.body.password))) {
    const t = generateToken(user._id);
    // console.log(t);
    // const u = jwt.verify(t, "SECRET_KEY");
    // console.log(u.id);
    res.json({ user: user, token: t });
  } else {
    res.json({ message: 'incorrect email or password' });
  }
};
