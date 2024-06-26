const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
}

type Book {
    bookId: ID
    authors: [Author]!
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me(username: String!): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(author: []!, description: String!, title: String!, bookId: ID!, image: String!, link: String!): User
    removeBook(bookId: ID!): User
}
`;
