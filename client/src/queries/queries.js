import {gql} from '@apollo/client';

export const getAllAuthors = gql`
    {
        authors{
            id
            name
            age
        }
    }
`;

export const getAllBooks = gql`
    {
        books{
            id
            name
            genre
        }
    }
`;
export const getBook = gql`
    query($id:ID!){
        books(id:$id){
            id
            name
            genre
            author{
                id
                name
                age
            }
        }
    }
`;


export const addNewBook = gql`
    mutation($name:String!,$genre:String!,$authorId:ID!) {
        addBook(name:$name,genre:$genre,authorId:$authorId){
            name
            genre
        }
    }

`;

export const addNewAuthor = gql`
    mutation($name:String!,$age:Int!) {
        addBook(name:$name,age:$age){
            name
            age
        }
    }
`;