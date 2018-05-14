import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class TedCreditComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="tedsCredit">
                <div className="bgwhite">
                    <div className="tedcredit">
                        {this.props.credit_count}
                    </div>
                    <div className="ted-credits">
                        {this.props.creditTitle}
                       
                    </div>
                   <div className="button">
                   <Button
                        block
                        bsSize="large"
                        className="btn-convert"
                        //onClick={this.onTEDsRemaining.bind(this)}
                        >
                        Convert Remaining Tokens To Credit
                    </Button>
                   </div> 
                </div>
            </div>
        );
    }
}