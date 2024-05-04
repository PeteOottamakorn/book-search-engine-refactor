const typeDefs = `
type User {
    _id: ID
    username: String
    email:
    bookCount: Num
    savedBooks: []
}

type Book {
    bookId:
    authors: [String]!
    description: String
    title: String
    image:
    link:
}

type Auth {
    token:
    user:
}

type Query {

}

type Mutation {
    
}
`;
