const typeDefs = `
scalar Date

    type Result {
        _id: ID
        narcissismLvl: Integer
        user: User
        classification: String
        timestamp: Date
    }

    type Order {
        _id: ID
        purchaseDate: String
        user: User
    }

    type User {
        _id: ID
        email: String
        results: Result
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    input ResultInput {
        _id: ID
        narcissismLvl: Integer
        user: User
        classification: String
        timestamp: Date
    }

    type Query {
        allResults: [Result]
        result(_id: ID): Result
        user: User
        checkout(results: [ResultInput]): Checkout 
    }

    type Mutation {
        addUser(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addResult(narcissimLvl: Integer!, )

    }
`
///MORE TO BE DONE ON THIS PAGE