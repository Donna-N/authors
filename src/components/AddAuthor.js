import React, {useState} from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import {navigate, Link} from '@reach/router';

const NewAuthor = () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState(null);
    
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response)
                setErrors(err.response?.data?.errors)
            })

    }
    return (
        <div>
            <Link style = {{textDecorationLine: "underline"}} to ={"/"}>
                Home
            </Link>
            <br/>
            <p>Add a new author:</p>
            <AuthorForm onSubmitProp = {createAuthor} initialName = ""/>
            { 
                errors?.name && (
                    <span style = {{color: "red"}}>{errors.name?.message}</span>
                )
            }
        </div>
    )
} 
export default NewAuthor;