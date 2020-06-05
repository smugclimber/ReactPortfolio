import React from "react";
import Row from "react-materialize/lib/Row";
import proj1 from './../../images/WaveBoy_preview.jpg';
import proj2 from './../../images/deck_gunner_title.jpg';
import proj3 from './../../images/Spudemic_preview.jpg';
import proj4 from './../../images/TimeBender_preview.jpg';
import proj5 from './../../images/BlockBreaker_preview.jpg';
import proj6 from './../../images/RetroConsoles_preview.jpg';
import {Card, CardTitle, Col} from 'react-materialize'
import "./../../styles/GameDev.css";

const GameDev = () =>

<Row>
  <Row className="gamesBox">
    <Col l={4} s={12} className='projCard'>
      
      <Card header={<CardTitle reveal image={proj1} waves='light'/>}
        title="Wave Boy: Virtual papers, one delivery at a time!"
        reveal=
        {<p>A VR experience played with an exercise bike and touch controls! Take on the role of Wave Boy, a heroic neighborhood paperboy who delivers both friendly waves and fresh copies of the Wave Street Journal to the citizens to Wave Town.<br/>
        <br/>Tech Used: Unity3D, C#, Blender, Audacity Sound Mixer
        </p>}>          
        <Col l={12} s={6}>
          <a href='https://globalgamejam.org/2017/games/wave-boy'><button className='game_btn2 btn steelblue waves-effect white white-text'>GGJ Wave Boy</button></a>
        </Col>
        <Col l={12} s={6}>
          <a href='https://twitter.com/smugclimber/status/823636503884537856'><button className='game_btn2 btn steelblue waves-effect white white-text'>Demo Video</button></a>
        </Col>
      </Card>
      <br></br>
    </Col>
    <Col l={4} s={12} className='projCard'>
      <Card header={<CardTitle reveal image={proj2} waves='light'/>}
        title="Deck Gunner: Survive the onslaught of alien ships"
        reveal=
          {<p>Deck Gunner is a modern 2D clone of 'Space Invaders'. The player, in his spaceship, is the Deck Gunner and will be able to move within the play space using the left and right arrow keys, while shooting projectiles at enemies who perpetually spawn as the player attempts to destroy them.<br/>
          <br/>Tech Used: Unity3D, C#, Adobe Photoshop
          </p>}>
        <a href="http://deckgunner.atomicnick.com"><button className='game_btn btn steelblue waves-effect white white-text'>Deck Gunner Demo</button></a>
      </Card>
      <br></br>
    </Col>
    <Col l={4} s={12} className='projCard'>
      <Card header={<CardTitle reveal image={proj3} waves='light'/>}
        title="Spudemic: Survive the potato apocalypse"
        reveal=
          {<p>Meet Ida. She's tough, determined, and just a little bit pissed off. All Ida wants is to finish her shift at GamePlace and get home. But with a new flu strain, Spud Flu, on the rise, it's gonna be a tough commute. Get Ida home without letting the Spud Flu get transmitted to her.<br/>
          <br/>Tech Used: Unity3D, C#, Adobe Illustrator
          </p>}>
          <Col l={12} s={6}>
            <a href="https://globalgamejam.org/2018/games/spudemic"><button className='game_btn2 btn steelblue waves-effect white white-text'>GGJ Spudemic Link</button></a>
          </Col>
          <Col l={12} s={6}>
            <a href="http://spudemic.atomicnick.com"><button className='game_btn2 btn steelblue waves-effect white white-text'>Spudemic Demo</button></a>
          </Col>
      </Card>
      <br></br>
    </Col>
  </Row>
  <Row>
    <Col l={4} s={12}className='projCard'>
      <Card header={<CardTitle reveal image={proj4} waves='light'/>}
        title="Time Bender, repair time!"
        reveal=
        {<p>TimeBender is a React VR application. A game of repairing time, where you the user is anonymously contacted by a crazed scientist who has disrupted the space time continuum. Enjoy!.<br/>
        <br/>Tech Used: ReactVR, Javascript
        </p>}>
        <a href="https://time-bender.herokuapp.com/"><button className='game_btn game_btn3 btn steelblue waves-effect white white-text'>TimeBender Demo</button></a>
      </Card>
      <br></br>
    </Col>
    <Col l={4} s={12} className='projCard'>
      <Card header={<CardTitle reveal image={proj5} waves='light'/>}
        title="Block Breaker: Save America!"
        reveal=
        {<p>Block Breaker is a clone of the all-time Atari classic 'Break-out!'. The player must travel through multiple levels breaking blocks that are taking over America! Use your trusty spike-ball to bust them out!<br/>
        <br/>Tech Used: GIMP, Unity3D, Audacity Sound Mixer
        </p>}>
        <a href="http://blockbreaker.atomicnick.com"><button className='game_btn game_btn3 btn steelblue waves-effect white white-text'>BlockBreaker Demo</button></a>
      </Card>
      <br></br>
    </Col>
    <Col l={4} s={12} className='projCard'>
      <Card header={<CardTitle reveal image={proj6} waves='light'/>}
        title="Retro Consoles Game"
        reveal=
        {<p>Retro Console Madness is a classic memory game that revisits the bygone days of Atari and Ninetendo classic. Players must pick images to get points, but pick the same image twice and you lose!!<br/>
        <br/>Tech Used: React, Javascript, Audacity Sound Mixer
        </p>}>
        <a href="retroconsoles.atomicnick.com"><button className='game_btn game_btn3 btn steelblue waves-effect white white-text'>Retro Demo</button></a>
      </Card>
      <br></br>
    </Col>
  </Row>
  <Row>
    <Col l={12} s={12} className='threeDModel'>
      <h2>3D Models</h2>
    </Col>
  </Row>
  <Row className='threeDModel'>
    <Col  l={4} s={12} className="sketchfab-embed-wrapper">
      <iframe className="eachModel" src="https://sketchfab.com/models/417342aa3d1546d285be6e4691ded1df/embed?autospin=1&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0"> frameBorder="0"></iframe>
    </Col>
    <Col  l={4} s={12} className="sketchfab-embed-wrapper">
      <iframe className="eachModel" src="https://sketchfab.com/models/9fba5ee278684a7ea124da2d01c00ea6/embed?autospin=1&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" frameBorder="0"></iframe>
    </Col>
    <Col  l={4} s={12} className="sketchfab-embed-wrapper">
      <iframe className="eachModel" src="https://sketchfab.com/models/e59400d855c34be987acf55c8299e91f/embed?autospin=1&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" frameBorder="0"></iframe>
    </Col>
  </Row>
</Row>;

export default GameDev;
