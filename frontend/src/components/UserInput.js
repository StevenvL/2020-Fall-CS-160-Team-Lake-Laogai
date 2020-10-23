import React, {useState} from 'react'
import {Form }from 'react-bootstrap'

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