import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';

/* props
schoolName
location
dateFrom
dateTo
*/

export default class UniversitiesRow extends React.Component {
    constructor(props){
        super(props);
    }

    onAddSchool() {

    }

    onPetitionClick() {
        
    }

    render() {
        return(
            <div className="university-detail">
            <div className="bgwhite">
            <Row className="university-row">
                <Col xs={12} sm={12} md={7} lg={7}  className="university-col">
                    <div className="school-name-label">
                        School Name
                    </div>
                    <div className="school-name-text">
                        {this.props.schoolName}
                    </div>
                    <div className="location-label">
                        Location
                    </div>
                    <div className="location-text">
                        {this.props.location1}<br/>
                        {this.props.location2}<br/>
                        {this.props.location3}
                    </div>
                    <div className="dates-label">
                        Dates Attended
                    </div>
                    <div className="dates-text">
                        {this.props.dateFrom + ' - ' + this.props.dateTo}
                    </div>
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} className="universtity-petition">
                    <div className="petition-label">
                        Petition USC
                        <Button className="btn btn-default btn-petition"
                            block
                            bsSize="large"
                            onClick={this.props.onPetitionClick}>
                            Create Petition
                        </Button>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Button className="btn-add-school"
                    block
                    bsSize="large"
                    onClick={this.onAddSchool.bind(this)}>
                    Add a New School
                </Button>
            </Row>
            </div>
        </div>
        );
    }
}