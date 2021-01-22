import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const Update = (props) => {
    const {id} = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                console.log(res);
                navigate("/")
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
            <p>Edit this author:</p>
        {loaded && (
            <>
            <AuthorForm 
                onSubmitProp={updateAuthor} 
                initialName = {author.name} 
            />
            { 
                errors?.name && (
                    <span style = {{color: "red"}}>{errors.name?.message}</span>
                )
            }
            </>
        )}
        
    </div>
)
}

export default Update;