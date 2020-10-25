import React, { Component } from 'react';
import { Container} from 'react-bootstrap'
import { Link } from "react-router-dom";



class Forums extends Component{
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }

    // categories is an array of json object and it's fetched from backend database.
    // example of categories: all, health related, recipe, store news, nutrtion facts, general
    componentDidMount(){
        fetch("http://localhost:8000/forums")
           .then(res => res.json())
           .then(categories => this.setState({categories}, () => {
               console.log('Categories fetched')
           }, categories))
    }

    render(){
        return( 
            <Container className="componentBody">
                <h1>Forum Categories</h1>
                <div className="forumCategoriesBox">
                  <ul className="forumCategoryList">
                    {this.state.categories.map((d, i) => {
                        return(
                            <li key={i}><Link to={`/${d.category_name}`}>{d.category_name}</Link></li>
                        )                   
                    })}
                  </ul>
                </div>       
            </Container>
            
        )
    }
}

export default Forums;