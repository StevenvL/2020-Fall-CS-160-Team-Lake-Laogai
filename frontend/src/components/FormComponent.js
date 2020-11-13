import React from 'react'
import { Form } from 'react-bootstrap'
import InputLabel from './InputLabel'
import UserInput from './UserInput'
import "../styling.css"

function FormComponent(props){
    return(
        <Form.Group as={props.format}>
            <InputLabel label = {props.label} />            
            <input 
                className = {"form-control " + props.className}
                placeholder = {props.placeholder} 
                setInput = {props.setInput} 
            />
        </Form.Group>
    )
}

export default FormComponent;