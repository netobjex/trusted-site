import React, { Component } from 'react';
import '../../../Assets/css/style.css';
import '../../../Assets/css/style2.css';
import UploadCredentialDivComponent from './UploadCredentialDivComponent';
import { Button, FormGroup, FormControl,Image, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import ReactDOM from 'react-dom';
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import cacheResponse from '../../../Cache/CacheResponse';

export default class UploadCredentialPreviewComponent extends React.Component {
    imageView = null;
    placeholder = "No file chosen";
    filePath = '';
    constructor(props) {
        super(props);
        this.state = {
            previewImgUrl: ''
            
        }
    }
    render()
    {
        if(this.state.previewImgUrl != '')
        {
            this.imageView = <Image src={this.state.previewImgUrl} className ="img"/>
            this.placeholder = this.filePath;
        }
        else{
            this.imageView = "Preview";
        }
        
        console.log('preview image is '+this.state.previewImgUrl);
        console.log('show image is '+this.state.showImage);
        return(
            <div className="previewComponent">
              <h4>Upload school seal</h4>
                 <Row className="upload-credential-preview-row">  
                                <div className="upload-preview-file-row">
                <form className="form-inline">
                    <div className="choose-btn">
                        <input type="file" id="chooseid" onChange={this.chooseFile.bind(this)}/>
                        <label htmlFor="chooseid">Choose File</label>
                    </div>

                    <BasicTextfield
                        controlID="file"
                        controlType="text"
                        placeholder={this.placeholder}
                        classname ="previewChooseFile"
                    />
                   
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                        className="upload-btn"
                    >Upload</Button>
                </form>
            </div>
                               {/*<UploadCredentialDivComponent
                                    first_btn_name="Choose File"
                                    second_btn_name="Upload" 
                                    onFileSelect={this.handleFileSelect.bind(this)}
                               />*/}
                            </Row>
                            <div className="preview">
                            {this.imageView}
                            </div>
                </div>
        );
    }

    chooseFile(event) {
        console.log("school seal selected:");
        if (!event.target.files[0]) {
            return
        } else {
            console.log("school seal selected:", event.target.files[0].name);
            let file = event.target.files[0];
            this.filePath = event.target.files[0].name;
            console.log('printing file for preview'+file);
            this.generatePreviewImgUrl(file, previewImgUrl => {
                console.log("school seal previewImgUrl=", previewImgUrl);
                cacheResponse.saveSchoolSealFile(previewImgUrl);
                this.setState({ 
                    previewImgUrl
                     })
                   
                this.props.onFileSelect();
            })
        }
    }

    generatePreviewImgUrl(file, callback) {
        const reader = new FileReader()
        const url = reader.readAsDataURL(file)
        reader.onloadend = e => callback(reader.result)
    }
}