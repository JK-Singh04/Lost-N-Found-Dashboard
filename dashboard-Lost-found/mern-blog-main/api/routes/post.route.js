import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getposts, updatepost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getposts', verifyToken, getposts);
router.delete('/deletepost/:postId', verifyToken, deletepost);  // Delete by postId
router.put('/updatepost/:postId', verifyToken, updatepost);    // Update by postId

export default router;
