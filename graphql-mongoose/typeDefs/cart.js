import { gql } from 'apollo-server-express';

const typeDefs = gql`
scalar Date
type Cart{
    id:ID
    title:String
    detail: String
    date: Date
}

type Query{
    welcome:String
    getCarts:[Cart]
    getCart(id:ID):Cart
}
type Mutation{
    addCart(title:String,detail:String,date:Date):Cart
    deleteCart(id:ID):String
    updateCart(id:ID,title:String,detail:String,date:Date):Cart
}
`
export default typeDefs
