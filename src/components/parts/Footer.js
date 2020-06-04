import React from "react";
import {Footer} from 'react-materialize'
import "../../styles/Footer.css";

const MyFooter = props =>
  <Footer copyrights="© 2020 Copyright | Nick H" className="footer_style">
    <div className="hide-on-med-and-up">
      © 2020 Copyright | Nick H
    </div>
  </Footer>;

export default MyFooter;