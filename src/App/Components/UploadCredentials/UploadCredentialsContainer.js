import React, { Component } from 'react';
import { Row, Grid, Col, FormControl, Button ,Image} from 'react-bootstrap';
import SideMenu from '../SideMenu/SideMenu';
import UploadCredentialDivComponent from './DivComponents/UploadCredentialDivComponent';
import ReactDOM from 'react-dom';
//import '../../Assets/css/style.css';
import '../../Assets/css/style2.css';
import UploadCredentialsSingleStudent from './DivComponents/UploadCredentialsSingleStudent';
import BasicTextfield from '../Fields/BasicTextfield/BasicTextfield';
import cacheResponse from '../../Cache/CacheResponse';
import UploadCredentialPreviewComponent from './DivComponents/UploadCredentialPreviewComponent';

export default class UploadCredentialsContainer extends React.Component {
    studentData = [];
    constructor(props) {
        super(props)
        this.state = {
            studentCount: 1,
            file:null,
           
        }

        for (var i = 0; i < this.state.studentCount; i++) {
            this.studentData.push(<UploadCredentialsSingleStudent />)
        } 
    }
    render() {
        
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={12} md={12} lg={3} className="side-menu">
                            <SideMenu
                                path="/uploadCredentials" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={9} className="uploadCredential-main">
                         <div className = "uploadStudentFile">   
                            <h1>Upload Student Credentials</h1>
                            <h3>Upload a batch .csv file</h3>
                            <Row className="file-upload-main-row">
                                <UploadCredentialDivComponent
                                    first_btn_name="Choose File"
                                    second_btn_name="Upload Batch"
                                    onFileSelect={this.handleFileSelect.bind(this)} />
                            </Row>
                          </div> 
                        <hr/>
                         <Row className="upload-credential-row">
                                <h3>Manually enter a single student credential</h3>
                                {this.studentData}
                                </Row>
                                <UploadCredentialPreviewComponent
                                onFileSelect={this.handleFileSelect.bind(this)}/>
                           <Button
                        block
                        bsSize="large"
                        type="submit"
                        className="upload-single-btn"
                            > Upload Single Credential</Button>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

    handleFileSelect(){
        console.log("getSchoolSealFile file", cacheResponse.getSchoolSealFile());
            let file = cacheResponse.getSchoolSealFile()
             if (file != null) {
                this.setState({
                    file: file,
		        });
                console.log("file:",file)
            }
    }

}