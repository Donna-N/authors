import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
    const { authorId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res =>{
                successCallback();
            })
        console.log(authorId)
    }
    return(
        <button className = "btn btn-primary btn-sm ml-2" onClick = {deleteAuthor}>
            Delete
        </button>
    )
}

export default DeleteButton;