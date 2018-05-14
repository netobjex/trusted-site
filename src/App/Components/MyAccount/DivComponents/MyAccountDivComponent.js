import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import BasicDropdown from '../../Fields/BasicDropdown/BasicDropdown';
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import BasicTextarea from '../../Fields/BasicTextArea/BasicTextArea';
import STRINGS from '../../../Constants/StringConstants';
import myaccountModel from '../../../DataModels/MyAccountModel';
import { createHashHistory } from 'history';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import index from '../../../Actions/index';
import store from '../../../Store/ConfigureStore';
import cacheResponse from '../../../Cache/CacheResponse';
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import PasswordDivComponent from './PasswordDivComponent';

//export const history = createHashHistory();

class MyAccountDivComponent extends React.Component {
    //menuitems = {"1":"Recruiter", "2":"Institution", "3":"Student"};
    menuitems = {};
    constructor(props) {
        super(props);

        this.state = {
            showPasswordDiv: false
        }

        this.changeToNewPassword = this.changeToNewPassword.bind(this);
    }

    componentWillMount () {
        if (cacheResponse.getGetRoleResponse() != null) {
            let response = cacheResponse.getGetRoleResponse();
            /*let id1 = response["Recruiter"];
            let id2 = response["Institution"];
            let id3 = response["Student"];*/

            console.log("role response", response);

            this.menuitems = {"Recruiter":"11", "Institution":"12", "Student":"13"};
            
            if(cacheResponse.getGetMyAccountResponse() != null) {
                myaccountModel.setFirstName(cacheResponse.getGetMyAccountResponse().firstname);
                myaccountModel.setLastName(cacheResponse.getGetMyAccountResponse().lastname);
                myaccountModel.setEmail(cacheResponse.getGetMyAccountResponse().email);
                myaccountModel.setRoleId(cacheResponse.getGetMyAccountResponse().role);
                myaccountModel.setRole(this.getKeyForText(cacheResponse.getGetMyAccountResponse().role));
            }
        }
    }

    componentDidMount() {
        this.props.actions.getMyAccount();
    }

    onChangeFirstName(text) {
        //Validation
        let fnameValid = myaccountModel.validateText(text);
        console.log("firstnameValid:", fnameValid);
        myaccountModel.setFirstName(text);
        return fnameValid;
    }

    onChangeLastName(text) {
        //Validation"
        let lnameValid = myaccountModel.validateText(text);
        console.log("lastnameValid:", lnameValid);

        myaccountModel.setLastName(text);
        return lnameValid;
    }

    onChangeEmail(text) {
        //Validation
        let emailValid = myaccountModel.validateEmail(text);
        console.log("emailValid:", emailValid);
        myaccountModel.setEmail(text);
        return emailValid;
    }

    onChangePassword(text) {
        //Validation
        let passwordValid = myaccountModel.validatePassword(text);
        console.log("passwordValid:", passwordValid);
        myaccountModel.setPassword(text);
        return passwordValid;
    }

    onChangeRole(text) {
        let roleValid = myaccountModel.validateRole(text);
        console.log("roleValid:", roleValid, "text", text);

        myaccountModel.setRole(text);

        console.log("in OnchangeRole:", myaccountModel.role);

        myaccountModel.setRoleId(this.menuitems[text]);
        this.forceUpdate();
    }

    onChangeCompany(text) {
         //Validation
         console.log("company text:", text);
         let companyValid = myaccountModel.validateEmpty(text);
         console.log("companyValid:", companyValid);
 
         myaccountModel.setCompany(text);
         return companyValid;
    }

    onChangeBioDescription(text) {
        //Validation"
        console.log("bioDescription text:", text);
        let descriptionValid = myaccountModel.validateEmpty(text);
        console.log("descriptionValid:", descriptionValid);

        myaccountModel.setBiodescription(text);
        return descriptionValid;
   }

    changeToNewPassword() {
        if (myaccountModel.password != null && myaccountModel.password != '') {
            this.setState({
                showPasswordDiv: !this.state.showPasswordDiv            
            })
        }
    }

    onChangePasswordAPICall() {

        if (myaccountModel.validatePasswordMatch(myaccountModel.newPassword, myaccountModel.confirmNewPassword) && myaccountModel.password!= '') {
            console.log("myaccountModel.password:",myaccountModel.password);
            console.log("myaccountModel.newPassword:",myaccountModel.newPassword);
            console.log("myaccountModel.confirmNewPassword:",myaccountModel.confirmNewPassword);
            this.props.actions.passwordChange(myaccountModel.password, myaccountModel.newPassword);
        }
    }

    getKeyForText(text) {
        var keys = Object.keys(this.menuitems);
        console.log("keys:", keys);
        var matchingKey = "";
        for(var i = 0; i < keys.length; i++) {
            let key = keys[i];
            console.log("key:", key);
            console.log("this.menuitems[key]:", this.menuitems[key]);
            if (this.menuitems[key] == text) {
                matchingKey = key;
                break;
            }
        }
        console.log("matchingKey getForKey:", matchingKey);
        return matchingKey;
    }
    
    handleMyAccountSubmit = event => {
        event.preventDefault();
        console.log("handleMyAccountSubmit: myAccountModel", myaccountModel);
        this.props.actions.updateMyAccount(myaccountModel.formUpdateMyAccountRequest());
    }

