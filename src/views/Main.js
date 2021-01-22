import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { Link } from '@reach/router';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                setAuthors(res.data)
                setLoaded(true);
            });
            console.log("'main' authors", authors)
    }, []);


    return (
        <div>
            <Link style = {{textDecorationLine: "underline"}} to ={"/new"}>
                Add an author
            </Link>
            <br/>
            <p>We have quotes by:</p>
            {loaded && <AuthorList authors = {authors}/>}
        </div>
    )
}

export default Main;