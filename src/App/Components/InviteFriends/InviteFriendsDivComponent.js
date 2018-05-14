import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import BasicTextfield from '../Fields/BasicTextfield/BasicTextfield';
import STRINGS from '../../Constants/StringConstants';
import friendItemModel from '../../DataModels/FriendItemModel';



export default class InviteFriendsDivComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeFirstName(text) {
        //Validation
        let fnameValid = friendItemModel.validateText(text);
        console.log("firstnameValid:", fnameValid);
        friendItemModel.setFirstName(text);
        return fnameValid;
    }

    onChangeLastName(text) {
        //Validation"
        let lnameValid = friendItemModel.validateText(text);
        console.log("lastnameValid:", lnameValid);

        friendItemModel.setLastName(text);
        return lnameValid;
    }

    onChangeEmail(text) {
        //Validation
        let emailValid = friendItemModel.validateEmail(text);
        console.log("emailValid:", emailValid);
        friendItemModel.setEmail(text);
        return emailValid;
    }

    render() {
        return(
            <div className="invite-friend">
                <form className="form-inline">
                    <BasicTextfield
                        controlID = "sfirstname" 
                        labelName = "First Name"
                        controlType = "text"
                        placeholder =  {friendItemModel.first_name != ''? friendItemModel.first_name : "First Name"}
                        saveText = {(text) => this.onChangeFirstName(text)}
                        errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                    />
                    <BasicTextfield
                        controlID = "slastname" 
                        labelName = "Last Name"
                        controlType = "text"
                        placeholder = {friendItemModel.last_name != ''? friendItemModel.last_name : "Last Name"}
                        saveText = {(text) => this.onChangeLastName(text)}
                        errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                    />
                    <BasicTextfield
                        controlID = "lemail" 
                        labelName = "Email Address"
                        controlType = "email"
                        placeholder = {friendItemModel.email != ''? friendItemModel.email :"Email Address"}
                        saveText = {(text) => this.onChangeEmail(text)}
                        errorMessage = {STRINGS.EMAIL_VALIDATION_ERROR}
                    />
                </form>

            </div>
        );
    }
}
