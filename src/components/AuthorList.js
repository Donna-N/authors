import React, {useEffect, useState} from 'react';
import DeleteButton from './DeleteButton';
import {navigate } from '@reach/router';
import axios from 'axios'


const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
                })
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <dl>
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope = "col">Author</th>
                        <th scope = "col">Actions Available</th>
                    </tr>
                </thead>
            {authors.map((author, idx) =>  {
                return (
                    <tbody key = {idx}>
                        <tr>
                            <td>{author.name}</td>
                            <td><button className = "btn btn-primary btn-sm" onClick ={(e) => {navigate("/edit/" + author._id)}}>Edit</button><DeleteButton authorId = {author._id} successCallback = {()=> removeFromDom(author._id)}/></td>
                        </tr>
                    </tbody>
            )})}
            </table>
        </dl>
    )
}

export default AuthorList;
