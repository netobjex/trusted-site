import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col} from "react-bootstrap";
import BasicTextfield from '../../../Components/Fields/BasicTextfield/BasicTextfield';
import STRINGS from '../../../Constants/StringConstants';
import searchModel from '../../../DataModels/SearchModel';

export default class PasswordDivComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
    }

    onChangeFirstName(text) {
        //Validation
        let fnameValid = searchModel.validateText(text);
        console.log("firstnameValid:", fnameValid);
        searchModel.setFirstName(text);
        return fnameValid;
    }

    onChangeMiddleName(text) {
        //Validation"
        let mnameValid = searchModel.validateText(text);
        console.log("middlenameValid:", mnameValid);

        searchModel.setMiddleName(text);
        return mnameValid;
    }

    onChangeLastName(text) {
        //Validation"
        let lnameValid = searchModel.validateText(text);
        console.log("lastnameValid:", lnameValid);

        searchModel.setLastName(text);
        return lnameValid;
    }

    render() {
        return(
            <div className="search-credential">
                <form onSubmit={this.props.onSearchCredential}>
                <BasicTextfield
                    controlID = "firstname" 
                    labelName = "First Name"
                    controlType = "text"
                    placeholder = "First Name"
                    saveText = {(text) => this.onChangeFirstName(text)}
                    errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                />
                <BasicTextfield
                    controlID = "middlename" 
                    labelName = "Middle Initial (Optional)"
                    controlType = "text"
                    placeholder = "Middle Initial"
                    saveText = {(text) => this.onChangeMiddleName(text)}
                    errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                />
                 <BasicTextfield
                    controlID = "lastname" 
                    labelName = "Last Initial (Optional)"
                    controlType = "text"
                    placeholder = "Last Name"
                    saveText = {(text) => this.onChangeLastName(text)}
                    errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                />
                <Button
                    block
                    bsSize="large"
                    type="submit"
                    className="btn-primary">Search for Credentials
                </Button>
                </form>
        </div> 

        );
    }
}