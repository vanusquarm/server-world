import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const storeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    detail: String,
    date: Date
}, { timestamps: true })

const Store = mongoose.model('store', storeSchema);
export default Store;
