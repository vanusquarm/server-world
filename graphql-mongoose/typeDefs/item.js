import { gql } from 'apollo-server-express';

const typeDefs = gql`
scalar Date
type Item{
    id:ID
    title:String
    detail: String
    date: Date
}

type Query{
    welcome:String
    getItems:[Item]
    getItem(id:ID):Item
}
type Mutation{
    addItem(title:String,detail:String,date:Date):Item
    deleteItem(id:ID):String
    updateItem(id:ID,title:String,detail:String,date:Date):Item
}
`
export default typeDefs
