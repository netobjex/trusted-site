import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


//Props
//teds_remaining
export default class extends React.Component{

    constructor(props){
        super(props);
    }

    onTEDsRemaining() {

    }

    render() {
        return(
            <div className="teds">
                <div className="bgwhite">
                    <div className="ted-remaining">
                        {this.props.teds_remaining}
                    </div>
                    <div className="ted-credits">
                     TED Credits Remaining
                    </div>
                    <Button
                        block
                        bsSize="large"
                        className="btn-order-more"
                        onClick={this.onTEDsRemaining.bind(this)}>
                      Order More
                    </Button>
                </div>
            </div>
        );
    }
}