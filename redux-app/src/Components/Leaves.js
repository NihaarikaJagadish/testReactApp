import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Button, Row} from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
class LeavesComponent extends Component {
    constructor(props) {
        super(props);
    }
    cardStyle  = {
        margin : 10,
        height:500
    }

    titleStyle = {
        color : "#316090",
        textAlign: "left",
        fontSize:"25px"

    }

    buttonStyle = {
        color:"#316090",
        fontWeight:"bold",
        float:"left", 
        marginBottom:100
        // padding:0
    }

     events = [{ title: "today's event", date: new Date() },
     {
        title: 'Agent1',
        start: '2021-03-12T10:30:00',
        end: '2021-03-14T11:30:00',
        extendedProps: {
          department: ''
        },
        color: "#8ecae6"
    },
    {
        title: 'Agent2',
        start: '2021-03-13T10:30:00',
        end: '2021-03-14T11:30:00',
        extendedProps: {
          department: ''
        },
        color: "#83c5be"
    },
    {
        title: 'Agent3',
        start: '2021-03-01T08:30:00',
        end: '2021-03-04T11:30:00',
        extendedProps: {
          department: ''
        },
        color: "#83c5be"
    },
    {
        title: 'Agent3',
        start: '2021-03-16T08:30:00',
        end: '2021-03-18T11:30:00',
        extendedProps: {
          department: ''
        },
        color: "#8ecae6"
    }];
    


    render() {
        return ( 
            <ReactBootStrap.Card className="shadow p-3 mb-5 bg-white rounded" style = {this.cardStyle}>
                 <ReactBootStrap.Card.Title style={this.titleStyle}>Leaves</ReactBootStrap.Card.Title>
             <ReactBootStrap.Card.Body> 
             <FullCalendar
             height={350}
             headerToolbar={ {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listWeek'
              }}
             style={{height:"10",width:"10"}}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        events={this.events}
        locale="us"
      />
      <br/>
      <Row>
      <Button variant="outline-primary" style={this.buttonStyle} >NEW LEAVE</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="outline-primary" style={this.buttonStyle}>APPROVE/REJECT</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="outline-primary" style={this.buttonStyle}>BLOCK DAYS</Button>&nbsp;&nbsp;&nbsp;
      </Row>
      
             </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
        );
    }
}

export default LeavesComponent;