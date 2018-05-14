import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col} from "react-bootstrap";
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import STRINGS from '../../../Constants/StringConstants';
import cacheResponse from '../../../Cache/CacheResponse';
import uploadCredentialModel from '../../../DataModels/UploadCredentialModel';

export default class PasswordDivComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
    }

    onChangeSchoolName(text) {
        //Validation
        uploadCredentialModel.setSchoolName(text);
        return true;
      }
  

    onChangeDegreeAwarded(text) {
        //Validation
        uploadCredentialModel.setDegreeAwarded(text);
        return true;
    }

    onChangeDateAwarded(text) {
        //Validation
        
        uploadCredentialModel.setDateAwarded(text);
        return true;
    }

    onSchoolDetailsSave() {
        
    }

    onRequestVerification(){

    }

    render() {
        return(
            <div className="upload-credential-details">
                <form onSubmit={this.onSchoolDetailsSave}>
                <BasicTextfield
                    controlID = "schoolname" 
                    labelName = "School Name"
                    controlType = "text"
                    placeholder = "School Name"
                    saveText = {(text) => this.onChangeSchoolName(text)}
                    errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                />
                <BasicTextfield
                    controlID = "degreeAwarded" 
                    labelName = "Degree Awarded"
                    controlType = "text"
                    placeholder = "ex. Masters of Business Administration"
                    saveText = {(text) => this.onChangeDegreeAwarded(text)}
                    errorMessage = {STRINGS.TEXT_MISMATCH_ERROR}
                />
                <BasicTextfield
                    controlID = "dateAwarded" 
                    labelName = "Date Awarded"
                    controlType = "text"
                    placeholder = "MM/DD/YYYY"
                    saveText = {(text) => this.onChangeDateAwarded(text)}
                    errorMessage = {STRINGS.PASSWORDS_MISMATCH_ERROR}
                    classname = "password-textfield"
                    lblName = "confirm-password"
                />
                <Button
                    block
                    bsSize="large"
                    onClick={this.onSchoolDetailsSave}
                    className="btn-save-school">Save Changes
                </Button>
                <div className="verify-credentials">
                    Get your credentials verified
                </div>
                <Button
                    block
                    bsSize="large"
                    onClick={this.onRequestVerification}
                    className="btn-school-request-verify">Request Verification
                </Button>
                </form>
        </div> 

        );
    }
}