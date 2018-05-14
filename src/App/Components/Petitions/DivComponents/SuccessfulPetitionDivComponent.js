import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import SuccessfulPetition from '../../Rows/SuccessfulPetition';


export default class SuccessfulPetitionDivComponent extends React.Component{
    successPetitionsList = [];
    constructor(props) {
        super(props);
        this.state={
            successPetitionsCount: 5
        }

        let universities = [
        {name:"University of Southern California", details:" joined after 2,142 signatures"},
        {name:"Chapman University", details:" joined after 2,142 signatures"},  
        {name:"Woodbury University", details:" joined after 2,142 signatures"},
        {name:"Redlands University", details:" joined after 2,142 signatures"},
        {name:"Cal Lutheran University", details:" joined after 2,142 signatures"},
           ]

       
        for(var i = 0; i < this.state.successPetitionsCount; i++) {
            this.successPetitionsList.push( <SuccessfulPetition
            universityName={universities[i].name}
            details={universities[i].details}
            isFirstPetition = {i == 0 ?  true : false}
            key={i}/>);
        }
    }

    render() {
        return(
            <div>
                {this.successPetitionsList}
            </div>
            );
     }
}