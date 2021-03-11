import React, { Component } from 'react';
import {Card, Accordion, Button,Row,Col} from "react-bootstrap";
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AlertDialogSlide from "./PostDialog";
import MaterialUIPickers from "./DateTimeComponent";
class GlobalAnnouncement extends Component {
    constructor(props) {
        super(props);
    }
    cardStyle  = {
        margin : 10,
        height:500
    }

    cardStyle1  = {
        margin : 10
    }

    titleStyle = {
        color : "#316090",
        textAlign: "left",
        fontSize:"25px"
    }

    accordToggle = {
        backgroundColor:"#f9f7fe",
        color:"#316090",
        textAlign: "left"
    }

    cardBody = {
        margin : 10,
        height: "500px",
        overflowY:'scroll'
    }

    render() {

        
        var arr = ["This is the first card","This is the first card","This is the second card","This is the second card","This is the second card","This is the second card","This is the second card","This is the second card"];
        var responseData = [
            {
                "id": 397,
                "title": "testing",
                "body": "<p>Please enter here. Hello</p>",
                "attachments": [],
                "created_by": 13,
                "created_on": "2021-03-10T01:31:51.132581Z",
                "archived": false,
                "start_from": "2021-03-10T01:26:40Z",
                "end_on": "2021-03-19T00:26:00Z",
                "team": 4,
                "team_name": "3Group_S1",
                "received_count": 62,
                "view_count": 0
            },
            {
                "id": 394,
                "title": "219 post",
                "body": "<p>test</p>",
                "attachments": [],
                "created_by": 13,
                "created_on": "2021-03-10T01:06:50.859516Z",
                "archived": false,
                "start_from": "2021-03-10T01:05:50Z",
                "end_on": "2021-03-14T01:05:00Z",
                "team": 4,
                "team_name": "3Group_S1",
                "received_count": 62,
                "view_count": 0
            },
            {
                "id": 393,
                "title": "a1",
                "body": "<p>aaaaa</p>",
                "attachments": [],
                "created_by": 13,
                "created_on": "2021-03-10T01:03:55.069252Z",
                "archived": false,
                "start_from": "2021-03-10T00:59:34Z",
                "end_on": "2021-03-20T23:59:00Z",
                "team": 4,
                "team_name": "3Group_S1",
                "received_count": 62,
                "view_count": 0
            },
            {
                "id": 392,
                "title": "announcement 1",
                "body": "<p>csvsv</p>",
                "attachments": [],
                "created_by": 13,
                "created_on": "2021-03-10T01:01:49.744041Z",
                "archived": false,
                "start_from": "2021-03-10T00:59:34Z",
                "end_on": "2021-03-12T00:59:00Z",
                "team": 4,
                "team_name": "3Group_S1",
                "received_count": 62,
                "view_count": 0
            },
            {
                "id": 392,
                "title": "announcement 2",
                "body": "<p>csvsv</p>",
                "attachments": [],
                "created_by": 13,
                "created_on": "2021-03-10T01:01:49.744041Z",
                "archived": false,
                "start_from": "2021-03-10T00:59:34Z",
                "end_on": "2021-03-12T00:59:00Z",
                "team": 4,
                "team_name": "3Group_S1",
                "received_count": 62,
                "view_count": 0
            },
            ,
            {
                "id": 392,
                "title": "announcement 3",
                "body": "<p>csvsv</p>",
                "attachments": [],
                "created_by": 13,
                "created_on": "2021-03-10T01:01:49.744041Z",
                "archived": false,
                "start_from": "2021-03-10T00:59:34Z",
                "end_on": "2021-03-12T00:59:00Z",
                "team": 4,
                "team_name": "3Group_S1",
                "received_count": 62,
                "view_count": 0
            }
        ]
        return ( 
            <Card className="shadow p-3 mb-5 bg-white rounded" style = {this.cardBody}>
                <Card.Title style = {this.titleStyle}>
            Global Announcement
                </Card.Title>
                <Card.Body  >
                    <Accordion>
                        {
                            responseData.map((el,index) => {
                                console.log(el["title"]);
                                var temp = new Date(el["start_from"]);
                                temp = temp.toString();
                                console.log(temp.indexOf("1"));
                                temp = temp.substring(0,15);
                                return (
                                    <Card style={this.cardStyle1}>
                                          {/* <h4>hello</h4> */}
                                        <Accordion.Toggle style={this.accordToggle} as={Button} variant="button" eventKey={index.toString()}>
                                        {/* <Icon style={{ fontSize: 30, float:"right" }}>add_circle</Icon> */}
                                        <Row>
                                            <Col>
                                            {el["title"]}
                                            </Col>
                                            <Col>
                                            {temp}
                                            </Col>
                                            <Col>
                                            <Icon style={{ fontSize: 30, float:"right" }}>add_circle</Icon>
                                            </Col>
                                        </Row>
                                       
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey={index.toString()}>
                                        <Card.Body>{el["body"]}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                );
                            })
                        }
                    </Accordion>
                    {/* <Button variant="outline-primary" style={{float:"left", marginBottom:100}} onClick={this.ButtonChange}>POST</Button>{' '} */}
                    <AlertDialogSlide style={{float:"left", marginBottom:100}}/>
                    <br/>
                    <br/>
                </Card.Body>
            </Card>
        );
    }
}

export default GlobalAnnouncement;