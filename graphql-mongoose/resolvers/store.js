import Store from './models/store.js'
const resolvers = {
    Query: {
        welcome: () => {
            return "Welcome to appstore"
        },
        getStores: async () => {
            const stores = await Store.find()
            return stores
        },
        getStore: async (root, args) => {
            const store = await Store.findById(args.id)
            return store
        },
    },
    Mutation: {
        addStore: async (root, args) => {
            const newStore = new Store({ title: args.title, detail: args.detail, date: args.date })
            await newStore.save()
            return newStore
        },
        deleteStore: async (root, args) => {
            await Store.findByIdAndDelete(args.id);
            return "The store deleted successfully"
        },
        updateStore: async (root, args) => {
            const { id, title, detail, date } = args;
            const updatedStore = {};
            if (title != undefined) {
                updatedStore.title = title
            }
            if (detail != undefined) {
                updatedStore.detail = detail
            }
            if (date != undefined) {
                updatedStore.date = date
            }
            const store = await Store.findByIdAndUpdate(id, updatedStore, { new: true })

            return store;
        },
    }

}

export default resolvers;
