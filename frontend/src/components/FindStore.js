import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap'

function FindStore(){
    return(
        <Container>
            <Jumbotron className="search-boba">
               <form className="col-lg-6 offset-lg-3 search-form">
                    <input className="form-control mb-2 mr-sm-2" type="search" placeholder="Search Boba Store" />
                    <button className="btn btn-normal my-2 my-sm-0" type="submit">Search</button>
                </form>   
            </Jumbotron>       
        </Container>
        
    )
}

export default FindStore;