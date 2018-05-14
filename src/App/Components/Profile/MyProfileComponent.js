import React, {Component} from 'react';
import { Image, Grid, Row, Col, Button } from "react-bootstrap"; 
import photo from '../../Assets/sky_img.jpeg';

/*props
name
role
email
bio-description
schools: array
*/

export default class MyProfileComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    onRequestCredentials() {

    }

    render() {

        let schoolTitle = this.props.firstname + "'s Associated Schools";

        var schools = this.props.schools.map(function(schoolname){
            return <h2>{schoolname}</h2>;
        });

        return(
            <div className="profile-detail">
            <div className="bgwhite">
                <Row classname="row-photo">
                    <div className="photo">
                        <Image src={photo} background-size="contains" circle/>
                    </div>
                </Row>
                <Row>
                <Col col-lg-12 col-md-9 col-sm-9 col-xs-9>
                    <div classname="profile-detail-row">
                        <h2>{this.props.name}</h2><br/>
                        <div className="profile-role">{this.props.role}<br/></div>
                        <div className="profile-email">{this.props.email}<br/></div>
                        <div className="profile-biodescription">{this.props.biodescription}<br/></div>
                    
                    <Button
                        block
                        bsSize="large"
                        onClick={this.onRequestCredentials.bind(this)}
                        className="btn-primary"> Request Credentials
                    </Button>
                    </div>
                    <hr/>
                    <div className="profile-school-title">{schoolTitle}
                        <h2>{schools}</h2>
                    </div>
                </Col>
                </Row>
            </div>
            </div>
        );
    }
}