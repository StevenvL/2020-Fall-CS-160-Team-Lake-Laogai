import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Forums from './components/Forums'
import Blogs from './components/Blogs'
import Owner from './components/Owner'
import FindStore from './components/FindStore'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />  
        <Switch>
          <Container className="componentBody">
          <Route path="/" exact component={Home} />
          <Route path="/forums" component={Forums} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/owner" component={Owner} />
          <Route path="/findStore" component={FindStore} />
          <Route path="/login" component={Login}/>
          <Route path="signUp" component={SignUp} />
          </Container>        
        </Switch>            
    </BrowserRouter>
    
  );
}

export default App;
