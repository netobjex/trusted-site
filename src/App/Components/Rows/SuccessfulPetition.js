import React, {Component} from 'react';

/*Props
isFirstPetition
universityName
details
*/
export default class SuccessfulPetition extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="success-petition">
                <div className="bgwhite">
                    <span className="success-petiton-name">
                        {this.props.isFirstPetition == true ? <div className="success-petition"><h2>Successful Petitions</h2></div>: null}
                        {this.props.universityName}
                    </span>
                    <span className="success-petition-detail">
                        {this.props.details}
                    </span>
                </div>
            </div>
        );
    }
}