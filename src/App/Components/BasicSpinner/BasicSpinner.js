
import React, {Component} from 'react';
import {Alert, Button, Image} from 'react-bootstrap';
import loadingImage from '../../Assets/spinner.png';

export default class Spinner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: this.props.showSpinner
        }
    }

    render() {
        let divStyle = {display: 'inline-block'}
        if(this.state.show) {
            return (
                <div style = {divStyle}>
                 <Image src={loadingImage}width="24" height="24" className="spinner"/>
                 
                 <p>{this.props.message}</p>
                </div>
            );
        }
        return (<div style={divStyle}></div>)
    }
}