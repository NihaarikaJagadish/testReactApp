import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         message: "This is a dummy message"
    //     };
    // }

    styles = {
        fontStyle: "italic",
        color: "purple",
    }

    // ButtonChange = () => {
    //     this.setState({
    //         message: "This is the new message"
    //     });
    // }

    render(){
        return (
            <div className = "App">
                <h3 style={this.styles}>{this.props.message}</h3>
                <button onClick = {this.props.ButtonChange}>Subscribe</button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        message: state.message,
    }
}

const mapDispatchtoProps = (dispatch) => {
    console.log(dispatch);
    return {
        ButtonChange : () => dispatch({type : "message Change"}),
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NewComponent);