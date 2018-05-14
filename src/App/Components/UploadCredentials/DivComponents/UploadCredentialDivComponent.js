import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, DropdownButton, MenuItem, Alert } from "react-bootstrap";
import ReactDOM from 'react-dom';
import BasicTextfield from '../../Fields/BasicTextfield/BasicTextfield';
import cacheResponse from '../../../Cache/CacheResponse';
import 'font-awesome/css/font-awesome.min.css';


export default class UploadCredentialDivComponent extends React.Component {
placeholder = "No file chosen";
    constructor(props) {
        super(props);
        this.state = {
            previewImgUrl: '',
        }
    }
    render() {
       if(this.state.previewImgUrl != '')
       {
           this.placeholder = this.filePath;
       }
        return (
            <div className="upload-file-row">
                <form className="form-inline">
                    <div className="choose-btn">
                        <input type="file" id="choose-file-id" onChange={this.chooseFile.bind(this)} />
                        <label htmlFor="choose-file-id">{this.props.first_btn_name}</label>
                    </div>

                    <BasicTextfield
                        controlID="file"
                        controlType="text"
                        placeholder={this.placeholder}
                        clsname="uploadcsv"
                        classname="uploadCsvText"
                    />
                    {/*<div  className="upload-btn">
                        <input type="file" id="upload-file-id"/>
                        <label className ="upload-label"htmlFor="upload-file-id">{this.props.second_btn_name}</label>
                </div>*/}
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                        className="upload-btn"
                    >{this.props.second_btn_name}</Button>
                 <div className="messages">
                 <div className = "errorText"><i class="fa fa-times"> There was an error uploading file</i></div> 
                  <div className = "successText"><i className="fa fa-check"> Success! 102 Credentials Uploaded.</i></div> 
                    </div>
                </form>
               
            </div>
            
        );
    }

    chooseFile(event) {
        console.log("file selected:");
        if (!event.target.files[0]) {
            return
        } else {
            console.log("file selected:", event.target.files[0].name);
            let file = event.target.files[0];
            this.filePath = event.target.files[0].name;
            console.log('printing file'+file);
            this.generatePreviewImgUrl(file, previewImgUrl => {
                console.log("previewImgUrl=", previewImgUrl);
                cacheResponse.saveCredentialFile(previewImgUrl);
                this.setState({ previewImgUrl })
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
