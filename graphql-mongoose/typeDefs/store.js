import { gql } from 'apollo-server-express';

const typeDefs = gql`
scalar Date
type Store{
    id:ID
    title:String
    detail: String
    date: Date
}

type Query{
    welcome:String
    getStores:[Store]
    getStore(id:ID):Store
}
type Mutation{
    addStore(title:String,detail:String,date:Date):Store
    deleteStore(id:ID):String
    updateStore(id:ID,title:String,detail:String,date:Date):Store
}
`
export default typeDefs
