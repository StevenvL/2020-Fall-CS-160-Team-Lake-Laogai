import React from 'react'
import { Form } from 'react-bootstrap'
import InputLabel from './InputLabel'
import UserInput from './UserInput'

function FormComponent(props){
    return(
        <Form.Group as={props.format}>
            <InputLabel label = {props.label} />            
            <UserInput placeholder = {props.placeholder} setInput = {props.setInput}/>
        </Form.Group>
    )
}

export default FormComponent;