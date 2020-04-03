import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoImage from "../../../static/assets/images/ladies-uke-night-logo.jpg";
import contactBackgroundImage from"../../../static/assets/images/ukestrs.jpg";

export default class Contact extends Component {
    constructor () {
        super()
    }
    render() {
        return (
            <div className="grid-wrapper"
                className="contact-background"
                style={{
                    backgroundImage: `url(${contactBackgroundImage})`
                }}>
                <div className="contact-wrapper">
            
        
                {/* <Link to="/contact"></Link> */}
                <div className="left-wrapper">
                <img 
                    className="logo-wrapper" src={logoImage}></img>
                </div>
                <div className="right-wrapper">

                    <div className="contact-wrapper-info">
                    </div>

                    <div className="address-wrapper">101 N Merrill Ave
                    <br/>Glendive, Montana<br/>59330<br/><br/>Phone: 406-377-7977
                    
                   </div>
                    <div className="email-wrapper">
                    <button><a target="_blank" 
                    href= "mailto:hellcreek@midrivers.com?subject=Ladies Uke Night!">
                        Email: hellcreekmusic@midrivers.com</a></button>
                   </div>
                   </div>
                   </div> 

            </div>
        );
    }
}