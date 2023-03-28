import { gql } from 'apollo-server-express';

const typeDefs = gql`
scalar Date
type Product{
    id:ID
    title:String
    detail: String
    date: Date
}

type Query{
    welcome:String
    getProducts:[Product]
    getProduct(id:ID):Product
}
type Mutation{
    addProduct(title:String,detail:String,date:Date):Product
    deleteProduct(id:ID):String
    updateProduct(id:ID,title:String,detail:String,date:Date):Product
}
`
export default typeDefs
