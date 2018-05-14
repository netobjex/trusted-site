import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from "react-bootstrap";
import "../../../Components/Login/Login.css";

/*
Props:
1 - controlID : 
2 - labelName : 
3 - title : 
4 - id :
5 - menuItems[] : 
6 - errorMessage :
7 - activeIndexId :
*/

export default class BasicDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"",
            isValid: true,
        }
    }
    renderMenuItems() {
        let menu = [];
        /*for(let key of Object.keys(this.props.menuitems)) {
            let item = null;
            if (this.props.activeIndexId == key) {
                item = <MenuItem eventKey={key} active key={key}>{this.props.menuitems[key]}</MenuItem>
            } else {
                item = <MenuItem eventKey={key} key={key}>{this.props.menuitems[key]}</MenuItem>
            }
            menu.push(item);
        }*/

        var keys = Object.keys(this.props.menuitems);
        for(let key of keys) {
            let item = null;
            if (this.props.activeIndexId == key) {
                item = <MenuItem eventKey={key} active key={key}>{key}</MenuItem>
            } else {
                item = <MenuItem eventKey={key} key={key}>{key}</MenuItem>
            }
            menu.push(item);
        }

        return menu;
    }

    render () {
        let errorMessage = "";
        if (this.state.isValid == false) {
            errorMessage = this.props.errorMessage;
            console.log("errorMessage:", errorMessage);
        }
        return (
            <FormGroup controlId={this.props.controlId} bsSize="large">
                <ControlLabel className="label-roleSelect">{this.props.labelName}</ControlLabel>
                <span className="selectRole">{errorMessage}</span>
                <DropdownButton title={this.props.title}
                    bsSize="large"
                    noCaret
                    key={1}
                    id={this.props.id} onSelect={this.handleSelect}
                    className="roleSelect">
                    {this.renderMenuItems()}
                </DropdownButton>
        </FormGroup>
        )
    }

    handleSelect = event => {

        console.log(event)
        /*let role = "";
        if(event == 1){
            role = "Employer"
        } else if (event == 2){
            role = "Institution"
        } else if (event == 3) {
            role = "Student"
        } else {
            role = "- Select One -"
        }*/

        let valid = this.props.saveText(event);
        console.log("avlid:",valid);
        this.setState({
            value : event,
            isValid : valid
        });
    }
}
