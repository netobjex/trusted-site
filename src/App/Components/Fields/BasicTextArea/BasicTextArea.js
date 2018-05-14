import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, ControlLabel, Feedback } from "react-bootstrap";
import "../../../Components/Login/Login.css";

/*
Props:
1 - controlID : 
2 - labelName : 
3 - controlType : 
4 - placeholder :
5 - saveText : 
6 - errorMessage :
*/

export default class BasicTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"",
            isValid: true,
            validationState: null,
        }
    }

    render () {
        /*return (
            <FormGroup controlId={this.props.controlId} bsSize="large">
                <ControlLabel>{this.props.labelName}</ControlLabel>
                <FormControl input
                    autoFocus
                    type={this.props.controlType}
                    name = {this.props.controlId}
                    onChange={this.handleTextChange.bind(this)}
                    placeholder={this.props.placeholder}
                />
            </FormGroup>
        )*/
        let errorMessage = "";
        if (this.state.isValid == false) {
            errorMessage = this.props.errorMessage;
        }

        return (
            <FormGroup controlId={this.props.controlId} bsSize="large" validationState={this.state.validationState} className={this.props.classname}>
                <ControlLabel className={this.props.lblName}>{this.props.labelName}</ControlLabel>
                <span className="pwdmustmatch">{errorMessage}</span>
                <FormControl
                    componentClass={this.props.controlType}
                    name = {this.props.controlId}
                    onChange={this.handleTextAreaChange.bind(this)}
                    placeholder={this.props.placeholder}
                />
                <FormControl.Feedback />
            </FormGroup>
        )
    }

    handleTextAreaChange(e) {
        let valid = this.props.saveText(e.target.value);
        console.log("avlid:",valid);
        let validState = (valid == true ) ? "success" : "error";
        this.setState({
            value : e.target.value,
            isValid : valid,
            validationState : validState
        });

        console.log("this.state.validationState:",this.state.validationState);
    }
}