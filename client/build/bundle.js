/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	window.onload = function(){
	  // BUTTONS
	  var rollDiceButton = document.getElementById('roll-dice-button');
	  var healButton = document.getElementById('heal-button');
	  var shootButton = document.getElementById('shoot-button');
	  var endTurnButton = document.getElementById('end-turn-button');
	
	  // DICE
	  var dice1 = document.getElementById('dice-1') || document.getElementById('hidden');
	  var dice2 = document.getElementById('dice-2') || document.getElementById('hidden');
	  var dice3 = document.getElementById('dice-3') || document.getElementById('hidden');
	  var dice4 = document.getElementById('dice-4') || document.getElementById('hidden');
	  var dice5 = document.getElementById('dice-5') || document.getElementById('hidden');
	  
	  // PLAYER LIST
	  var players = document.querySelector('player');
	  var player1 = document.getElementById('player-1') || document.getElementById('hidden');
	  var player2 = document.getElementById('player-2') || document.getElementById('hidden');
	  var player3 = document.getElementById('player-3') || document.getElementById('hidden');
	  var player4 = document.getElementById('player-4') || document.getElementById('hidden');
	  var player5 = document.getElementById('player-5') || document.getElementById('hidden');
	  var player6 = document.getElementById('player-6') || document.getElementById('hidden');
	  var player7 = document.getElementById('player-7') || document.getElementById('hidden');
	  var player8 = document.getElementById('player-8') || document.getElementById('hidden');
	  var currentPlayer = document.getElementById('current-player') || document.getElementById('hidden');
	
	  rollDiceButton.onclick = function(){
	    console.log('You clicked on the roll dice button!');
	  }
	  healButton.onclick = function(){
	    console.log('You clicked on the heal button!');
	  }
	  shootButton.onclick = function(){
	    console.log('You clicked on the shoot button!');
	  }
	  endTurnButton.onclick = function(){
	    console.log('You clicked on the end turn button!');
	  }
	  dice1.onclick = function(){
	    console.log('You clicked on dice 1!');
	  }
	  dice2.onclick = function(){
	    console.log('You clicked on dice 2!');
	  }
	  dice3.onclick = function(){
	    console.log('You clicked on dice 3!');
	  }
	  dice4.onclick = function(){
	    console.log('You clicked on dice 4!');
	  }
	  dice5.onclick = function(){
	    console.log('You clicked on dice 5!');
	  }
	  player1.onclick = function(){
	    targetPlayer(this);
	  }
	  player2.onclick = function(){
	    targetPlayer(this);
	  }
	  player3.onclick = function(){
	    targetPlayer(this);
	  }
	  player4.onclick = function(){
	    targetPlayer(this);
	  }
	  player5.onclick = function(){
	    targetPlayer(this);
	  }
	  player6.onclick = function(){
	    targetPlayer(this);
	  }
	  player7.onclick = function(){
	    targetPlayer(this);
	  }
	  player8.onclick = function(){
	    targetPlayer(this);
	  }
	  currentPlayer.onclick = function(){
	    console.log('You clicked on the current player!')
	  }
	}
	
	var targetPlayer = function(player){
	  var targetedPlayer = document.getElementsByClassName('collection-item avatar player red lighten-4');
	  if(targetedPlayer[0]){
	    if(targetedPlayer[0] != player){
	      targetedPlayer[0].setAttribute('class', 'collection-item avatar player');
	    }
	  }
	  if(player.className === "collection-item avatar player"){
	    player.setAttribute('class', 'collection-item avatar player red lighten-4');
	  } else {
	    player.setAttribute('class', 'collection-item avatar player');
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map