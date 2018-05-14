import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import InviteFriendsDivComponent from '../InviteFriends/InviteFriendsDivComponent';
import FriendsModel from '../../DataModels/FriendsModel';
import friendItemModel from '../../DataModels/FriendItemModel';
import SideMenu from '../SideMenu/SideMenu';
import PastReferralRow from '../Rows/PastReferralRow';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import index from '../../Actions/index';
import store from '../../Store/ConfigureStore';
import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';


class InviteFriendsContainer extends React.Component {
    //friendList = [];
    referralList = [];
    constructor(props) {
        super(props);
        this.state = {
            friendsCount:1,
            pastReferrals: 4,
            friends:[]
        }

        this.state.friends.push(<InviteFriendsDivComponent
            key={0}/>);

        /*for(var i = 0; i < this.state.friendsCount; i++) {
            this.friendList.push(<InviteFriendsDivComponent
                key={i}/>);
        }*/

        
        let referrals = [{name:"James Mackavoy", email:"jamesmackavoy@gmail.com", status:"Pending", earnedPoints:"0"},
                            {name:"Kierra Knightly", email:"kierraknightlyyyy@yahoo.com", status:"Accepted", earnedPoints:".001"},  
                            {name:"Stephen Colbert", email:"colbert.stephen@gmail.com", status:"Accepted", earnedPoints:".001"},
                            {name:"David Hasslehof", email:"thehoffman@earthlink.net", status:"Accepted", earnedPoints:".001"} 
                            ]
        for(var i = 0; i < this.state.pastReferrals; i++) {
            this.referralList.push(<PastReferralRow
                username={referrals[i].name}
                email={referrals[i].email}
                status={referrals[i].status}
                earnedPoints={referrals[i].earnedPoints}
            />);
        }
    }

    addAnotherFriend() {
        console.log("inside addAnotherFriend");
        var newStateArray = this.state.friends.slice();
        newStateArray.push(<InviteFriendsDivComponent/>);
        this.setState({friends : newStateArray});

       
        /*this.friendList.push(<InviteFriendsDivComponent key={this.state.friendsCount}/>);
        

        //console.log("friendList: ", this.friendList);*/
        this.setState({ friendsCount : (this.state.friendsCount + 1 ) })
        console.log("this.state.friendsCount: ", this.state.friendsCount);
    }

    handleInviteFriendsSubmit = event => {
        event.preventDefault();
        console.log("handleInviteFriendsSubmit: inviteFriendsModel", FriendsModel);
        //this.props.actions.inviteFriend(FriendsModel.formInviteFriendsRequest());
    }

    render() {
        console.log("friendList in render: ", this.friendList, "count:", this.state.friendsCount);
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} md={12} lg={3} xs={3} className="side-menu">
                            <SideMenu
                            path="/invitefriends"/>
                        </Col>
                        <Col sm={12} md={12} lg={9} xs={9} className="inviteFriend-main">
                            <h1>Invite Friends</h1>
                                {this.state.friends}
                                <div className="clearfix"></div>
                                <div className="btnmain-invitefriend">
                                    <Button
                                        block
                                        bsSize="large"
                                        type="submit"
                                        onClick={this.addAnotherFriend.bind(this)}
                                        className="btn-addAnother"> + Add Another
                                    </Button>
                                    <Button
                                        block
                                        bsSize="large"
                                        type="submit"
                                        onClick={this.handleInviteFriendsSubmit.bind(this)}
                                        className="btn-invite">Invite Friend
                                    </Button>
                                </div>
                                    <div className="clearfix"></div>
                                    <div className="referral-main">
                                        <h2>Past Referrals</h2>
                                        {this.referralList}
                                    </div> 
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log('printing state');
    console.log(state);
    return {
        inviteFriendPending: state.InviteFriendsReducer.inviteFriendPending,

        inviteFriendError: state.InviteFriendsReducer.inviteFriendError,

        inviteFriendSuccess: state.InviteFriendsReducer.inviteFriendSuccess,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(index, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InviteFriendsContainer);
ReactDOM.render(InviteFriendsContainer, document.getElementById('root'));
