import React, {Component} from 'react';
import Popup from "reactjs-popup";
import errorImg from '../../Assets/error.png';
import ReactDom from 'react-dom';

/* props
alertStyle: success/danger/warning/info
title
message
buttonStyle: primary/success/info/warning/danger
*/

export default class BasicPopup extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log("in my popup...");
        return(
            <div>
                <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    closeOnDocumentClick
                  />
            </div>
        );
    }
}