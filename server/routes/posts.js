import express from 'express';
import { getPosts, creatPost, updatePost } from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts)
router.post('/', creatPost)
router.patch('/:id', updatePost)

export default router;