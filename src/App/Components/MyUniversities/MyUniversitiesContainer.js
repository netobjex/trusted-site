import React, {Component} from 'react';
import ReactDOM from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import SideMenu from '../SideMenu/SideMenu';
import UniversitiesRow from '../Rows/UniversitiesRow';
import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';

export default class MyUniversitiesContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            schoolCount: 1
        }
    }

    render() {
        let schoolList = [];
        for(var i = 0; i < this.state.schoolCount; i++) {
            schoolList.push( <UniversitiesRow
            schoolName="University of Southern California"
            location1="3601 Trousdale Parkway"
            location2="Student Union 301"
            location3="Los Angeles, CA 90089-0894"
            dateFrom="2006"
            dateTo="2012"
            key={i}/>);
        }
        return(
            <div>
                <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={12} md={12} lg={3} className="side-menu">
                        <SideMenu
                            path="/myuniverstities"/>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={9} className="university-main">
                            <h1>My Universities</h1>
                            {schoolList}
                        </Col>
                </Row>
                </Grid>
            </div>
        );
    }
}