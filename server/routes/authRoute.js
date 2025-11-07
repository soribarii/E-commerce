import express from 'express';
import { register, login, currentUser } from '../controllers/authController.js';
import { registerSchema, loginSchema, validate } from '../utils/Validate.js';

const router = express.Router();

// @ENDPOINT http://localhost:5000/api/register
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/current-user', currentUser);
router.post('/current-admin', currentUser);

export default router;