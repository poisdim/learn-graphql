import * as React from 'react';
import {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {AddBook} from "./AddBook";
import {getAllBooks} from "../queries/queries";


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