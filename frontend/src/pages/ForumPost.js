import React, { Component } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import ForumCommentForm from "../components/ForumCommentForm";

class ForumPost extends Component {
	constructor(props){
		super(props);
		this.state = {
			commentForm: false,
			comments: [],
			post: ""
		};
	}

	componentDidMount() {
		this.getComments();
		this.getPost();
	}

	setCommentFormVisible() {
		this.setState({commentForm: true});
	}

	getComments() {
		fetch(`http://localhost:8000/forums/posts/comments/${this.props.match.params.postid}`)
		.then(response => response.json())
		.then(json => this.setState({comments: json}))
		.catch(err => err)
	}

	getPost() {
		fetch(`http://localhost:8000/forums/posts/${this.props.match.params.postid}`)
		.then(response => response.json())
		.then(json => this.setState({post: json[0]}))
		.catch(err => err)
	}


	render() {
		const CommentBtn = () => (<Col xs={{offset:11}}>
					<Button onClick={() => this.setCommentFormVisible()}>Comment</Button>
				</Col>)

		return(
			<Container className="componentBody">
			<a href="/forums">forum</a>/<a href="">{this.props.match.params.category}</a>/<a href="#">{this.state.post.postTitle}</a>
			<h1>{this.state.post.postTitle}</h1>
			<Row>
				<Col>
				<Card>
			  <Card.Img variant="top" src="/logo.png" />
			  <Card.Body>
			    <Card.Subtitle>user name</Card.Subtitle>
			    <Card.Text>
			      Maybe some description on the user.
			    </Card.Text>
			  </Card.Body>
			</Card>
				</Col>

				<Col xs={10}>
				<Card>
				<Card.Title>{this.state.post.postTitle}</Card.Title>
				<Card.Subtitle>{this.state.post.timestamp}</Card.Subtitle>
				<Card.Text>
				{this.state.post.postDescription}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
	            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
	            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
	            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
	            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
	            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
	            culpa qui officia deserunt mollit anim id est laborum.
				</Card.Text>
			</Card>
				</Col>
			</Row>

			<Row>
			{this.state.commentForm? <ForumCommentForm postid={this.props.match.params.postid}/> : <CommentBtn />}
			</Row>

			{this.state.comments.map((entry, index) => (
				<Row key={index} className="mt-1 mb-1">
				<Col>
				<Card>
				<Card.Title></Card.Title>
				<Card.Subtitle>#{index}<span className="float-right">{entry.timestamp}</span></Card.Subtitle>
					<Card.Body>
						<Card.Text>{entry.replyDescription}</Card.Text>
					</Card.Body>
				</Card>
				</Col>
				</Row>
				))}			
	
			</Container>
			)
	}
}

export default ForumPost