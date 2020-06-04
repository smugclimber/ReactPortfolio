import React from "react";
import proj1 from './../../images/CORE_preview.jpg';
import proj2 from './../../images/SushiCrusher_preview.jpg';
import proj3 from './../../images/amher_preview.jpg';
import proj4 from './../../images/BoozeClues_preview.jpg';
import proj5 from './../../images/BoredBuddy_preview.jpg';
import proj6 from './../../images/BaggageClaim_preview.jpg';
import proj7 from './../../images/TimeBender_preview.jpg';
import gitLogo from "./../../images/logos/git_trans_logo.png";
import {Carousel, Col} from 'react-materialize'
import "./../../styles/WebDev.css";

const WebDev = () =>

  <div>
    <Carousel options={{ fullWidth: true, indicators:true}}>
      <div className='Row workGlass'>
        <Col s={12} l={3} className='projDescription'>
          <h6>US Army CORE CMS</h6>
          <br></br>
      		<p className='white-text'>A Content Management System (CMS) produced for a US Army client to serve the Public Affairs Officers from any base globally. The CMS manages official news articles, photos, and other journalistic content. It provides content creation, performance metrics, a public API and organization management.<br/><br/>Tech used:<br/>PhP Laravel, SQL, Angular9, and Javascript<br/>
          <a href="https://github.com/armydotmil"><button className='btn steelblue waves-effect white white-text'>Github Repo</button></a>
          <br/><br/>
          <a href="https://www.army.mil/core/"><button className='btn steelblue waves-effect white white-text'>Demo Site</button></a>
          </p>
        </Col>
        <Col s={12} l={9}  className='projImg'>
          <img alt="missing proj pic" src={proj1}/>
        </Col>
    	</div>

    	<div className='Row workGlass'>
        <Col s={12} l={3} className='projDescription'>
          <h6>Sushi Crusher</h6>
          <br></br>
      		<p className='white-text'>This is a personal project with a fun way of demonstrating an SQL database (DB) application on the cloud PaaS Heroku. Click 'Crush It!' to eat and move sushi to another part of the DB. You can also add new Sushi to the DB.<br/><br/>Tech used:<br/>Node, Express, Handlebars, MySQL, JQuery, and Javascript<br/>
          <a href="https://github.com/smugclimber/SushiCrusher"><button className='btn steelblue waves-effect white white-text'>Github Repo</button></a>
          <br/><br/>
          <a href="https://pacific-ravine-93168.herokuapp.com/"><button className='btn steelblue waves-effect white white-text'>Demo Site</button></a>
          </p>
        </Col>
        <Col s={12} l={9}  className='projImg'>
          <img alt="missing proj pic" src={proj2}/>
        </Col>
    	</div>

      <div className='Row workGlass'>
        <Col s={12} l={3} className='projDescription'>
          <h6>American Heretics Film Site</h6>
          <br></br>
      		<p className='white-text'>Developed for a client with Bulter Films. The website is for an independant documentary about the state of religion in the central United States. The site has contact infomation, film trailers, press releases, and screening schedules.<br/><br/>Tech used:<br/>PhP Javascript, HTML, and CSS<br/>
          <a href="https://github.com/smugclimber/amher"><button className='btn steelblue waves-effect white white-text'>Github Repo</button></a>
          <br/><br/>
          <a href="https://www.americanhereticsthefilm.com/"><button className='btn steelblue waves-effect white white-text'>Demo Site</button></a>
          </p>
        </Col>
        <Col s={12} l={9}  className='projImg'>
          <img alt="missing proj pic" src={proj3}/>
        </Col>
    	</div>

    	<div className='Row workGlass'>
        <Col s={12} l={3} className='projDescription'>
          <h6>BoozeClues</h6>
      		<p className='white-text'>This is a pub trivia management system. The application is capable of setting up rooms for bars to manage and patrons to join, all from your mobile device or desktop. It also features over 100K of trivia questions from its API source.<br/><br/>Tech used:<br/>Node Express, Handlebars, Socket.io, Passport User Auth, MySQL, JQuery, and Javascript<br/>
          <a href="https://github.com/smugclimber/BoozeClues"><button className='btn steelblue waves-effect white white-text'>Github Repo</button></a>
          <br/><br/>
          <a href="https://protected-sierra-25147.herokuapp.com/"><button className='btn steelblue waves-effect white white-text'>Demo Site</button></a>
          </p>
        </Col>
        <Col s={12} l={9} className='projImg'>
          <img alt="missing proj pic" src={proj4}/>
        </Col>
    	</div>

      <div className='Row workGlass'>
        <Col s={12} l={3} className='projDescription'>
          <h6>BoredBuddy</h6>
          <p className='white-text'>BoredBuddy embraces boardgames and puzzles challenges. The project demonstrates skills in interacting with APIs from multiple sources(Amazon, Boardgamegeek, and YouTube). Users conduct boardgame database queries of a boardgame database, with the core functionality alleviating boardgame indecisiveness and providing help with a preferential and 'name-based' search engine. Additionally, if the user has a library of boardgames, they can interact with that data.<br/><br/>Tech used:<br/>Node Express, Materialize, JQuery, and Javascript<br/>
      		<a href="https://github.com/smugclimber/BoredBuddy"><button className='btn steelblue waves-effect white white-text'>Github Repo</button></a>
          <br/><br/>
          <a href="https://calm-earth-73897.herokuapp.com/"><button className='btn steelblue waves-effect white white-text'>Demo Site</button></a>
          </p>
        </Col>
        <Col s={12} l={9} className='projImg'>
          <img alt="missing proj pic" src={proj5}/>
        </Col>
      </div>

      <div className='Row workGlass'>
        <Col s={12} l={3} className='projDescription'>
          <h6>BaggageClaim</h6>
      		<p className='white-text'>The core features for this application are user auth through Google Firebase and travel belongings accountability. If users go on a trip or abroad, Baggage Claim can help with accountability, prevention of lost items, and providing documentation to insurance companies and authorities if items are lost or stolen.<br/><br/>Tech used:<br/>Google FireBase, VelocityJS, JQuery, and Javascript<br/>
          <a href="https://github.com/smugclimber/BaggageClaim"><button className='btn steelblue waves-effect white white-text'>Github Repo</button></a>
          <br/><br/>
          <a href="https://smugclimber.github.io/BaggageClaim/"><button className='btn steelblue waves-effect white white-text'>Demo Site</button></a>
          </p>
        </Col>
        <Col s={12} l={9} className='projImg'>
          <img alt="missing proj pic" src={proj6}/>
        </Col>
    	</div>

      <div className='Row workGlass'>
        <Col s={12} l={3} className='projDescription'>
          <h6>Time Bender</h6>
          <p className='white-text'>TimeBender is a React VR application, with the entire experience in either Pano or Virtual Reality mode. A game of repairing time, the user is anonymously contacted by a crazed scientist who has disrupted the space time continuum. Find all the scientific parts he needs...AND HURRY!<br/><br/>Tech used:<br/>Node Express, ReactVR, ReactNative, Socket.io, and Javascript<br/>
          <a href="https://github.com/smugclimber/time-bender"><button className='btn steelblue waves-effect white white-text'>Github Repo</button></a>
          <br/><br/>
          <a href="https://time-bender.herokuapp.com/"><button className='btn steelblue waves-effect white white-text'>Demo Site</button></a>
          </p>
        </Col>
        <Col s={12} l={9} className='projImg'>
          <img alt="missing proj pic" src={proj7}/>
        </Col>
    	</div>
    </Carousel>
  </div>

export default WebDev;
