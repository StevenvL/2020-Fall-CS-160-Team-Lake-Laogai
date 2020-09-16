import React, { Component } from "react";

class ConnectionTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ""
		};
	}

	testConnection() {
		fetch('http://localhost:8000/users')
		.then(response => response.text())
		.then(json => this.setState({data: json}))
		.catch(err => err)
	}

	componentDidMount() {
		this.testConnection();
	}

	render() {
		return (
			<div>
			<h1>Testing Connection between frontend and backend</h1>
			<p>result fetched: {this.state.data}</p>
			</div>
			);
	}
}

export default ConnectionTest;