import BaseRepository from './BaseRepository.js';
import ProductModel from '../models/Product.js';

class ProductRepository extends BaseRepository {
    constructor () {
        super(ProductModel);
    }
}

export default ProductRepository;