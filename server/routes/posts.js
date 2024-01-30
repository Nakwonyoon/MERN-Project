import express from 'express';
import { getPosts, creatPost, updatePost, deletePost} from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts)
router.post('/', creatPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

export default router;