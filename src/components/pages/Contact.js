import React from "react";
import gitLogo from "./../../images/logos/git_trans_logo.png";
import linkedinLogo from "./../../images/logos/LinkedIn_trans_logo.png";
import twitLogo from "./../../images/logos/twitter_trans_logo.png";
import sketchfabLogo from "./../../images/logos/sketchfab-icon-trans.png";
import stackoverLogo from "./../../images/logos/stackover-icon-trans.png";
import "./../../styles/Contact.css";

const Contact = props =>
  <div className="conGlass">
    <h2>Reach me at the following platforms:</h2>
    <div className="flexContact">
      <div>
        <a href="https://twitter.com/smugclimber"><img className= "linkImg" src={twitLogo} alt='missing logo'></img></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/nick-in-3d/"><img className= "linkImg" src={linkedinLogo} alt='missing logo'></img></a>
      </div>
      <div>
        <a href="https://github.com/smugclimber/"><img className= "linkImg" src={gitLogo} alt='missing logo'></img></a>
      </div>
      <div>
        <a href="https://sketchfab.com/smug_climber"><img className= "linkImg" src={sketchfabLogo} alt='missing logo'></img></a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/11014740/smug"><img className= "linkImg" src={stackoverLogo} alt='missing logo'></img></a>
      </div>
    </div>
  </div>;

export default Contact;
