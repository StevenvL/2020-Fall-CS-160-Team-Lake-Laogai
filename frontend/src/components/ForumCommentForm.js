import React, {useState} from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Axios from 'axios'
import FormComponent from '../components/FormComponent'

function ForumCommentForm(props){
	
	const [comment, setComment] = useState('')

 	const url = "http://localhost:8000/forums/post/comment"
    const userInputData = {comment: comment, postID: props.postid};
    const sendData = () => {
        Axios.post(url, userInputData)  // post request to api
        .then(res => console.log('Data Sent'))
        .catch(err => console.log(err)) 
    }


	return(
		<Col>
			<Form>
				<FormComponent 
                    label="Comment"
                    placeholder="Share you comment here! " 
                    setInput={setComment}
                />
				<Button variant="primary" type="submit" className="float-right" onClick={sendData}>Comment</Button>
			</Form>
			</Col>
		)
	
}

export default ForumCommentForm