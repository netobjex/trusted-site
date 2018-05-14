import React,{ Component } from 'react';
import { Grid,Row,Col,Image} from 'react-bootstrap'
//var ReactDOM = require('react-dom');
//var QRCode = require('qrcode.react');
 

export default class QRCodeComponent extends React.Component{

    
    render(){
      let imgUrl = process.env.PUBLIC_URL + '/Icon/qrcodeimage.png';
        return(
            <div className ="qrComponent">
            <div className = "bgWhite">
            <Image src={imgUrl} className="imageContainer"/>
            <div className ="qrcodeTitle">
                {this.props.title}
            </div>
            </div>
                </div>
        );
    }
    
}