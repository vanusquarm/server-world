import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    detail: String,
    date: Date
}, { timestamps: true })

const Cart = mongoose.model('cart', cartSchema);
export default Cart;
