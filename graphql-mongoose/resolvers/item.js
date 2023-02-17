import Item from './models/item.js'
const resolvers = {
    Query: {
        getItems: async () => {
            const items = await Item.find()
            return items
        },
        getItem: async (root, args) => {
            const item = await Item.findById(args.id)
            return item
        },
    },
    Mutation: {
        addItem: async (root, args) => {
            const newItem = new Item({ title: args.title, detail: args.detail, date: args.date })
            await newItem.save()
            return newItem
        },
        deleteItem: async (root, args) => {
            await Item.findByIdAndDelete(args.id);
            return "The item deleted successfully"
        },
        updateItem: async (root, args) => {
            const { id, title, detail, date } = args;
            const updatedItem = {};
            if (title != undefined) {
                updatedItem.title = title
            }
            if (detail != undefined) {
                updatedItem.detail = detail
            }
            if (date != undefined) {
                updatedItem.date = date
            }
            const item = await Item.findByIdAndUpdate(id, updatedItem, { new: true })

            return item;
        },
    }

}

export default resolvers;
