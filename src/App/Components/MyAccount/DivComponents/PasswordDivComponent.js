import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col} from "react-bootstrap";
import logo from '../../../Assets/TrustEDLogo.png';
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import STRINGS from '../../../Constants/StringConstants';
import cacheResponse from '../../../Cache/CacheResponse';
import myaccountModel from '../../../DataModels/MyAccountModel';

export default class PasswordDivComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
    }

    onChangeNewPassword(text) {
        //Validation
        let passwordValid = myaccountModel.validatePassword(text);
        console.log("passwordValid:", passwordValid);
        myaccountModel.setNewPassword(text);
        return passwordValid;
      }
  

    onChangeConfirmPasswordName(text) {
        //Validation
        let passwdMatchValid = myaccountModel.validatePasswordMatch(myaccountModel.newPassword, text);
        console.log("passwordMatchValid:", passwdMatchValid);

        myaccountModel.setConfirmNewPassword(text);
        return passwdMatchValid;
    }

    onHandlePasswordsSubmit() {
        if (myaccountModel.validatePasswordMatch(myaccountModel.newPassword, myaccountModel.confirmNewPassword)) {
          //  this.props.onCallChangePasswordAPI
        }
    }

    render() {
        return(
            <div className="myaccount-password">
                <BasicTextfield
                    controlID = "spassword" 
                    labelName = "New Password"
                    controlType = "password"
                    placeholder = "New Password"
                    saveText = {(text) => this.onChangeNewPassword(text)}
                    errorMessage = {STRINGS.PASSWORD_VALIDATION_ERROR}
                    classname = "password-textfield"
                    lblName = "new-password"
                />
                <BasicTextfield className="password-confirm"
                    controlID = "srepeatPassword" 
                    labelName = "Repeat Password"
                    controlType = "password"
                    placeholder = "Repeat Password"
                    saveText = {(text) => this.onChangeConfirmPasswordName(text)}
                    errorMessage = {STRINGS.PASSWORDS_MISMATCH_ERROR}
                    classname = "password-textfield"
                    lblName = "confirm-password"
                />
                <Button
                    block
                    bsSize="large"
                    onClick={this.props.onCallChangePasswordAPI}
                    className="btn-password">Change Password
                </Button>
        </div> 

        );
    }
}