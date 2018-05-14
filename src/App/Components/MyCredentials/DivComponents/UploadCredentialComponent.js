import React, {Component} from 'react';
import {Col, Row, Tabs, Tab, TabContainer, TabContent, TabPane, Image} from 'react-bootstrap';
import uploadCredentialModel from '../../../DataModels/UploadCredentialModel';
import AddCredentialDetails from './AddCredentialDetails';
import cacheResponse from '../../../Cache/CacheResponse';

export default class UploadCredentialComponent extends React.Component{
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            key: 0,
            keyCount: 2,
           
         }
    }
    handleSelect(key) {
        this.setState({key })
    }

    renderTabElements(){
        let tabs = [];
        let universities = [{name:"New Credential", credentialImg: "credentialImg"}, {name:"University of Southern California", credentialImg: "credentialImg"}];
        for(var i = 0; i < this.state.keyCount; i++) {
            let title = "";
            let item = null;
            if (i == 0) {
                title = "New Credential";
            } else {
                title =  universities[i].name;
            }
            console.log("universities[i].name", universities[i].name);
            item = <Tab eventKey={i} title={title} key={i}>
                    <div className="bgwhite">
                       <Image className="tab-credential-img" src={cacheResponse.getCredentialFile()}/>
                    </div>
                   </Tab>
            tabs.push(item);
        }

        console.log("tabs:",tabs);
        return tabs;
    }
    
    render() {
        return (
            <div>
               <Tabs
                    activeKey={this.state.key}
                    onSelect={this.handleSelect}
                    id="controlled-tab"
                    className="tabs-selection">
                    {this.renderTabElements()}
                </Tabs>
       
                <div className="bgwhite">
                <AddCredentialDetails/>
                </div>
            </div>
          );
    }
}