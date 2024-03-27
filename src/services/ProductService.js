import { Validations, ValidationError } from '../utils/Validations.js'; 

class ProductService {
    constructor(ProductRepository) {
        this.productRepository = ProductRepository;
        this.validations = Validations;    
    }

    async create(ProductDetails) {
        try {
            this.validations.validateFields([ProductDetails.name, ProductDetails.description, ProductDetails.price.toString(), ProductDetails.status.toString()]);
                
            const createdProduct = await this.productRepository.create(ProductDetails);
    
            return createdProduct;
        } catch (error) {
            if (error instanceof ValidationError) {
                throw new Error(error.message);
            }
            throw error;
        }
    }

    async getById(id) {
        return await this.productRepository.findById(id);
    }

    async getAll() {
        return await this.productRepository.findAll();
    }

    async update(id, ProductDetails) {
        try {
            this.validations.validateFields([ProductDetails.name, ProductDetails.description, ProductDetails.price.toString(), ProductDetails.status.toString()]);
    
            const updatedProduct = await this.productRepository.update(id, ProductDetails);
            
            return updatedProduct;
        } catch (error) {
            if (error instanceof ValidationError) {
                throw new Error(error.message);
            }
            throw error;
        }
    }

    async delete(id) {
        return await this.productRepository.delete(id);
    }
}

export default ProductService;