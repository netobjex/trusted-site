import React, {Component} from 'react';
import { Button, Row, Col, Image} from "react-bootstrap";
import BasicDropdown from '../Fields/BasicDropdown/BasicDropdown'
import newRequestModel from '../../DataModels/NewRequestModel';
import photo from '../../Assets/sky_img.jpeg';
import { Link, NavLink } from 'react-router-dom'

/*props
// name
//details
*/
export default class SearchResultRow extends React.Component {
    constructor(props) {
        super(props);
    }

    onSignPetition() {

    }

    render() {
        return(
            <div className="recent-petition-row">
             <div className="bgwhite">
            <Col className="col-petition" xs={12}sm={12} md={12} lg={8} >
                <div className="photo">
                        <Image src={photo} background-size="contains" circle/>
                </div>
                <div className="petition-details">
                    <span className="petitioner-name">
                    <NavLink to="/myprofile" className="name-link" activeClassName='is-active' >{this.props.name}</NavLink>
                    </span>
                    <span className="petitioner-text">
                        {this.props.details}
                    </span>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}  className="sign-petition">
                <Button
                    block
                    bsSize="large"
                    onClick={this.onSignPetition.bind(this)}
                    className="btn-sign-petition">Sign Petition
                </Button>
            </Col>
            </div>
            </div>
        );
        
    }
}