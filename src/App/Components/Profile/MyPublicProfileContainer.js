import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Alert, Image } from "react-bootstrap";
import SideMenu from '../SideMenu/SideMenu';
import MyProfileComponent from './MyProfileComponent';
import myaccountModel from '../../DataModels/MyAccountModel';
import cacheResponse from '../../Cache/CacheResponse';
import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';


export default class MyPublicProfileContainer extends React.Component {
    menuitems = {};

    constructor(props) {
        super(props);
        this.menuitems = {"Recruiter":"11", "Institution":"12", "Student":"13"};
        if(cacheResponse.getGetMyAccountResponse() != null) {
            myaccountModel.setFirstName(cacheResponse.getGetMyAccountResponse().firstname);
            myaccountModel.setLastName(cacheResponse.getGetMyAccountResponse().lastname);
            myaccountModel.setEmail(cacheResponse.getGetMyAccountResponse().email);
            myaccountModel.setRoleId(cacheResponse.getGetMyAccountResponse().role);
            myaccountModel.setRole(this.getKeyForText(cacheResponse.getGetMyAccountResponse().role));
            myaccountModel.setBiodescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus libero, porttitor ullamcorper accumsan in, sollicitudin vitae leo. Ut vehicula auctor pulvinar. Sed et neque sem. Phasellus sagittis leo quam, vel elementum mi varius a.");
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

    render() {
        let schools = ["University of South California", "University of California, Berkeley"];
        let about = "About " + myaccountModel.firstname + " " + myaccountModel.lastname;
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} md={12} lg={3} xs={3} className="side-menu">
                            <SideMenu
                            path="/myprofile"/>
                        </Col>
                        <Col sm={4} md={8} lg={6} xs={12} className="profile-main">
                            <div className="profile-back-arrow">
                                <Image src={process.env.PUBLIC_URL + '/Icon/Back-Arrow.png'}/>
                                <span class="sideText"><h2>{about}</h2></span>
                            </div>
                            <MyProfileComponent
                                name = {myaccountModel.firstname + " " + myaccountModel.lastname}
                                role = {myaccountModel.role}
                                email = {myaccountModel.email}
                                biodescription = {myaccountModel.bioDescription}
                                firstname = {myaccountModel.firstname}
                                schools = {schools}
                            />
                        </Col>
                        <Col sm={4} md={4} lg={4} xs={3}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
ReactDOM.render(MyPublicProfileContainer, document.getElementById('root'));