    onViewPublicProfile() {
        this.props.history.push("/myprofile");
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

    render() {
        if (this.props.getMyaccountSuccess == true) {
            myaccountModel.setFirstName(cacheResponse.getGetMyAccountResponse().firstname);
            myaccountModel.setLastName(cacheResponse.getGetMyAccountResponse().lastname);
            myaccountModel.setEmail(cacheResponse.getGetMyAccountResponse().email);
            myaccountModel.setRoleId(cacheResponse.getGetMyAccountResponse().role);
            myaccountModel.setRole(this.getKeyForText(cacheResponse.getGetMyAccountResponse().role));
            this.props.actions.resetGetMyAccountAction();
        }
        
        if (this.props.updateMyaccountSuccess == true) {
            myaccountModel.setFirstName(cacheResponse.getGetMyAccountResponse().firstname);
            myaccountModel.setLastName(cacheResponse.getGetMyAccountResponse().lastname);
            myaccountModel.setEmail(cacheResponse.getGetMyAccountResponse().email);
            myaccountModel.setRoleId(cacheResponse.getGetMyAccountResponse().role);
            myaccountModel.setRole(this.getKeyForText(cacheResponse.getGetMyAccountResponse().role));
            this.props.actions.resetUpdateMyAccountAction();
        }
        
        let role = myaccountModel.role;

        console.log("myaccountModel.role:", myaccountModel.role, "role:", role);

        return(
            <div className="my-account">
                <h1>My Account</h1>
                <form className="form-inline" onSubmit={this.handleMyAccountSubmit}>
                    <BasicTextfield
                        controlID = "sfirstname" 
                        labelName = "First Name"
                        controlType = "text"
                        placeholder =  {(myaccountModel.firstname != null && myaccountModel.firstname != null) ? myaccountModel.firstname : "First Name"}
                        saveText = {(text) => this.onChangeFirstName(text)}
                        errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                    />
                    <BasicTextfield
                        controlID = "slastname" 
                        labelName = "Last Name"
                        controlType = "text"
                        placeholder = {(myaccountModel.lastname != null && myaccountModel.lastname != '') ? myaccountModel.lastname : "Last Name"}
                        saveText = {(text) => this.onChangeLastName(text)}
                        errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                    />
                    <BasicTextfield
                        controlID = "lemail" 
                        labelName = "Email Address"
                        controlType = "email"
                        placeholder = {(myaccountModel.email != null && myaccountModel.email != null )? myaccountModel.email :"Email Address"}
                        saveText = {(text) => this.onChangeEmail(text)}
                        errorMessage = {STRINGS.EMAIL_VALIDATION_ERROR}
                    />
                   
                    <BasicDropdown
                        controlID = "dropdown"
                        labelName = "My Role"
                        title = {role}
                        id = "myrole"
                        menuitems = {this.menuitems}
                        activeIndexId = {role}
                        saveText = {(text) => this.onChangeRole(text)}
                        errorMessage = {STRINGS.MUST_SELECT_ROLE_ERROR}
                    />
                    <BasicTextfield
                        controlID = "mycompany" 
                        labelName = "My Company"
                        controlType = "text"
                        placeholder = {(myaccountModel.company != null && myaccountModel.company != '') ? myaccountModel.company : "Your Current Employer"}
                        saveText = {(text) => this.onChangeCompany(text)}
                        errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                        classname = "my-company"
                    />
                    <BasicTextfield
                        controlID = "biodescription" 
                        labelName = "Bio"
                        controlType = "text"
                        placeholder = {(myaccountModel.bioDescription != null && myaccountModel.bioDescription != '') ? myaccountModel.bioDescription : "Write a short description about yourself"}
                        saveText = {(text) => this.onChangeBioDescription(text)}
                        errorMessage = {STRINGS.TEXT_VALIDATION_ERROR}
                        classname = "bio-description"
                    />

                    <div className="clearfix"></div>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                        className="btn-save-change">Save Changes
                    </Button>
                    <div className="clearfix"></div>
                    <Button
                        block
                        bsSize="large"
                        onClick={this.onViewPublicProfile.bind(this)}
                        className="btn-profile">View My Public Profile
                    </Button>
                </form>
                <hr/>
                 <h2>Change Password</h2>
                <form className="form-inline password">
                        <BasicTextfield
                            controlID = "lpassword" 
                            labelName = "Password"
                            controlType = "password"
                            placeholder = "Old Password"
                            saveText = {(text) => this.onChangePassword(text)}
                            errorMessage = {STRINGS.PASSWORD_VALIDATION_ERROR}
                        />
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
                            onClick={this.onChangePasswordAPICall.bind(this)}
                            className="btn-password">Change Password
                        </Button>
                </form>

                {this.props.updateMyaccountPending == true || this.props.changePasswordPending == true ? (
                 <Loader fullPage loading />
        ) : (<div/>) }

            </div>
        
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log('printing state');
    console.log(state);
    return {
        getMyaccountPending: state.MyAccountReducer.getMyaccountPending,

        getMyaccountError: state.MyAccountReducer.getMyaccountError,

        getMyaccountSuccess: state.MyAccountReducer.getMyaccountSuccess,

        updateMyaccountPending: state.MyAccountReducer.updateMyaccountPending,

        updateMyaccountError: state.MyAccountReducer.updateMyaccountError,

        updateMyaccountSuccess: state.MyAccountReducer.updateMyaccountSuccess,

        changePasswordPending: state.MyAccountReducer.changePasswordPending,

        changePasswordSuccess: state.MyAccountReducer.changePasswordSuccess,

        changePasswordError: state.MyAccountReducer.changePasswordError

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(index, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountDivComponent);
ReactDOM.render(MyAccountDivComponent, document.getElementById('root'));
