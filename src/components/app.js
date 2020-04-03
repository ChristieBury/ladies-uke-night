import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/homehome";
import Contact from ".pages/home";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Ladies Uke Night</h1>
        <h2>Hell Creek Music & More</h2>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
