import React, {Component} from 'react';
import { Button, Row, Col, DropdownButton, MenuItem } from "react-bootstrap";
import FriendsModel from '../../DataModels/FriendsModel';
import FriendItemModel from '../../DataModels/FriendItemModel';

/*props
// username
// email
// status
// earnedPoints
*/

export default class PastReferralRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let clsName = this.props.earnedPoints > 0 ? " bgwhite two-liner" : " bgwhite single-liner";

        return(
            <Row className="referral-row">
             <div className={clsName}>
            <Col sm={4} md={4} lg={4} xs={12}>
                <span>{this.props.username}</span>
            </Col>
            <Col sm={4} md={4} lg={4} xs={12}>
                <span>{this.props.email}</span>
            </Col>
            <Col sm={4} md={4} lg={4} xs={12}>
                <div className="referral-status">
                    {this.props.status}
                </div>
                <div className="earned-points">
                     {this.props.earnedPoints > 0 ? (<div>Earned {this.props.earnedPoints} TED<br/></div>) : (<div/>)}
                </div>
            </Col>
            </div>
            </Row>
        );
        
    }
}