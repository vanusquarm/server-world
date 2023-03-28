import Product from '../models/product.js'
const resolvers = {
    Query: {
        getProducts: async () => {
            const products = await Product.find()
            return products
        },
        getProduct: async (root, args) => {
            const product = await Product.findById(args.id)
            return product
        },
    },
    Mutation: {
        addProduct: async (root, args) => {
            const newProduct = new Product({ title: args.title, detail: args.detail, date: args.date })
            await newProduct.save()
            return newProduct
        },
        deleteProduct: async (root, args) => {
            await Product.findByIdAndDelete(args.id);
            return "The product deleted successfully"
        },
        updateProduct: async (root, args) => {
            const { id, title, detail, date } = args;
            const updatedProduct = {};
            if (title != undefined) {
                updatedProduct.title = title
            }
            if (detail != undefined) {
                updatedProduct.detail = detail
            }
            if (date != undefined) {
                updatedProduct.date = date
            }
            const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true })

            return product;
        },
    }

}

export default resolvers;
