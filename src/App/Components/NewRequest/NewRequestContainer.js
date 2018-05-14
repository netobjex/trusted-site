import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import TitleRow from '../Rows/TitleRow';
import NewRequestRow from '../Rows/NewRequestRow';
import SideMenu from '../SideMenu/SideMenu';

import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';


export default class NewRequestContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestCount: 3
        }
    }

    render() {

        let requestList = [];
        for(var i = 0; i < this.state.requestCount - 1; i++) {
            requestList.push(<NewRequestRow
            title="Employer Name"
            subtitle="Company Name"
            requestFrom="Employer"/>);
        }
        requestList.push(<NewRequestRow
            title="Student Name"
            subtitle="Location"
            requestFrom="Student"/>)

        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} md={12} lg={3} xs={3} className="side-menu">
                            <SideMenu
                            path="/newrequest"/>
                        </Col>
                        <Col sm={12} md={12} lg={9} xs={9} className="newRequest-main">
                            <h1>New Requests for My Credentials</h1>
                            <div className="bgwhite">
                                <TitleRow
                                title="Requests From:"
                                sortOption="Newest"/>
                                {requestList}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
ReactDOM.render(NewRequestContainer, document.getElementById('root'));