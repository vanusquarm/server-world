import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    'id': {type:Number,required:true}
    'name':String,
    'field':String
}, { timestamps: true })

const Category = mongoose.model('category', categorySchema);
export default Category;
