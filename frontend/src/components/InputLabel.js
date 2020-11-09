import React from 'react'
import { Form } from 'react-bootstrap'
import "../styling.css"

function InputLabel(props){
    return(
        <Form.Label>{props.label}</Form.Label>
    )
}

export default InputLabel;