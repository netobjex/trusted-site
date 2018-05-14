import React, {Component} from 'react';
import { Button, Row, Col, DropdownButton, MenuItem, Image } from "react-bootstrap";
import BasicDropdown from '../Fields/BasicDropdown/BasicDropdown'
import newRequestModel from '../../DataModels/NewRequestModel';
import certificate from '../../Assets/certificate.png';

export default class TitleRow extends React.Component {
    menuitems = {"1":"Newest"};
    constructor(props) {
        super(props);
    }

    onRequestAmendment() {

    }

    render() {
        return(
            <div className="certificate-detail">
            <div className="bgwhite">
                <Row>
                    <Image src={certificate} className="img-responsive"/>
                </Row>
                <hr/>
                <Row>
                <Col sm={7} md={7} lg={7} xs={12}>
                    School Name
                    <h2>University of Southern Carolina</h2>
                    Degree Awarded
                    <h2>Master of Business Administration</h2>
                    Date Awarded
                    <h2>December 19, 2012</h2>
                </Col>
                <Col sm={5} md={5} lg={5} xs={12} className="mycredential-btmrgt">
                   Something Wrong?<br/>
                   <Button
                        block
                        bsSize="large"
                        type="submit"
                        onClick={this.onRequestAmendment.bind(this)}
                        className="btn btn-default btn-amendment"> Request Amendment
                    </Button>
                </Col>
                </Row>
            </div>
            </div>
        );
        
    }
}