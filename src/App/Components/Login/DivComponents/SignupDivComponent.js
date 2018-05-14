import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import '../Login.css';
import '../../../../index.css';
import logo from '../../../Assets/TrustEDLogo.png';
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import BasicDropdown from '../../Fields/BasicDropdown/BasicDropdown';
import LoginContainer from '../LoginContainer';
import STRINGS from '../../../Constants/StringConstants';
import signupModel from '../../../DataModels/SignupModel';
import cacheResponse from '../../../Cache/CacheResponse';

/*
Props:
1 - onSignup :
2 - toggle :
3. menuitems :
*/

export default class SignupDivComponent extends React.Component {
    //menuitems = {"Recruiter":"11", "Institution":"12", "Student":"13"};
    menuitems = {};
    constructor(props) {
        super(props);
    }

    componentWillMount () {
        if (cacheResponse.getGetRoleResponse() != null) {
            this.menuitems = cacheResponse.getGetRoleResponse();
            /*let id1 = this.menuitems["Recruiter"]
            let id2 = this.menuitems["Institution"];
            let id3 = this.menuitems["Student"];*/

            this.menuitems = {"Recruiter":"11", "Institution":"12", "Student":"13"};

            console.log("this.menuitems", this.menuitems);
        }
    }

    onChangeFirstName(text) {
        //Validation
        let fnameValid = signupModel.validateText(text);
        console.log("firstnameValid:", fnameValid);
        signupModel.setFirstName(text);
        return fnameValid;
    }

    onChangeLastName(text) {
        //Validation"
        let lnameValid = signupModel.validateText(text);
        console.log("lastnameValid:", lnameValid);

        signupModel.setLastName(text);
        return lnameValid;
    }

    onChangeEmail(text) {
        //Validation
        let emailValid = signupModel.validateEmail(text);
        console.log("emailValid:", emailValid);
        signupModel.setEmail(text);
        return emailValid;
    }

    onChangePassword(text) {
        //Validation
        let passwordValid = signupModel.validatePassword(text);
        console.log("passwordValid:", passwordValid);
        signupModel.setPassword(text);
        return passwordValid;
      }
  

    onChangeConfirmPasswordName(text) {
        //Validation
        let passwdMatchValid = signupModel.validatePasswordMatch(signupModel.password, text);
        console.log("passwordMatchValid:", passwdMatchValid);

        signupModel.setRepeatPassword(text);
        return passwdMatchValid;
    }

    onChangeRole(text) {
        let roleValid = signupModel.validateRole(text);
        console.log("roleValid:", roleValid);
        signupModel.setRole(text);

        signupModel.setRoleId(this.menuitems[text]);
        this.forceUpdate();

        return roleValid;
    }

    getKeyForText(text) {
        var keys = Object.keys(this.menuitems);
        console.log("keys:", keys);
        var matchingKey = "";
        for(var i = 0; i < keys.length; i++) {
            let key = keys[i];
            console.log("key:", key);
            if (this.menuitems[key] == text) {
                matchingKey = key;
                break;
            }
        }
        return matchingKey;
    }
      
    getSubmitButtonStatus() {
        //console.log("this.state.formValid", this.state.formValid);
    }

    render() {
        let activIndex = this.getKeyForText(this.menuitems["Recruiter"]);

        return(
            <div className="signup">
            <div className="logo">
                <img src={logo} width="206" height="60"/>
            </div>
            <form onSubmit={this.props.onSignup}>
                <BasicTextfield
                    controlID = "sfirstname" 
                    labelName = "First Name"
                    controlType = "text"
                    placeholder = "First Name"
                    saveText = {(text) => this.onChangeFirstName(text)}
                    errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                />
                <BasicTextfield
                    controlID = "slastname" 
                    labelName = "Last Name"
                    controlType = "text"
                    placeholder = "Last Name"
                    saveText = {(text) => this.onChangeLastName(text)}
                    errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                />
                <BasicTextfield
                    controlID = "semail" 
                    labelName = "Email Address"
                    controlType = "email"
                    placeholder = "Email Address"
                    saveText = {(text) => this.onChangeEmail(text)}
                    errorMessage = {STRINGS.EMAIL_VALIDATION_ERROR}
                />
                <BasicTextfield
                    controlID = "spassword" 
                    labelName = "Password"
                    controlType = "password"
                    placeholder = "Password"
                    saveText = {(text) => this.onChangePassword(text)}
                    errorMessage = {STRINGS.PASSWORD_VALIDATION_ERROR}
                />
                <BasicTextfield
                    controlID = "srepeatPassword" 
                    labelName = "Repeat Password"
                    controlType = "password"
                    placeholder = "Repeat Password"
                    saveText = {(text) => this.onChangeConfirmPasswordName(text)}
                    errorMessage = {STRINGS.PASSWORDS_MISMATCH_ERROR}
                />
                <BasicDropdown
                    controlID = "dropdown"
                    labelName = "My Role"
                    title = {signupModel.role.length > 0 ? signupModel.role : "- Select One -"}
                    id = "myrole"
                    menuitems = {this.menuitems}
                    activeIndexId = {activIndex}
                    saveText = {(text) => this.onChangeRole(text)}
                    errorMessage = {STRINGS.MUST_SELECT_ROLE_ERROR}
                />
                <Button
                    block
                    bsSize="large"
                    type="submit"
                    className="btn-primary">Sign Up
                </Button>
            </form>
            <div className="btn-login">Already have an account? <a href="#" onClick={this.props.toggle}>Log In Here</a>
            </div>
        </div> 

        );
    }
}