import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Forums from "../src/pages/Forums";
import Blogs from "../src/pages/Blogs";
import Owner from "../src/pages/Owner";
import FindStore from "../src/pages/FindStore";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/forums" component={Forums} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/owner" component={Owner} />
        <Route path="/findStore" component={FindStore} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
