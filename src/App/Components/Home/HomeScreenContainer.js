import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap"
import HomeSearchRow from '../Rows/HomeSearchRow';
import HomeUpdateRow from '../Rows/HomeUpdateRow';
import SideMenu from '../SideMenu/SideMenu';
import '../../Assets/css/style2.css';
import BasicDropdown from '../Fields/BasicDropdown/BasicDropdown'
import TitleRow from '../Rows/TitleRow';
import SearchStudentCredentialComponent from '../SearchCredentials/DivComponents/SearchStudentCredentialComponent';
import TEDRemainingComponent from '../SearchCredentials/DivComponents/TEDRemainingComponent';
import TotalSearchPieComponent from './TotalSearchPieComponent'

export default class HomeScreenContainer extends React.Component {
    homeList = [];
    menuitems = {};
    constructor(props) {
        super(props);
       
        this.state = {
            homeResult: 4,
        }

        let text = [
            { title: "You searched for John and 2 others", bTitle: 'View all' },
            { title: "Christopher and 2 other just joined TrustED", bTitle: 'Invite your friends' },
            { title: "Adolf and 5 other just joined TrustED", bTitle: 'View all' },
            { title: "You searched for Kevin and 3 others", bTitle: 'Invite your friends' },
        ];
        for (var i = 0; i < this.state.homeResult; i++) {
            this.homeList.push(<HomeSearchRow
                title={text[i].title}
                buttonTitle={text[i].bTitle}
            />);
        }
    }
    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} md={12} lg={3} xs={12} className="side-menu">
                            <SideMenu
                                path="/home" />
                        </Col>
                        <Col sm={12} md={8} lg={6} xs={12} className="home-main">
                        <TitleRow
                        title="Most Recent Activity"
                        sortOption="All activity"/>
                           {/* <h1>Most Recent Activity</h1>
                            <div className="home-dropdown">
                                <BasicDropdown
                                    controlID="dropdown"
                                    labelName="Sort By:"
                                    title={"- Select One -"}
                                    id="sortBy"
                                    menuitems={this.menuitems}
                                    activeIndexId="1"
            
                           /></div>*/}
                            <div className="recent-main"> 
                                {this.homeList}
                                <HomeUpdateRow
                                    title="Update from TrustED:"
                                    subText="You searched for John and 2 others.Christopher and 2 other just joined TrustED"
                                />
                            </div> 
                        </Col>


                        <Col sm={12} md={4} lg={3} xs={12} className="home-main-right">
                        <Row>
                        <TotalSearchPieComponent
                       searchCount="54"/>
                        </Row>

                        <Row>
                        <TEDRemainingComponent
                        teds_remaining="12"/>
                        </Row>
                       
                        <Row className = "bgwhite">
                        <h2>Search Credentials </h2>
                        <SearchStudentCredentialComponent/>
                        </Row>
                     
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}