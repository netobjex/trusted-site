import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Alert, Image } from "react-bootstrap";
import SideMenu from '../SideMenu/SideMenu';
import SearchComponent from './DivComponents/SearchComponent';
import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';


export default class SearchCredentialContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let schools = ["University of South California", "University of California, Berkeley"];
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} md={12} lg={3} xs={3} className="side-menu">
                            <SideMenu
                            path="/searchCredential"/>
                        </Col >
                        <Col sm={12} md={12} lg={9} xs={9} className="search-main">
                            <SearchComponent/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
ReactDOM.render(SearchCredentialContainer, document.getElementById('root'));