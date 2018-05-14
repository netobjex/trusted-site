import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import SideMenu from '../../SideMenu/SideMenu';
import CredentialDetailRow from '../../Rows/CredentialDetailsRow';
import UploadCameraComponent from './UploadCameraComponent';
import UploadCredentialComponent from './UploadCredentialComponent';


export default class MyCredentialsContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            credentialsCount: 3,
        }
    }


    render() {

        let credentialsList = [];
        for(var i = 0; i < this.state.credentialsCount; i++) {
            credentialsList.push( <CredentialDetailRow
            key={i}/>);
        }
        return(
            <div>
                {credentialsList}
            </div>
            );
     }
}