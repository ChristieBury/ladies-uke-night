import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

 
export default class ReactContainer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="nav-container">
                <NavLink exact to="/" activeClassName="nav-link-active">
                Home
                </NavLink>

                {/* <NavLink to="/calendar" activeClassName="nav-link-active">
                    Calendar
                </NavLink> */}
                
                <NavLink exact to="/contact" activeClassName="nav-link-active">
                    Contact
                </NavLink>
                
            </div>
        );
    }
}