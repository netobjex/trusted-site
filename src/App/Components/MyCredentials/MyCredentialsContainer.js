import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import SideMenu from '../SideMenu/SideMenu';
import CredentialDetailRow from '../Rows/CredentialDetailsRow';
import UploadCameraComponent from './DivComponents/UploadCameraComponent';
import UploadCredentialComponent from './DivComponents/UploadCredentialComponent';
import Credentials from './DivComponents/Credentials';
import cacheResponse from '../../Cache/CacheResponse';
import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';


export default class MyCredentialsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTabDiv: false,
            file:null
        }
    }

    handleFileSelect(){
        console.log("cacheResponseselected file", cacheResponse.getCredentialFile());
            let file = cacheResponse.getCredentialFile()
             if (file != null) {
                this.setState({
                    showTabDiv: true,
                    file: file
		        });
                console.log("handleFileSelect showTabDiv:",this.state.showTabDiv, "file:",file)
            }
    }

    render() {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} md={12} lg={3} xs={12} className="side-menu">
                            <SideMenu
                            path="/mycredentials"/>
                        </Col>
                        <Col sm={12} md={12} lg={6} xs={12} className="certificate-main">
                            <h1>My Credentials</h1>
                            {this.state.showTabDiv == false ?  (
                            <Credentials/> 
                            ): (
                            <UploadCredentialComponent
                                file={this.state.file}
                            />
                            )}    
                        </Col>
                        <Col sm={12} md={12} lg={3} xs={12} className="upload-credential-main">
                            <UploadCameraComponent
                                onFileSelect={this.handleFileSelect.bind(this)}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
ReactDOM.render(MyCredentialsContainer, document.getElementById('root'));