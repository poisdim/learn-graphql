import * as React from 'react';
import {gql} from '@apollo/client';
import {useMutation, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";

const getAllAuthors = gql`
    { 
        authors{
            id
            name
            age
        }
    }
`;

export const AddBook = (props) => {
    const [authors, setAuthors] = useState([]);
    const [currentAuthor, setCurrentAuthor] = useState('');
    const handleChange = (e) => {
        setCurrentAuthor(e.target.value);
    };
    const {data, loading, error} = useQuery(getAllAuthors);
    useEffect(() => {
        if (!loading) {
            setAuthors(data.authors)
        }
    }, [data]);

    return (
        <div>
            <form>
                <div className="field">
                    <label htmlFor="">Book name:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label htmlFor="">Genre:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label htmlFor="">Author:</label>
                    <select value={currentAuthor} onChange={handleChange}>
                        {
                           authors.map(data => <option value={data.name}>{data.name}</option>)
                        }
                    </select>
                </div>
                <button>Add book</button>
            </form>
        </div>
    );
};