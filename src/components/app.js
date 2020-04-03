import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ReactContainer from "./pages/container/nav-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Calendar from "./pages/calendar";

export default class App extends Component {
  constructor () {
    super()
}
  render() {
    return (
      <div className='app'>
        <div className="ladies-uke-night">Ladies Uke Night</div>
       
        <h2 className="store-name">Hell Creek Music & More</h2>
        <Router>
          <div>
            <ReactContainer/>
            <Switch>
              <Route exact path="/" component={Home}/>
             
              {/* <Route path="/calendar" component={Calendar}/> */}
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
