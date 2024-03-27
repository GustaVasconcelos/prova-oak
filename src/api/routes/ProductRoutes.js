import express from 'express';
import ProductController from '../controllers/ProductController.js'; 
import ProductService from '../../services/ProductService.js'; 
import ProductRepository from '../../repositories/ProductRepository.js';

const router = express.Router();

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/', productController.create);
router.patch('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;