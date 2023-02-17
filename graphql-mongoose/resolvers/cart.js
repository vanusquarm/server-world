import Cart from './models/Cart.js'
const resolvers = {
    Query: {
        welcome: () => {
            return "Welcome to ckmobile"
        },
        getCarts: async () => {
            const carts = await Cart.find()
            return carts
        },
        getCart: async (root, args) => {
            const cart = await Cart.findById(args.id)
            return cart
        },
    },
    Mutation: {
        addCart: async (root, args) => {
            const newCart = new Cart({ title: args.title, detail: args.detail, date: args.date })
            await newCart.save()
            return newCart
        },
        deleteCart: async (root, args) => {
            await Cart.findByIdAndDelete(args.id);
            return "The cart deleted successfully"
        },
        updateCart: async (root, args) => {
            const { id, title, detail, date } = args;
            const updatedCart = {};
            if (title != undefined) {
                updatedCart.title = title
            }
            if (detail != undefined) {
                updatedCart.detail = detail
            }
            if (date != undefined) {
                updatedCart.date = date
            }
            const cart = await Cart.findByIdAndUpdate(id, updatedCart, { new: true })

            return cart;
        },
    }

}

export default resolvers;
