import React, {Component} from 'react';
import {Alert, Button, Image} from 'react-bootstrap';
import errorImg from '../../Assets/error.png';

/* props
alertStyle: success/danger/warning/info
title
message
buttonStyle: primary/success/info/warning/danger
*/

export default class BasicAlert extends React.Component {
    constructor(props) {
        super(props);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        }
    }

    handleDismiss() {
        console.log("Dismiss...");
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show:true});
    }

    render() {
        if(this.state.show == true) {

            console.log("this.props.messg", this.props.messg);
            return (
                <Alert bsStyle={this.props.alertStyle} onDismiss={this.handleDismiss} className="popup-alert">
                    <Image src={errorImg}width="24" height="24" className="errImg"/>
                    <strong>{this.props.title}</strong><hr/>
                    <p>{this.props.messg}</p>
                    <Button className="btn-alert" bsStyle={this.props.buttonStyle} onClick={this.handleDismiss}>{this.props.btnText}</Button>
                </Alert>
            );
        }
        return <Button onClick={this.handleShow}></Button>
    }
}
