import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import imageFile from "../../src/mapLogo.png";
class NavBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    styles = {
        fontStyle: "italic",
        color: "purple",
    }

    imgStyle = {
      width: 10,
      height:5
    }

    navLinkStyles = {
      color: "white",
      fontWeight: 'bold'
    }

    circleStyle = {
      marginTop:10,
      marginLeft:10,
      display:"inline-block",
      backgroundColor: "yellow",
      borderRadius: "50%",
      width:22,
      height:22,
    };

    render(){
        return (
          <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="#home"><img src= {imageFile}/></ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link style = {this.navLinkStyles} href="#deets">HOME</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link style = {this.navLinkStyles} href="#deets">REPORTS</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link style = {this.navLinkStyles} href="#deets">ADP</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link style = {this.navLinkStyles} href="#deets">PIPKINS</ReactBootStrap.Nav.Link>
              <div style={this.circleStyle}>
                LI
      </div>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        
        )
    }
}

export default NavBarComponent;