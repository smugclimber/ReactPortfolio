import React from "react";
import "../../styles/Header.css";
import {Button, SideNav, SideNavItem} from 'react-materialize'
import img from './../../images/nick_face.png';
import menu from './../../images/hamb_menu.png';

const Header = props =>
    <div className="col-12">
      <header className="header">
        <div className="title_space" onClick={() => props.handlePageChange("Main")}>
          <h1>AtomicNick</h1>
          <h1>AtomicNick</h1>
          <h1>AtomicNick</h1>
        </div>
        
        <div className="flexContainer navButts hide-on-small-only">
          <div class="btnbox">
            <button  onClick={() => props.handlePageChange("About")}>ABOUT</button>
          </div>
          <div class="btnbox">
            <button  onClick={() => props.handlePageChange("WebDev")}>WebDev</button>
          </div>
          <div class="btnbox">
            <button  onClick={() => props.handlePageChange("GameDev")}>GameDev</button>
          </div>
          <div class="btnbox">
            <button  onClick={() => props.handlePageChange("Contact")}>Contact</button>
          </div>
        </div>

      </header>
      <SideNav
        trigger={<Button className="hide-on-med-and-up hamb" icon='dehaze'/>}
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
