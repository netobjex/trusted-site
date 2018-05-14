import React, {Component} from 'react';
import { Button, Row, Col, Image} from "react-bootstrap";
import BasicDropdown from '../Fields/BasicDropdown/BasicDropdown'
import newRequestModel from '../../DataModels/NewRequestModel';
import photo from '../../Assets/sky_img.jpeg';

/*props
//image
// name
//address
*/
export default class SearchResultRow extends React.Component {
    constructor(props) {
        super(props);
    }

    onRequestCredentials() {

    }

    render() {
        return(
            <Row className="search-result-row">
            <Col className="col-user"  xs={12} sm={12} md={12} lg={6}>
                <div className="photo">
                    <Image src={photo} background-size="contains" circle/>
                    <span className="student-name">
                        <strong>{this.props.name}</strong><br/>
                    </span>
                    <div className="student-address">
                        {this.props.address}
                    </div>
                 </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} className="request-credential">
                <Button
                    block
                    bsSize="large"
                    onClick={this.onRequestCredentials.bind(this)}
                    className="btn-request-credentials"> Request Credentials
                </Button>
            </Col>
            </Row>
        );
        
    }
}