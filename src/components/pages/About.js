import React from "react";
import img from './../../images/nick-prof-pic.jpg';
import img0 from './../../images/logos/MySQL_logo.png';
import img1 from './../../images/logos/velocity_js_logo.jpg';
import img2 from './../../images/logos/BlenderDesktopLogo.png';
import img3 from './../../images/logos/jquery_trans_logo.png';
import img4 from './../../images/logos/Maya_logo.png';
import img5 from './../../images/logos/react_trans_logo.png';
import img6 from './../../images/logos/handlebars_logo.jpg';
import img7 from './../../images/logos/Unity3D_logo_nontrans.png';
import img8 from './../../images/logos/Node_trans_logo.png';
import img9 from './../../images/logos/c_sharp_logo.png';
import img10 from './../../images/logos/mongodb_trans_logo.png';
import img11 from './../../images/logos/reactVR_trans_logo.png';
import img12 from './../../images/logos/python-logo.png';
import img13 from './../../images/logos/firebase_trans_logo.png';
import img14 from './../../images/logos/js_trans_logos.png';
import img15 from './../../images/logos/css3_trans_logos.png';
import img16 from './../../images/logos/html5_trans_logos.png';

import img17 from './../../images/logos/AWS_Logo_trans.png';
import img18 from './../../images/logos/jekyll_logo.png';
import img19 from './../../images/logos/sass_logo.png';
import img20 from './../../images/logos/Postgre_logo.png';
import img21 from './../../images/logos/gulp_logo.png';
import img22 from './../../images/logos/grunt_logo.png';
import img23 from './../../images/logos/ruby_logo.png';
import img24 from './../../images/logos/php_logo.png';
import img25 from './../../images/logos/laravel_logo.png';
import {Row, Col} from 'react-materialize'
import "./../../styles/About.css";


const About = () =>
  
    <Row>
      <div className="solidglass_profile_pic"></div>
      <div className="solidglass_logos"></div>
      <Col s={12} m={12} l={12} className="aboutGlass">

        <Row>
          <Col s={12} m={3} l={3}>
            <img className="myPic" src={img} alt="missing pic"></img>
          </Col>
          <Col s={12} m={9} l={9}>
             <p className="p1">&nbsp;&nbsp;&nbsp;&nbsp;Washington DC based Web Developer and Game designer with a background in programming, database design, and team building. My professional focus is in full stack development for web applications and a recent interest in Virtual Reality/Augmented Reality development. I support both front and backend dev, but learn towards backend design. Virtual environments, 3D models, remote raspberry pi servers fill my latest personal projects. I also enjoy coding meetups and local game jams with the tech community. Feel free to peruse this site to see ptojects, latest work, and game designs. I am proficient in the following:</p>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={12} l={12}  className="p2">
            <div className="div_spacer">Project Management</div>
            <div className="div_spacer">Game Design</div>
            <div>Fullstack Engineering</div>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={12} l={12}>
            <div className="imgCont">
              <img className="mylogos" src={img0} alt="missing pic"></img>
              <img className="mylogos" src={img1} alt="missing pic"></img>
              <img className="mylogos" src={img2} alt="missing pic"></img>
              <img className="mylogos" src={img3} alt="missing pic"></img>
              <img className="mylogos" src={img4} alt="missing pic"></img>
              <img className="mylogos" src={img5} alt="missing pic"></img>
              <img className="mylogos" src={img6} alt="missing pic"></img>
              <img className="mylogos" src={img7} alt="missing pic"></img>
              <img className="mylogos" src={img8} alt="missing pic"></img>
              <img className="mylogos" src={img9} alt="missing pic"></img>
              <img className="mylogos" src={img10} alt="missing pic"></img>
              <img className="mylogos" src={img11} alt="missing pic"></img>
              <img className="mylogos" src={img12} alt="missing pic"></img>
              <img className="mylogos" src={img13} alt="missing pic"></img>
              <img className="mylogos" src={img14} alt="missing pic"></img>
              <img className="mylogos" src={img15} alt="missing pic"></img>
              <img className="mylogos" src={img16} alt="missing pic"></img>              
              <img className="mylogos" src={img17} alt="missing pic"></img>
              <img className="mylogos" src={img18} alt="missing pic"></img>
              <img className="mylogos" src={img19} alt="missing pic"></img>
              <img className="mylogos" src={img20} alt="missing pic"></img>
              <img className="mylogos" src={img21} alt="missing pic"></img>
              <img className="mylogos" src={img22} alt="missing pic"></img>
              <img className="mylogos" src={img23} alt="missing pic"></img>
              <img className="mylogos" src={img24} alt="missing pic"></img>
              <img className="mylogos" src={img25} alt="missing pic"></img>
            </div>
          </Col>
        </Row>

      </Col>    
    </Row>;

export default About;
