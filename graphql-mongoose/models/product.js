import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const productSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: true
    },
    price: Number,
    discount_price: Number,
    description: String,
    ingredients: String,
    capacity: Number,
    featured: Number,
    market_id: Number
}, { timestamps: true })

const Product = mongoose.model('product', productSchema);
export default Product;
