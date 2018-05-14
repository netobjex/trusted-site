
import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import {Col, Row, Image, Button, label} from 'react-bootstrap';
import uploadCredentialModel from '../../../DataModels/UploadCredentialModel';
import cacheResponse from '../../../Cache/CacheResponse';

export default class UploadCameraComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            showUploadButton: true,
            previewImgUrl: ''
        }
    }
    
    handleChange(event) {
        console.log("file selected:");
        if (!event.target.files[0]) {
            return
          } else {
              console.log("file selected:", event.target.files[0].name);
              let file = event.target.files[0];
              this.generatePreviewImgUrl(file, previewImgUrl => {
                    console.log("previewImgUrl=", previewImgUrl);
                    cacheResponse.saveCredentialFile(previewImgUrl);
                    this.setState({previewImgUrl, showUploadButton: !this.state.showUploadButton})
                    this.props.onFileSelect();
              })
              
            
              //uploadCredentialModel.setFile(file);

          }
    }

    generatePreviewImgUrl(file, callback) {
        const reader = new FileReader()
        const url = reader.readAsDataURL(file)
        reader.onloadend = e => callback(reader.result)
    }

    render() {
        //{process.env.PUBLIC_URL + '/Icon/Upload-Camera.png'}background-size="contains" circle/>
        let title = "Upload Your Own Credentials";
        let imgUrl = process.env.PUBLIC_URL + '/Icon/Upload-Camera.png';
        let clsName="img-camera";

        if (this.state.showUploadButton == false) {
            title = "Upload Complete"
            imgUrl = this.state.previewImgUrl;
            clsName="img-uploaded-camera"
        }
        return(
            <div className="upload-credential">
                <div className="bgwhite">
                    <div className="upload-camera">
                    <Image src={imgUrl} circle className={clsName}/>
                    </div>
                    <div className="credential-msg"> 
                    {title}
                    </div>
                    <div>
                    {this.state.showUploadButton == true ? (
                        <div>
                        <input type="file" id="myuniqueid" onChange={this.handleChange.bind(this)}/>
                        <label htmlFor="myuniqueid">Upload</label>
                        </div>
                    ): (
                        <div className="verify-msg">
                            Please verify the information
                        </div>
                    ) }
                    </div>
                </div>
            </div>
        );
    }
}