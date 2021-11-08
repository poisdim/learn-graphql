import * as React from 'react';
import {gql} from '@apollo/client';
import {useMutation, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {AddBook} from "./AddBook";

const getAllBooks = gql`
    {
        books{
            id
            name
            genre
        }
    }
`;


export const BookList = (props) => {
    const {data, loading, error} = useQuery(getAllBooks);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        if (!loading) {
            setBooks(data.books)
        }
    }, [data]);
    return (
        <div>
            <ul className="book-list">
                {books.map(data => <li key={data.id}>{data.name}</li>)}
            </ul>
            <AddBook/>
        </div>
    );
};