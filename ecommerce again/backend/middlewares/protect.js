import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
const protect = async (req, res, next) => {
  console.log('i am here' + req.headers.authorization);
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log(token);
      const id = jwt.verify(token, 'SECRET_KEY');
      const user = await User.findOne({ id });
      // console.log(user);
      if (user) {
        next();
      } else {
        res.json({ message: 'not authorized' });
      }
    } catch (e) {
      console.log(e);
    }
  }
  res.json({ message: 'token not found, login again' });
};

export default protect;
