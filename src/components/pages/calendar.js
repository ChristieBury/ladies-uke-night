// import React, { Component } from 'react';
// import BigCalendar from 'react-big-calendar';
// import moment from "moment";
// import 'react-big-calendar/lib/sass/react-big-calendar.scss';
// import '../../../src/style/calendar';
// import NewBookingButton from './NewBookingButton';
// import { Link } from "react-router-dom";

// const localizer = BigCalendar.momentLocalizer(moment)

 
// export default class Calendar extends Component {
    // construstor(props) {
    //     super(props);

        //     this.state= {
        //         currentMonth: newDate(),
        //         selectedDate: newDate()

        // };

    

        // this.props.events.map(event => {
        //     return events.push ({
        //         start: new Date(event.start),
        //         end: new Date(event.end),
        //         title:`${event.uke_date}`,
        //         allDay: true
        //     })
        // })
    
        // return events

//     }
    
//     render() {
//         return (
//             <div className="calendar-container"> Ladies Uke Night Calendar
//                 <BigCalendar 
//                     localizer={localizer}
//                     events={this.setDates()}
//                     startAccessor="start"
//                     endAccessor="end"/>
//             </div>
            
//         );
//     }
// }