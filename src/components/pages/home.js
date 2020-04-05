import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment'
import backgroundImage from "../../../static/assets/images/hellcreekmusicpic.jpg";
import logoImage from "../../../static/assets/images/ladies-uke-night-logo.jpg";
import CalendarImage from "../../../static/assets/images/calendar.jpg"




 
export default class Home extends Component {
    constructor () {
        super()

        // this.state {
        //     img = true
        // }
    }

    // const localizer = momentLocalizer(moment)

    // const MyCalendar = props => (
    //     <div>
    //         <Calendar
    //             localizer={localizer}
    //             events={myEventsList}
    //             startAccessor="start"
    //             endAccessor="end"
    //             style={{ height: 500 }}
    //             />

    //     </div>
    // )
    render() {
        return (
            <div 
            className="home-wrapper-background"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
            >
                {/* <div className={"home-wrapper-background + `url(${logoImage})`"}></div> */}
                {/* <div className="ladies-name"></div>
                <div className="uke-name"></div>
                <div className="night-name"></div> */}
                <div className="date">Next Ladies Night!<br/>
                May 8, 2020<br/><br/>
                @ 7:00 pm</div>
                <div className="logo-wrapper">
                <img className="logo" src={logoImage}
                ></img></div>
                
                <Link to="/"></Link>
            </div>
        );
    }
}