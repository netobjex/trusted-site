import React, {Component} from 'react';
import { Image, DropdownButton, MenuItem, Navbar, Nav } from "react-bootstrap";
import ReactDOM from 'react-dom';
import logo from '../../Assets/TrustEDLogo.png';
import photo from '../../Assets/sky_img.jpeg';
import "./SideMenu.css";
import '../../../index.css';
import StringConstants from '../../Constants/StringConstants';
import SideMenuItems from '../../Constants/SideMenuItems';
import SideMenuList from './SideMenuList';
import cachResponse from '../../Cache/CacheResponse';
/*
height: 1024px;	width: 440px;	background-color: #F9F9F9;}*/
class SideMenu extends React.Component {
    constructor(props) {
        super(props);
    
        let items = [];
        let user = "";
        if(cachResponse.getLoginResponse() != null) {
            let roles = cachResponse.getLoginResponse().roles;
            if(roles != null && roles.length > 0) {
                user = roles[0];
            }
        }
        //console.log("user:",user);

        //console.log("this.props.path:",this.props.path);

       
        //change user to this.props.userType
        if (user == StringConstants.RECRUITER || user == StringConstants.INSTITUTION) {
            //items = this.state.data.filter((_, i) => i !== index)
            for (var i =0; i < SideMenuItems.length; i++) {
                if (SideMenuItems[i].key != "MY UNIVERSITIES") {
                    items.push(SideMenuItems[i]);
                }
            }
        } else {
          items = SideMenuItems;
        }

        console.log("Items:",items);

        this.state = {
          userType:user, //change user to this.props.userType
          menuItems:items
        };
      }

      render() {
          let name = (cachResponse.getLoginResponse() != null && cachResponse.getLoginResponse().username != '') ? cachResponse.getLoginResponse().username : "John Doe";
        return (
          <div className="sidemenu">
              <div className="logo">
                  <Image src={logo} />
              </div>
             
              <div className="menuItems">
                  <SideMenuList
                    name = {name}
                    menuItems={this.state.menuItems}
                    path={this.props.path}/>
              </div>
        </div>
        );
      }
}
ReactDOM.render(SideMenu, document.getElementById('root'));
export default SideMenu;