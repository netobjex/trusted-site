import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class TedTokenComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="tedsWallet">
                <div className="bgwhite">
                    <div className="tedwallet-remaining">
                        {this.props.teds_count}
                    </div>
                    <div className="tedwallet-credit-title">
                        {this.props.subTitle}
                       
                    </div>
                   <div className="tedwallet-credits">
                   {this.props.text}
                   </div>
                </div>
            </div>
        );
    }
}