import React from 'react';
import { Container, Jumbotron, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function FindStore(){
    const dummyStores = ["boba", "sugar"]
    return(
        <Container>
            <Jumbotron className="search-boba">
               <form className="col-lg-6 offset-lg-3 search-form" action="POST">
                    <input className="form-control mb-2 mr-sm-2" type="search" placeholder="Search Boba Store" />
                    <button className="btn btn-normal my-2 my-sm-0" type="submit">Search</button>
                </form>   
            </Jumbotron>     

           
            <ButtonGroup size="lg" className="mb-2">
                <Button className="btn-filter">Organic</Button>
                <Button>Black Tea</Button>
                <Button>Green Tea</Button>
                <Button>Alternative Milk</Button>
                <Button>Oolong Tea</Button>
                <Button>Brown Sugar</Button>

            </ButtonGroup>  

           
            <ul>
                {dummyStores.map(function(name, index){
                    return <li key={ index }> 
                        <Link to={`/stores/${name}`}>{name}</Link></li>;
                  })}
            </ul>
        </Container>
        
    )
}

export default FindStore;