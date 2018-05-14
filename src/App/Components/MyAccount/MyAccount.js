import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import MyAccountContainer from '../MyAccount/MyAccountContainer';
import SideMenu from '../SideMenu/SideMenu';

import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';


export default class MyAccount extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} md={12} lg={3} xs={3} className="side-menu">
                            <SideMenu
                            path="/myaccount"/>
                        </Col>
                        <Col sm={12} md={12} lg={9} xs={9} className="account-main">
                            <MyAccountContainer
                            history={this.props.history}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
ReactDOM.render(MyAccount, document.getElementById('root'));