import express from 'express';
import {
  getUsers,
  registerUser,
  loginUser,
} from '../controllers/userController.js';
import protect from '../middlewares/protect.js';

const router = express.Router();

router.route('/').get(getUsers).post(registerUser);
router.post('/login', protect, loginUser);

// router.post("/:id");

export default router;
