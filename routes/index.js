import express from 'express';
import {getUsers, Register, Login, Logout} from '../controller/Users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controller/RefreshToken.js';
import { addProject, getProjects } from '../controller/Projects.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.post('/token', refreshToken);

router.get('/projects', getProjects);
router.post('/projects', addProject);

export default router;