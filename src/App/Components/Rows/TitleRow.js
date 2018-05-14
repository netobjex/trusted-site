import React, {Component} from 'react';
import { Row, Col, DropdownButton, MenuItem } from "react-bootstrap";
import BasicDropdown from '../Fields/BasicDropdown/BasicDropdown'

export default class TitleRow extends React.Component {
    
    menuitems = {};
    constructor(props) {
        super(props);
        let sortOption = `${this.props.sortOption}`;
        console.log("sortOption", sortOption);
        this.menuitems = {[sortOption]:"1"};
    }

    onChangeSortOption(text) {
        /*let roleValid = signupModel.validateRole(text);
        console.log("roleValid:", roleValid);
        signupModel.setRole(text);

        var keys = Object.keys(this.menuitems);
        console.log("keys:", keys);
        var matchingKey = "";
        for(var i = 0; i < keys.length; i++) {
            let key = keys[i];
            console.log("key:", key);
            if (this.menuitems[key] == text) {
                matchingKey = key;
                break;
            }
        }
        //var matchingKey = keys.filter(function(key){ return key.indexOf(text) !== -1 });

        console.log("matchingKey:", matchingKey);
        signupModel.setRoleId(matchingKey);
        this.forceUpdate();

        return roleValid;*/
    }

    render() {
        var keys = Object.keys(this.menuitems);
        console.log("keys:", keys);
        
        return(
            <div className="request-row request-row-title">
            <Col xs={6} sm={6} md={6} lg={6}  className="title">
                <h2 className="title-heading">{this.props.title}</h2>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}  className="sortby">
                <BasicDropdown
                    controlID = "dropdown"
                    labelName = "Sort By:"
                    title = {keys.length > 0 ? keys[0]: "- Select One -"}
                    id = "sortBy"
                    menuitems = {this.menuitems}
                    activeIndexId = "1"
                    saveText = {(text) => this.onChangeSortOption(text)}
                />
            </Col>
            </div>
        );
        
    }
}