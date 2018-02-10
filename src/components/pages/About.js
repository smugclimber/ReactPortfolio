import React from "react";
import img from './../../images/nick-prof-pic.png';
import img0 from './../../images/logos/c_sharp_logo.png';
import img1 from './../../images/logos/python-logo.png';
import img2 from './../../images/logos/js_trans_logos.png';
import img3 from './../../images/logos/css3_trans_logos.png';
import img4 from './../../images/logos/html5_trans_logos.png';
import img5 from './../../images/logos/react_trans_logo.png';
import img6 from './../../images/logos/jquery_trans_logo.png';
import img7 from './../../images/logos/mongodb_trans_logo.png';
import img8 from './../../images/logos/MySQL_logo.png';
import img9 from './../../images/logos/Node_trans_logo.png';
import img10 from './../../images/logos/reactVR_trans_logo.png';
import img11 from './../../images/logos/firebase_trans_logo.png';
import img12 from './../../images/logos/velocity_js_logo.jpg';
import img13 from './../../images/logos/handlebars_logo.jpg';
import img14 from './../../images/logos/Unity3D_logo_nontrans.png';
import img15 from './../../images/logos/Maya_logo.png';
import img16 from './../../images/logos/BlenderDesktopLogo.png';
import "./../../styles/About.css";

const About = () =>

    <div className="aboutSpecs">
      <div className="flexContainer">
        <img className="myPic" src={img} alt="missing pic"></img>
      </div>
      <div className="aboutGlass flexContainer">
        <div>
          <h3 className="glassTitle">Welcome!</h3>
          <div className="flexbox">
            <p className="p1">A little bit about me, I am Web developer, Full stack engineer, and Game designer living and working in Washington D.C.</p>
            <p className="p2">I have a solid knowledge of programming, design, and team building. My professional focus is in full stack development applications and my latest passion is in Virtual Reality development. I can tackle both frontend and backend development, but learn towards backend design. Virtual environments and 3D Models are my latest endeavor. In fair weather I like to spend my free time out in the wilderness rock climbing and camping, otherwise you will find me playing video games or building them in some community game jam. Feel free to peruse around this site to see my web applications, project work and game designs!</p>
            </div>
        </div><br/>
        <div className="flexContainer imgCont">
          <h3>SKILL SETS:</h3>
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
        </div>
      </div>
    </div>;

export default About;
