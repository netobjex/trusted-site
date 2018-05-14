import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Image} from "react-bootstrap";
import BasicTextfield from '../../Components/Fields/BasicTextfield/BasicTextfield';
import STRINGS from '../../Constants/StringConstants';
import petitionModel from '../../DataModels/PetitionModel';
import SideMenu from '../../Components/SideMenu/SideMenu';

export default class NewPetition extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
    }

    onChangeFirstName(text) {
        //Validation
        let fnameValid = petitionModel.validateText(text);
        console.log("firstnameValid:", fnameValid);
        petitionModel.setFirstName(text);
        return fnameValid;
    }

    onChangeLastName(text) {
        //Validation"
        let lnameValid = petitionModel.validateText(text);
        console.log("lastnameValid:", lnameValid);

        petitionModel.setLastName(text);
        return lnameValid;
    }

    onChangeUniversityName(text) {
        //Validation"
        let unameValid = petitionModel.validateText(text);
        console.log("universitynameValid:", unameValid);

        petitionModel.setUniversityeName(text);
        return unameValid;
    }

    onChangeCity(text) {
        //Validation"
        let cityValid = petitionModel.validateText(text);
        console.log("cityValid:", cityValid);

        petitionModel.setCity(text);
        return cityValid;
    }

    onChangeState(text) {
        //Validation"
        let stateValid = petitionModel.validateText(text);
        console.log("stateValid:", stateValid);

        petitionModel.setState(text);
        return stateValid;
    }

    onChangeZipCode(text) {
        //Validation"
        let zipValid = petitionModel.validateText(text);
        console.log("zipValid:", zipValid);

        petitionModel.setZipCode(text);
        return zipValid;
    }

    onChangeCountry(text) {
        //Validation"
        let countryValid = petitionModel.validateText(text);
        console.log("countryValid:", countryValid);

        petitionModel.setUniversityeName(text);
        return countryValid;
    }

    onChangeStudentId(text) {
        //Validation"
        let studentIdValid = petitionModel.validateText(text);
        console.log("studentIdValid:", studentIdValid);

        petitionModel.setStudentId(text);
        return studentIdValid;
    }

    onChangeCredential(text) {
        //Validation"
        let credentialValid = petitionModel.validateText(text);
        console.log("credentialValid:", credentialValid);

        petitionModel.setCredential(text);
        return credentialValid;
    }

    onUploadCredentialsClick(){
        
    }

    onBackBtnClick() {
        this.props.history.goBack();
    }

    render() {
        return(
            <div>
            <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={12} md={12} lg={3} className="side-menu">
                        <SideMenu
                        path="/newpetition"/>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={9} className="new-petition-main">
                       
                        <div className="profile-back-arrow">
                            <Button
                                block
                                bsSize="large"
                                onClick={this.onBackBtnClick.bind(this)}
                                className="btn-back">
                                <Image src={process.env.PUBLIC_URL + '/Icon/Back-Arrow.png'}/>
                            </Button>
                            <span class="sideText"><h1>Create a New Petition</h1></span>
                            </div>
                            <div className="new-petition-form">
                            <form onSubmit={this.props.onNewPetition}>
                            <BasicTextfield
                                controlID = "universityName" 
                                labelName = "University Name"
                                controlType = "text"
                                placeholder = "University Name"
                                saveText = {(text) => this.onChangeUniversityName(text)}
                                errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                            />
                            <BasicTextfield
                                controlID = "city" 
                                labelName = "City"
                                controlType = "text"
                                placeholder = "City"
                                saveText = {(text) => this.onChangeCity(text)}
                                errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                            />
                            <BasicTextfield
                                controlID = "state" 
                                labelName = "State"
                                controlType = "text"
                                placeholder = "State"
                                saveText = {(text) => this.onChangeState(text)}
                                errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                            />
                            <BasicTextfield
                                controlID = "country" 
                                labelName = "Country"
                                controlType = "text"
                                placeholder = "Country"
                                saveText = {(text) => this.onChangeCountry(text)}
                                errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                            />
                            <BasicTextfield
                                controlID = "zipcodee" 
                                labelName = "Zip Code"
                                controlType = "text"
                                placeholder = "XXXX"
                                saveText = {(text) => this.onChangeZipCode(text)}
                                errorMessage = {STRINGS.ZIPCODE_VALIDATION_ERROR
                                }
                            />
                            <BasicTextfield
                                controlID = "firstname" 
                                labelName = "Your First Name"
                                controlType = "text"
                                placeholder = "First Name"
                                saveText = {(text) => this.onChangeFirstName(text)}
                                errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                            />
                            <BasicTextfield
                                controlID = "lastname" 
                                labelName = "Your Last Name"
                                controlType = "text"
                                placeholder = "Last Name"
                                saveText = {(text) => this.onChangeLastName(text)}
                                errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                            />
                            <BasicTextfield
                                controlID = "studentId" 
                                labelName = "Your Student ID Number"
                                controlType = "text"
                                placeholder = "ex: 12345678"
                                saveText = {(text) => this.onChangeStudentId(text)}
                                errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                            />
                            <div className="optional-btn-text">(Optional)</div>
                            <Button
                                block
                                bsSize="large"
                                onClick={this.onUploadCredentialsClick.bind(this)}
                                className="btn-upload-credential">Upload Credentials to be Verified
                            </Button>
                            <Button
                                block
                                bsSize="large"
                                type="submit"
                                className="btn-primary">Create a New Petition
                            </Button>
                            </form>
                            </div>
                      
                    </Col>
                </Row>
            </Grid>
            </div>

        );
    }
}