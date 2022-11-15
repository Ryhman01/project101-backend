import express from 'express';
import { getUsers, Login, Logout, getUserById, updateUser, deleteUser, addUser } from '../controller/Users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controller/RefreshToken.js';
import { addProject, deleteProject, getProjectById, getProjects, projectCounter, updateProject } from '../controller/Projects.js';
import { addPrice, deletePrice, getPriceById, getPrices, updatePrice } from '../controller/Prices.js';
import { percentage } from '../controller/Percentage.js';

const router = express.Router();

router.post('/login', Login);
router.delete('/logout', Logout);
router.post('/token', refreshToken);

router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/projects', verifyToken, getProjects);
router.get('/projects/:id', verifyToken, getProjectById);
router.post('/project-status', verifyToken, projectCounter);
router.post('/projects', addProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

router.get('/prices', verifyToken, getPrices);
router.get('/prices/:id', verifyToken, getPriceById);
router.post('/prices', addPrice);
router.put('/prices/:id', updatePrice);
router.delete('/prices/:id', deletePrice);

router.post('/percentage', percentage);

export default router;
