import express from 'express';
import { categorySchema, validate } from '../utils/Validate.js';
import { create, list, remove } from '../controllers/categoryController.js';

const router = express.Router();

// @ENDPOINT http://localhost:5000/api
router.post('/category', validate(categorySchema), create)
router.get('/category', list)
router.delete('/category/:id', remove)

export default router;