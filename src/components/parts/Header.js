import React from "react";
import "../../styles/Header.css";
import {Button, SideNav, SideNavItem} from 'react-materialize'
import img from './../../images/nick_face.png';

const Header = props =>
    <div className="col-12">
      <div className="titleList">
        <p>Project Management</p>
        <p>Game Design</p>
        <p>Fullstack Engineering</p>
      </div>
      <header className="header">
        <h1 onClick={() => props.handlePageChange("Main")}>Nick H</h1>
        <div className="flexContainer navButts hide-on-small-only">
          <div>
            <Button waves='light' onClick={() => props.handlePageChange("About")}>About</Button>
          </div>
          <div>
            <Button waves='light' onClick={() => props.handlePageChange("WebDev")}>WebDev</Button>
          </div>
          <div>
            <Button waves='light' onClick={() => props.handlePageChange("GameDev")}>GameDev</Button>
          </div>
          <div>
            <Button waves='light' onClick={() => props.handlePageChange("Contact")}>Contact</Button>
          </div>
        </div>
      </header>
      <SideNav
        trigger={<Button className="hide-on-med-and-up"><p>Mobile<br/>Menu</p></Button>}
        options={{ closeOnClick: true, menuWidth: 120 }}
        >
        <SideNavItem userView
          user={{
            image: img
          }}
        />
        <SideNavItem subheader>Welcome!</SideNavItem>
        <br/>
        <SideNavItem divider />
        <SideNavItem subheader><p>Navigation:</p></SideNavItem>
        <SideNavItem onClick={() => props.handlePageChange("About")}>About</SideNavItem>
        <SideNavItem onClick={() => props.handlePageChange("WebDev")}>WebDev</SideNavItem>
        <SideNavItem onClick={() => props.handlePageChange("GameDev")}>GameDev</SideNavItem>
        <SideNavItem onClick={() => props.handlePageChange("Contact")}>Contact</SideNavItem>
      </SideNav>
    </div>

export default Header;
