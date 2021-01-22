import React, { useState } from 'react';
import {navigate} from '@reach/router'


const AuthorForm = props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    
    const onSubmitHandler  = e => {
        e.preventDefault();
        onSubmitProp ({name});
    }

    const onCancelHandler = e => {
        e.preventDefault();
        navigate("/")
    }

    return(
        <form onSubmit = {onSubmitHandler}>
            <div className = "form-group" style = {{display: "inline-block", border: "1px solid black", padding: "5px 20px 5px 5px"}} >
                <label>Name</label>
                <input
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange = {(e) => {setName(e.target.value)}}
                    className = "form-control col-12 mb-2"/>
                <button className = "btn btn-primary ml-2 btn-sm" type = "submit">Submit</button>
                <button className = "btn btn-primary ml-2 btn-sm" type = "button" onClick = {onCancelHandler} >Cancel</button>
            </div>
        </form>
    )
}

export default AuthorForm;