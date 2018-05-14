import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import TitleRow from '../Rows/TitleRow';
import PetitionRow from '../Rows/PetitionRow';
import SideMenu from '../../Components/SideMenu/SideMenu';
import SuccessfulPetitionDivComponent from './DivComponents/SuccessfulPetitionDivComponent';
import SearchUniversityDivComponent from './DivComponents/SearchUniversityDivComponent';
import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';

export default class extends React.Component{
    petitionList = [];
    constructor(props) {
        super(props);

        this.state = {
            recentPetitionCount : 9
        }

        let students = [{name:"John D. Smith", details:" signed a petition for Southern California Baptist University to join TrustED"},
                         {name:"Paul Jefferson", details:" signed a petition for Texas A&M to join TrustED"},  
                         {name:"Virginia Long", details:" signed a petition for San Diego State University to join TrustED"},
                         {name:"Lucy Mendez", details:" created a petition for Brown University to join TrustED"},
                         {name:"Ricky Erickson", details:" created a petition for Dartmouth University to join TrustED"},
                         {name:"Gary Miles", details:" signed a petition for Southern California Baptist University to join TrustED"},
                         {name:"Jeffery Webb", details:" signed a petition for Brown to join TrustED"},  
                         {name:"Beatrice Logan", details:" signed a petition for Texas A&M to join TrustED"},
                         {name:"Estella Beck", details:" signed a petition for San Diego State University to join TrustED"}
                            ]

        for(var i = 0; i < this.state.recentPetitionCount; i++) {
            this.petitionList.push(<PetitionRow
            name={students[i].name}
            details={students[i].details}
            />);
        }
    }

    onCreatePetition(){
        this.props.history.push("/newpetition");
    }
    
    render() {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={12} md={3} lg={3} className="side-menu">
                            <SideMenu
                            path="/petitions"/>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="petition-main">
                        <div className="petition-row">
                                <TitleRow
                                     title="Recent Petitions"
                                     sortOption="Most Popular"/>
                                    {this.petitionList}
                        </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3} className="new-petition">
                            <div className="create-petition">
                                <h2>Don't see your University?</h2>
                                <Button
                                    block
                                    bsSize="large"
                                    onClick={()=>this.onCreatePetition()}
                                    className="btn-primary">
                                    Create a New Petition
                                </Button>
                                <SuccessfulPetitionDivComponent
                                history={this.props.history} />
                                <div className="search-university">
                                <h2>Search for a University </h2>
                                </div>
                                <SearchUniversityDivComponent />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}