import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import '../Login.css';
import '../../../../index.css';
import logo from '../../../Assets/TrustEDLogo.png';
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import LoginContainer from '../LoginContainer';
import STRINGS from '../../../Constants/StringConstants';
import loginModel from '../../../DataModels/LoginModel';

/*
Props:
1 - onLogin :
2 - toggle :
*/

export default class LoginDivComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeEmail(text) {
        //Validation
        let emailValid = loginModel.validateEmail(text);
        console.log("emailValid:", emailValid);
        loginModel.setEmail(text);
        return emailValid;
    }

    onChangePassword(text) {
      //Validation
      let passwordValid = loginModel.validatePassword(text);
      console.log("passwordValid:", passwordValid);
      loginModel.setPassword(text);
      return passwordValid;
    }

    getSubmitButtonStatus() {
        console.log("in getSubmitButtonStatus");
    }

    render () {
        return(
            <div className="Login">
                            <div className="logo">
                                <img src={logo} width="206" height="60"/>
                            </div>
                            <form onSubmit={this.props.onLogin}>
                            <BasicTextfield
                                controlID = "lemail" 
                                labelName = "Email Address"
                                controlType = "email"
                                placeholder = "Enter your email address here"
                                saveText = {(text) => this.onChangeEmail(text)}
                                errorMessage = {STRINGS.EMAIL_VALIDATION_ERROR}
                            />
                            <BasicTextfield
                                controlID = "lpassword" 
                                labelName = "Password"
                                controlType = "password"
                                placeholder = "Enter your password here"
                                saveText = {(text) => this.onChangePassword(text)}
                                errorMessage = {STRINGS.PASSWORD_VALIDATION_ERROR}
                            />
                            <Button
                                block
                                bsSize="large"
                                type="submit"
                                className="btn-primary">Sign In
                            </Button>
                        </form>
                        <div className="btn-signup">Don't have an account? <a href="#" onClick={this.props.toggle}>Sign Up Here</a>
                        </div>
                    </div> 
        );
    }
}