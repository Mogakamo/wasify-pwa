import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import (MongoCl)

const typeDefs = gql 
    `type Query {
        sayHello: String
    }
`
const resolvers = {
    Query: {
        sayHello(parents,args, context) {
            return 'Hello World'
        },
    },
}

export const config = {
    api: {
        bodyParser: false,
    },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
export default apolloServer.createHandler({ path: 'api/graphql'})