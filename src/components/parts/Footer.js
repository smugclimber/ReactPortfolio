import React from "react";
import {Footer} from 'react-materialize'
import "../../styles/Footer.css";

const MyFooter = props =>
  <Footer copyrights="© 2018 Copyright | Nick H">
    <div className="hide-on-med-and-up">
      © 2018 Copyright | Nick H
    </div>
  </Footer>;

export default MyFooter;
