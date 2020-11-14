import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import "../styling.css"


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: "",
            postBody: "",
            forumCategories: [],
            selectedForumID: 1
        };
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    //Grabs all category names from backend api
    //componentDidMount ensures that we grab data before html loads?
    componentDidMount() {
        fetch(`http://localhost:8000/forums`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let categoryNamesFromApi = data.map(rows => {
                    return { value: rows.forumID, display: rows.category_name }
                });
                this.setState({
                    forumCategories: (categoryNamesFromApi)
                });
            }).catch(error => {
                console.log(error);
            });
    }


    //Will call backend api to post information to database
    //We should probably add some text validation before submission?
    handleSubmit(event) {
        //event.preventDefault(); //Doesn't Refresh page after submit. Prolly need to write some method to reset fields and print whether suceeded or not!
      
        //Need to get userID somehow...
        let userID = 1;
       

        fetch(`http://localhost:8000/forums/post`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                forumCategory: this.state.selectedForumID,
                forumTitle: this.state.postTitle,
                forumBody: this.state.postBody,
                userID: userID
            })
        });
    }

    //Need to change contaner className!!!
    //I want it too look similar but don't know what to change it to.
    render() {
        //console.log(this.state.selectedForumID);
        //console.log(this.state.postTitle);
        return (
            <Container className="login-container login-component">
                <h1>Create a forum post</h1>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="forumCategory">
                        <Form.Label>Select Forum Category</Form.Label>
                        <Form.Control as="select" value = {this.state.selectedForumID} onChange = {e => this.setState({selectedForumID: e.target.value})}>
                            {this.state.forumCategories.map((names) => <option key={names.value} value={names.value}>{names.display}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="forumTitle">
                        <Form.Label>Forum Title</Form.Label>
                        <Form.Control required placeholder="Forum Title" value = {this.state.postTitle} onChange = {e => this.setState({postTitle: e.target.value})} />
                    </Form.Group>

                    <Form.Group controlId="forumBodyGroup">
                        <Form.Label>Forum Body</Form.Label>
                        <Form.Control required as="textarea" value = {this.state.postBody} onChange = {e => this.setState({postBody: e.target.value})} />
                    </Form.Group>

                    <Button href='/createpost' variant="normal" type="submit">
                        Submit
                </Button>
                </Form>
            </Container>
        );
    }
}

export default CreatePost