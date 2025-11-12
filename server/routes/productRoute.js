import express from 'express';
import { create, list, read, update, remove, listBy, searchFilters } from '../controllers/productController.js';

const router = express.Router();

// @ENDPOINT http://localhost:5000/api
router.post('/product', create);
router.get('/products/:count', list);
router.get('/product/:id', read);
router.put('/product/:id', update);
router.delete('/product/:id', remove);
router.post('/productby', listBy);
router.post('/search/filters', searchFilters);

export default router;