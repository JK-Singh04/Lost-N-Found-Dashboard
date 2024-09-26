import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
import User from '../models/user.model.js'; // Add this import to fetch user role if necessary

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }

    // Fetch user details to get isAdmin flag if not in the token
    const dbUser = await User.findById(user.id);
    req.user = {
      id: user.id,
      isAdmin: dbUser.isAdmin,  // Assuming isAdmin is stored in the user model
    };

    next();
  });
};
