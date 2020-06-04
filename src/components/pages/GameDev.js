import React from "react";
import proj1 from './../../images/WaveBoy_preview.jpg';
import proj2 from './../../images/deck_gunner_title.jpg';
import proj3 from './../../images/Spudemic_preview.jpg';
import proj4 from './../../images/TimeBender_preview.jpg';
import proj5 from './../../images/BlockBreaker_preview.jpg';
import proj6 from './../../images/RetroConsoles_preview.jpg';
import {Card, CardTitle, Col} from 'react-materialize'
import "./../../styles/GameDev.css";

const GameDev = () =>

<div>
  <div className="Row gamesBox">
    <Col l={4} s={6} className='projCard'>
      <Card header={<CardTitle reveal image={proj1} waves='light'/>}
    		title="Wave Boy: Virtual Reality, one delivery at a time!"
    		reveal=
        {<p>A VR experience played with an exercise bike and touch controls! Take on the role of Wave Boy, a heroic neighborhood paperboy who delivers both friendly waves and fresh copies of the Wave Street Journal to the citizens to Wave Town.<br/>
        <br/>Tech Used: Unity3D, C#, Blender, Audacity Sound Mixer
        </p>}>
    		<p><a href="https://globalgamejam.org/2017/games/wave-boy">GGJ WaveBoy link</a></p>
      </Card>
    </Col>
    <Col l={4} s={6} className='projCard'>
      <Card header={<CardTitle reveal image={proj2} waves='light'/>}
    		title="Deck Gunner: Survive the onslaught of alien ships"
    		reveal=
          {<p>Deck Gunner is a modern 2D clone of 'Space Invaders'. The player, in his spaceship, is the Deck Gunner and will be able to move within the play space using the left and right arrow keys, while shooting projectiles at enemies who perpetually spawn as the player attempts to destroy them.<br/>
          Tech Used: Unity3D, C#, Adobe Photoshop
          </p>}>
    		<p><a href="http://deckgunner.atomicnick.com">Deck Gunner Demo</a></p>
      </Card>
    </Col>
    <Col l={4} s={6} className='projCard'>
      <Card header={<CardTitle reveal image={proj3} waves='light'/>}
    		title="Spudemic: Survive the potato apocalypse"
    		reveal=
          {<p>Meet Ida. She's tough, determined, and just a little bit pissed off. All Ida wants is to finish her shift at GamePlace and get home. But with a new flu strain, Spud Flu, on the rise, it's gonna be a tough commute. Get Ida home without letting the Spud Flu get transmitted to her.<br/>
          Tech Used: Unity3D, C#, Adobe Illustrator
          </p>}>
    		<p><a href="https://globalgamejam.org/2018/games/spudemic">GGJ Spudemic Link</a></p>
        <p><a href="http://spudemic.atomicnick.com">Spudemic Demo</a></p>
      </Card>
    </Col>
  </div>
  <div className="projBox Row">
    <Col l={4} s={6}className='projCard'>
      <Card header={<CardTitle reveal image={proj4} waves='light'/>}
    		title="Time Bender, repair time before it's too late!"
    		reveal=
        {<p>TimeBender is a React VR application. A game of repairing time, where you the user is anonymously contacted by a crazed scientist who has disrupted the space time continuum. Enjoy!.<br/>
        Tech Used: ReactVR, Javascript
        </p>}>
    		<p><a href="https://time-bender.herokuapp.com/">TimeBender Demo</a></p>
      </Card>
    </Col>
    <Col l={4} s={6} className='projCard'>
      <Card header={<CardTitle reveal image={proj5} waves='light'/>}
    		title="Block Breaker: Save America!"
    		reveal=
        {<p>Block Breaker is a clone of the all-time Atari classic 'Break-out!'. The player must travel through multiple levels breaking blocks that are taking over America! Use your trusty spike-ball to bust them out!<br/>
        Tech Used: GIMP, Unity3D, Audacity Sound Mixer
        </p>}>
    		<p><a href="http://blockbreaker.atomicnick.com">BlockBreaker Demo</a></p>
      </Card>
    </Col>
    <Col l={4} s={6} className='projCard'>
      <Card header={<CardTitle reveal image={proj6} waves='light'/>}
    		title="Retro Consoles Game"
    		reveal=
        {<p>Retro Console Madness is a classic memory game that revisits the bygone days of Atari and Ninetendo classic. Players must pick images to get points, but pick the same image twice and you lose!!<br/>
        Tech Used: React, Javascript, Audacity Sound Mixer
        </p>}>
    		<p><a href="retroconsoles.atomicnick.com">BlockBreaker Demo</a></p>
      </Card>
    </Col>
  </div>
  <div className="projBox Row">
    <Col l={12} s={12} className='threeDModel'>
      <h2>3D Models</h2>
    </Col>
    <Col l={12} s={12} className='threeDModel'>
      <div className="sketchfab-embed-wrapper">
        <iframe className="eachModel" src="https://sketchfab.com/models/417342aa3d1546d285be6e4691ded1df/embed?autospin=1&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0"> frameBorder="0"></iframe>
      </div>
      <div className="sketchfab-embed-wrapper">
        <iframe className="eachModel" src="https://sketchfab.com/models/9fba5ee278684a7ea124da2d01c00ea6/embed?autospin=1&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" frameBorder="0"></iframe>
      </div>
      <div className="sketchfab-embed-wrapper">
        <iframe className="eachModel" src="https://sketchfab.com/models/e59400d855c34be987acf55c8299e91f/embed?autospin=1&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" frameBorder="0"></iframe>
      </div>
    </Col>
  </div>
</div>;

export default GameDev;
