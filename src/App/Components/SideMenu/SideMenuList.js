import React from 'react';
import {Image, ListGroup, ListGroupItem, Navbar, NavItem, Nav, DropdownButton, MenuItem } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'
import photo from '../../Assets/sky_img.jpeg';
import './SideMenu.css';


const SideMenuList = (props) => {
    
   function menuListItems() {

        return props.menuItems.map((menuItem, i) => {
            let iconName = (menuItem.path == props.path)? menuItem.selectedIconName : menuItem.iconName;
            if ((props.path == "/myprofile" && menuItem.path == "/myaccount") || (props.path == "/newpetition" && menuItem.path == "/petitions")) {
                let iconName = menuItem.selectedIconName
            }
            //console.log("iconName",iconName);
            let itemColor = (menuItem.path == props.path) ? "#8D265D" : "#8E8FA2";
            //console.log("itemColor",itemColor);
            let menuItemClass = (menuItem.path == props.path) ? "itemName selected" : "itemName";
            if ((props.path == "/myprofile" && menuItem.path == "/myaccount") || (props.path == "/newpetition" && menuItem.path == "/petitions")){
                menuItemClass = "itemName selected"
            }
            /*console.log("menuItem.path",menuItem.path, "props.path", props.path);
            console.log("menuItemClass",menuItemClass);*/

            /*return (
                <ListGroupItem className="grpItem" key={i}>
                    <Image className="icon" src={process.env.PUBLIC_URL + `${iconName}`} width="20" height="20" background-size="contains"/>
                    <NavLink to={menuItem.path} className={menuItemClass} activeClassName='is-active' >{menuItem.key}</NavLink>
                </ListGroupItem>
        )})*/

        return (
            <NavItem eventKey={1} href="#" className="grpItem" key={i}>
                <Image className="icon" src={process.env.PUBLIC_URL + `${iconName}`} width="20" height="20" background-size="contains"/>
                <NavLink to={menuItem.path} className={menuItemClass} activeClassName='is-active' >{menuItem.key}</NavLink>
            </NavItem>
        )})
    }

   const activeEvent = (match, location) => {
    if (!match) {
      return false
    }
    const eventID = parseInt(match.params.eventID)
    console.log("Side Menu Click: ")
    console.log(match)

    for(var i = 0; i < props.menuItems.length; i++) {
        let menuItem = props.menuItems[i];
        menuItem.selected = false;
    }

    for(var i = 0; i < props.menuItems.length; i++) {
        let menuItem = props.menuItems[i];
        console.log("props path",props.path);
        if (menuItem.path == props.path) {
            menuItem.selected = true;
            break;
        } else {
            menuItem.selected = false;
        }
    }
  }

   function onLinkClick(menuItem) {
        menuItem.selected = !menuItem.selected;
        console.log("menuItem.selected...",menuItem.selected);

   }

   function menuListGroup() {
       return (
          /* <ListGroup>
               {menuListItems()}
           </ListGroup>*/
           
           <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <div className="photo">
                        <Image src={photo} background-size="contains" circle/>
                            <div className="clear"></div>
                        <DropdownButton title={props.name}
                                        bsSize="large"
                                        noCaret
                                        key={1}
                                        id={"userName"}
                                        className="dropdown">
                                        <MenuItem eventKey="1"active>{props.name}</MenuItem>
                        </DropdownButton>
                    </div>
                    <Nav>
                        {menuListItems()}
                    </Nav>
                </Navbar.Collapse>
           </Navbar>
           
       )
   }

   return (
        menuListGroup()
    )
}
export default SideMenuList;