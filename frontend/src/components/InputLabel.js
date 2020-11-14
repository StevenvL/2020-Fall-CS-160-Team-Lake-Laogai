import React from 'react'
import { Form } from 'react-bootstrap'

function InputLabel(props){
    return(
        <Form.Label>{props.label}</Form.Label>
    )
}

export default InputLabel;