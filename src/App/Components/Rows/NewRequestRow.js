import React, {Component} from 'react';
import { Button, Row, Col } from "react-bootstrap";
import BasicDropdown from '../Fields/BasicDropdown/BasicDropdown'
import newRequestModel from '../../DataModels/NewRequestModel';

/*props
// title
//subtitle
//requestFrom: 
*/
export default class NewRequestRow extends React.Component {
    constructor(props) {
        super(props);
    }

    onApprove() {

    }

    onDeny() {

    }

    onViewCredential() {

    }

    render() {
        return(
            <div className="request-row">
            <Col xs={12} sm={12} md={3} lg={3}  className="request-details">
                <strong>{this.props.title}</strong><br/>
                {this.props.subtitle}
            </Col>
            <Col xs={12} sm={12} md={9} lg={9}  className="btns-request">
            {this.props.requestFrom == "Student" ? (
                <Button
                    block
                    bsSize="large"
                    type="submit"
                    onClick={this.onViewCredential.bind(this)}
                    className="btn btn-view-credential"> View Credential
                </Button>
                ) : (<div/>)}
                
                <Button
                    block
                    bsSize="large"
                    onClick={this.onApprove.bind(this)}
                    className="btn btn-approve-request"> Approve
                </Button>
                <Button
                    block
                    bsSize="large"
                    onClick={this.onDeny.bind(this)}
                    className="btn btn-deny-request"> Deny
                </Button>
            </Col>
            </div>
        );
        
    }
}