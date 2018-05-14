import React,{ Component} from 'react';
import {Row} from "react-bootstrap";

export default class HomeUpdateRow extends React.Component{
    render(){
        return(
            <Row className = "home-update-row">
            <div className = "bgwhite">
            <div className = "combineText">
                <div className = "title">{this.props.title}</div>
                <div className = "subText">{this.props.subText}</div>
            </div>
            </div>
            </Row>
        );
    }
}