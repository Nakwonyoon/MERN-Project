import express from 'express';
import { getPosts, creatPost, updatePost, deletePost, likeCount} from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts)
router.post('/', creatPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likeCount)

export default router;