const graphql = require('graphql');
const books = [
    {id: '1', name: "One book", genre: "For younger people", authorId: "1"},
    {id: '2', name: "Two books", genre: "For young people ", authorId: "2"},
    {id: '3', name: "Three books", genre: "For low middle people", authorId: "3"},
    {id: '4', name: "Four books", genre: "For middle people", authorId: "4"},

];
const authors = [
    {id: '1', name: "Person 1", age: 23},
    {id: '2', name: "Person 2", age: 44},
    {id: '3', name: "Person 3", age: 25},
    {id: '4', name: "Person 4", age: 77},
];

const {
    GraphQLSchema,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString, GraphQLID
} = graphql;
const BookType = new GraphQLObjectType({
    name: "BookType",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return authors.find(author => author.id === parent.id)
            }
        }
    })
});
const AuthorType = new GraphQLObjectType({
    name: "AuthorType",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
    })
});


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return books.find(book => book.id === args.id)
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return authors.find(author => author.id === args.id)
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});




