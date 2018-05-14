import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import MyAccountDivComponent from '../MyAccount/DivComponents/MyAccountDivComponent';
import SideMenu from '../SideMenu/SideMenu';

import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';


export default class MyAccountContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={12} md={12} lg={3} className="side-menu">
                            <SideMenu
                            path="/myaccount"/>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={9} className="account-main">
                            <MyAccountDivComponent
                            history={this.props.history}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
ReactDOM.render(MyAccountContainer, document.getElementById('root'));