import * as React from 'react';
import {useEffect, useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {addNewBook, getAllAuthors, getAllBooks} from "../queries/queries";


export const AddBook = React.memo(
    (props) => {
        const [addBook] = useMutation(addNewBook,{refetchQueries:[{query:getAllBooks}]});
        const [bookInfo, setBookInfo] = useState({
            name: '', genre: '', authorId: '6189511774c58d7eb415ca23'
        });
        const [authors, setAuthors] = useState([]);
        const handleChange = ({target: {name, value}}) => {
            setBookInfo(state => ({...state, [name]: value}));
        };

        const handleClick = e => {
            e.preventDefault();
            addBook({variables: {...bookInfo}})
                .then(({data}) => console.log(data))
                .catch(e => console.log(e))
            ;
            setBookInfo(state => ({...state, name: '', genre: ''}));
        };
        console.log('render')

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
                        <input name={'name'} value={bookInfo.name} onChange={handleChange} type="text"/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Genre:</label>
                        <input value={bookInfo.genre} name={'genre'} onChange={handleChange} type="text"/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Author:</label>
                        <select name={'authorId'} onChange={handleChange}>
                            {
                                authors.map(data => <option value={data.id} key={data.id}
                                >{data.name}</option>)
                            }
                        </select>
                    </div>
                    <button onClick={handleClick}>Add book</button>
                </form>
            </div>
        );
    }
);