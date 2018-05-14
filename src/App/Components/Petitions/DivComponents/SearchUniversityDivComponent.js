import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col} from "react-bootstrap";
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import STRINGS from '../../../Constants/StringConstants';

export default class SearchUniversityDivComponent extends React.Component{
    constructor(props){
        super(props);
    }

    onSearchCredential() {

    }

    onChangeUniversityName(text) {
        //Validation
        if(text != null && text !='') {
            return true;
        } else {
            return false;
        }
    }
  

    render() {
        return(
            <div className="search-university">
                <form>
                <BasicTextfield
                    controlID = "universityname" 
                    labelName = "University Name"
                    controlType = "text"
                    placeholder = "University Name"
                    saveText = {(text) => this.onChangeUniversityName(text)}
                    errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                />
                <Button
                    block
                    bsSize="large"
                    onClick={this.onSearchCredential}
                    className="btn-search-credential">Search for Credentials
                </Button>
                </form>
        </div> 

        );
    }
}