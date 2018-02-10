import React from "react";
import "../styles/Pacman.css";

  	// 1 => <div class='wall'></div>
  	// 2 => <div class='coin'></div>
  	// 3 => <div class='ground'></div>
  	// 4 => <div class='ghost'></div>
  	// 5 => <div class='pacman'></div>
  	// 6 => <div class='signature'></div>
  	// 7 => <div class='secret'></div>

  	var pacman = {
  		x: 19,
  		y: 11
  	}

  	var map = [
  		[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
  		[6,1,2,2,2,1,2,2,1,2,2,2,1,1,2,2,1,2,2,1,6],
  		[6,1,1,2,2,1,2,2,1,2,2,1,2,2,1,2,1,2,1,2,6],
  		[6,1,2,1,2,1,2,2,1,2,2,1,2,2,2,2,1,1,2,2,6],
  		[6,1,2,2,1,1,2,2,1,2,2,1,2,2,1,2,1,2,1,2,6],
  		[6,1,2,2,2,1,2,2,1,2,2,2,1,1,2,2,1,2,2,1,6],
  		[6,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6],
  		[6,1,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,1,2,2,6],
  		[6,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,2,1,2,2,6],
  		[6,1,1,1,1,2,2,1,1,1,1,2,2,1,2,2,2,1,2,2,6],
  		[6,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,2,1,2,2,6],
  		[6,1,2,2,1,2,2,1,2,2,1,2,2,1,1,1,2,1,1,5,6],
  		[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,6,6,6,6],
  		[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]
  	];

  	var automate = [{x: 18, y: 11}, {x: 17, y: 11}, {x: 17, y: 10}, {x: 17, y: 9}, {x: 17, y: 8}, {x: 17, y: 7}, {x: 15, y: 11}, {x: 14, y: 11}, {x: 13, y: 11}, {x: 13, y: 10}, {x: 13, y: 9}, {x: 13, y: 8}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}, {x: 19, y: 5}];

  	var el = document.getElementById('world');
  	var theScore = document.getElementById('scoreBoard');
  	var score = 0;
  	var orient = "l";
  	theScore.innerHTML = "<div class='score'>" + "Score: " + score + "</div>";

  	function drawName(){
  		for(var i = 1; i < automate.length ; i++) {
  		fireKeyboardEvent("keydown", 37);
  		console.log(i);
  		setTimeout(600);
  		}
  		// pacman.x = automate[0].x;
  		// pacman.y = automate[0].y;
  		// map[pacman.y][pacman.x] = 5;
  		// map[11][19] = 1;
  		// drawWorld();
  		// setTimeout(300);
  		// for(var i = 1; i < automate.length ; i++) {
  		// 	pacman.x = automate[i].x;
  		// 	pacman.y = automate[i].y;
  		// 	map[pacman.y][pacman.x] = 5;
  		// 	map[automate[i-1].y][automate[i-1].x] = 1;
  		// 	drawWorld();
  		// 	setTimeout(300);
  		// }
  	}

  	function drawWorld(){
  		el.innerHTML = '';
  		for(var y = 0; y < map.length ; y++) {
  			for(var x = 0; x < map[y].length ; x++) {
  				if (map[y][x] === 6) {
  					el.innerHTML += "<div class='wall'></div>";
  				}
  				else if (map[y][x] === 2) {
  					el.innerHTML += "<div class='coin'></div>";
  				}
  				else if (map[y][x] === 3) {
  					el.innerHTML += "<div class='ground'></div>";
  				}
  				else if (map[y][x] === 4) {
  					el.innerHTML += "<div class='ghost'></div>";
  				}
  				else if (map[y][x] === 5) {
  					//orientation of pacman
  					if (orient === "r"){
  						el.innerHTML += "<div class='pacman-r'></div>";
  					}else if (orient === "l"){
  						el.innerHTML += "<div class='pacman-l'></div>";
  					}else if (orient === "u"){
  						el.innerHTML += "<div class='pacman-u'></div>";
  					}else if (orient === "d"){
  						el.innerHTML += "<div class='pacman-d'></div>";
  					} //end  of orientation
  				}
  				else if (map[y][x] === 1) {
  					el.innerHTML += "<div class='signature'></div>";
  				}
  				else if (map[y][x] === 7) {
  					el.innerHTML += "<div class='wall'></div>";
  				}
  				else if (map[y][x] === 8) {
  					el.innerHTML += "<div class='nada'></div>";
  				}
  			}
  			el.innerHTML += "<br>";
  		}
  		console.log("Score: " + score);
  	}

  	drawWorld();

  	document.onkeydown = function(event){
  		if (event.keyCode === 37){ // PACMAN MOVE LEFT
  			if ( map[pacman.y][pacman.x-1] !== 6){
  				orient = "l";
  				if ( map[pacman.y][pacman.x-1] === 2){
  					score+= 10;
  					theScore.innerHTML = "<div class='score'>" + "Score: " + score + "</div>";
  				}
  				map[pacman.y][pacman.x] = 3;
  				pacman.x--;
  				map[pacman.y][pacman.x] = 5;
  				drawWorld();
  			}
  		}
  		else if (event.keyCode === 38){ // PACMAN MOVE UP
  			if ( map[pacman.y-1][pacman.x] !== 6 || map[pacman.y-1][pacman.x] > 6){
  				orient = "u";
  				if ( map[pacman.y-1][pacman.x] === 2){
  					score+= 10;
  					theScore.innerHTML = "<div class='score'>" + "Score: " + score + "</div>";
  				}
  				map[pacman.y][pacman.x] = 3;
  				pacman.y--;
  				map[pacman.y][pacman.x] = 5;
  				drawWorld();
  			}
  		}
  		else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
  			if ( map[pacman.y][pacman.x+1] !== 6){
  				orient = "r";
  				if ( map[pacman.y][pacman.x+1] === 2){
  					score+= 10;
  					theScore.innerHTML = "<div class='score'>" + "Score: " + score + "</div>";
  				}
  				map[pacman.y][pacman.x] = 3;
  				pacman.x++;
  				map[pacman.y][pacman.x] = 5;
  				drawWorld();
  			}
  		}
  		else if (event.keyCode === 40){ // PACMAN MOVE DOWN
  			if ( map[pacman.y+1][pacman.x] !== 6 || map[pacman.y+1][pacman.x] > 6){
  				orient = "d";
  				if ( map[pacman.y+1][pacman.x] === 2){
  					score+= 10;
  					theScore.innerHTML = "<div class='score'>" + "Score: " + score + "</div>";
  				}
  				if ( map[pacman.y+1][pacman.x] === 7){
  					theScore.innerHTML = "<div class='score' style='color: red'>" + "SECRET!!! " + "</div>";
  				}
  				map[pacman.y][pacman.x] = 3;
  				pacman.y++;
  				map[pacman.y][pacman.x] = 5;
  				drawWorld();
  			}
  		}
  	}
    window.addEventListener("keydown", function(e)
    {
    // space and arrow keys
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1)
      {
          e.preventDefault();
      }
    }, false);
