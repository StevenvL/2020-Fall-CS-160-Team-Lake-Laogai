import React from 'react'
import {Form }from 'react-bootstrap'
import "../styling.css"

function UserInput(props){
    return(
        <Form.Control 
            placeholder={props.placeholder}
            onChange={(event) => {
                props.setInput(event.target.value)
            }}        
        />
    )
}

export default UserInput;