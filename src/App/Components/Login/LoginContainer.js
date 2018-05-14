import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../../Assets/TrustEDLogo.png';
import '../../../index.css';
import BasicTextfield from '../Fields/BasicTextfield/BasicTextfield'
import LoginDiv from './DivComponents/LoginDivComponent';
import SignupDiv from './DivComponents/SignupDivComponent';
import BasicDropdown from '../Fields/BasicDropdown/BasicDropdown';
import BasicAlert from '../BasicAlerts/BasicAlert';
import BasicSpinner from '../BasicSpinner/BasicSpinner';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import index from '../../Actions/index';
import store from '../../Store/ConfigureStore';
import STRINGS from '../../Constants/StringConstants';
import signupModel from '../../DataModels/SignupModel';
import loginModel from '../../DataModels/LoginModel';

import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import cacheResponse from '../../Cache/CacheResponse';
import "./Login.css";
import STR_CONSTANTS from '../../Constants/StringConstants';
//import {browserHistory} from 'react-router';

 class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loginShown: true,
        };
        this.toggle = this.toggle.bind(this);
      }

    componentDidMount() {
        if (cacheResponse.getGetRoleResponse() == null) {
            this.props.actions.getRoles();
        }
    }

    handleLoginSubmit = event => {
        event.preventDefault();
        console.log("inLoginSubmit: loginModel", loginModel);
        this.props.actions.login(loginModel.formLoginRequest());
      }

    handleSignupSubmit = event => {
        event.preventDefault();
        this.props.actions.signup(signupModel.formSignupRequest());
      }
    

      renderAlertComponent(error) {
          if(error != null) {
            console.log("in renderAlertComponent with error:", error);
            return(
                <BasicAlert
                    alertStyle = "danger"
                    title="Error"
                    messg={error}
                    buttonStyle="danger"
                    btnText="Cancel"
                />
            );
          }
          else {
            console.log("in renderAlertComponent with no error:");
              return (<div/>);
          }
      }

      render() {

        console.log("in render...");
        let copyrightString = "\u00A9 2018 TrustED. All rights reserved."

        if (this.props.loginSuccess == true) {
            console.log("login Success : After Reducer");
            this.props.actions.resetLoginAction();
            setTimeout(() => {
                this.props.history.push("/myaccount");
            }, 10);
        } 

        if(this.props.signupSuccess) {
           this.props.actions.resetSignupAction();
           this.toggle();
            /*setTimeout(() => {
                this.toggle();
            }, 1000);*/
        }

        if(this.props.loginError) {
            console.log("this.props.loginError",this.props.loginError);
        }

        /*(let errorMessage = null;
        if (this.state.loginShown == true) {
            if (this.props.loginError == true) {
                errorMessage = this.props.loginError;
            } 
            //this.props.actions.resetLoginAction();
        } else {
            if(this.props.signupError == true) {
                errorMessage = this.props.signupError
            }
            //this.props.actions.resetSignupAction();
        }*/
   
        console.log("state:", this.state.loginShown);
        return (
            <div className="loginmain">
             <Grid>
                 <Row className="show-grid">
                 <Col sm={4} md={4} className="login-main">
                    {this.state.loginShown ? (
                        <LoginDiv
                            onLogin = {this.handleLoginSubmit.bind(this)}
                            toggle = {this.toggle.bind(this)}
                        />
                     ) : (
                        <SignupDiv
                            onSignup = {this.handleSignupSubmit.bind(this)}
                            toggle = {this.toggle.bind(this)}
                        />
                     )}
                </Col>
                <Col sm={8} md={8} className="test-main">
                
                <div className="row">
                    <div className="educational-background">
                        <h1>Educational Background Checks</h1>
                    <div className="subTitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus libero, porttitor ullamcorper accumsan in, sollicitudin vitae leo. Ut vehicula auctor pulvinar. Sed et neque sem. Phasellus sagittis leo quam, vel elementum mi varius a.
                    </div>
                    <Button
                        bsSize="large"
                        type="submit"
                        className="learnMore">Learn More
                    </Button>
                    <div className="copyright">
                        {copyrightString}
                    </div>
                    </div>
                </div>
                </Col>
                </Row>
            </Grid>
      
        {this.props.loginPending == true || this.props.signupPending == true ? (
                 <Loader fullPage loading />
        ) : (<div/>) }
        </div>
        );
      }

      toggle() {
          console.log("loginShown", this.state.loginShown);
		    this.setState({
			    loginShown: !this.state.loginShown
		    });
      }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log('printing state');
    console.log(state);
    return {
        loginPending: state.LoginReducer.loginPending,

        loginError: state.LoginReducer.loginError,

        loginSuccess: state.LoginReducer.loginSuccess,

        signupPending: state.LoginReducer.signupPending,

        signupError: state.LoginReducer.signupError,

        signupSuccess: state.LoginReducer.signupSuccess,

        roleSuccess: state.LoginReducer.roleSuccess,

        rolePending: state.LoginReducer.rolePending,

        roleError: state.LoginReducer.roleError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(index, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
ReactDOM.render(LoginContainer, document.getElementById('root'));
