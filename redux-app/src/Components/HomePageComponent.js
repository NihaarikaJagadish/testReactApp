import React, { Component } from 'react';
import { Row, Col} from "react-bootstrap";
import GlobalAnnouncement from "./GlobalAnnouncement";
import LeavesComponent from "./Leaves";
import Home from './TabsComponent';
import AlertDialogSlide from './PostDialog';
class HomePageComponent extends Component {
    constructor(props) {
        super(props);
    }

    divStyles = {
        marginTop: 20
    }
    cardStyle  = {
        margin : 10
    }

    render() {
        return ( 
            <div style={this.divStyles}>
                <Row>
                    <Col>
                        <GlobalAnnouncement/>
                    </Col>
                    <Col>
                    <LeavesComponent/>
                    </Col>
                </Row>
                <Row>
                    <Home/>
                </Row>  

            </div>


        );
    }
}

export default HomePageComponent;