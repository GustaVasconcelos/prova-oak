import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Boolean, required: true },
});


const ProductModel = model('Product', productSchema);

export default ProductModel;