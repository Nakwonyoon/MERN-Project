import express from 'express';
import { getPosts, creatPost } from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts)
router.post('/1', creatPost)


export default router;