//Tic Tac Toe

//Sections/organization:
	//on load
	//board start
	//event listeners
	//game logic

//variables - placed in global scope so all functions can reference.
var playerA
var playerB
var message
var reset
var winner

var turn = "X"
var cells = document.getElementsByTagName("td")


//what the page should look like on load:
window.onload = startGame();

var cells = document.querySelectorAll("td")

function startGame() {
	xoListener();
 }


//setting up the event listeners for the board.
//WHHHYYYY DOESN'T IT WOOOOOORK???!?!?!?!?

function xoListener(){
  for (var i = cells.length - 1; i >= 0; i--) {
    cells[i].addEventListener("click", console.log("playXorO"));
  }
};


//if xoListener ever gets to work, it will call on this function which should switch back and forth between x's and o's.

var turn = "X"

function playXorO(){
	if (turn == "X") {
		turn = "O";
	} else {
		turn = "X";
	};

};


//pseudo code for a switch statement to determine the winner:
	// switch (e){
	// 	case 1:
	// 		x = a, b, c
	// 		alert "X wins!"
	// 	break;

	// 	case 2:
	// 		x = d, e, f
	// 		alert "X wins!"
	// 	break;

	// 	case 3:
	// 		x = g, h, i
	// 		alert "X wins!"
	// 	break;

	// 	case 4:
	// 		x = g, e, c
	// 		alert "X wins!"
	// 	break;

	// 	case 5:
	// 		x = a, e, i
	// 		alert "X wins!"
	// 	break;

	// 	case 6:
	// 		o = a, b, c
	// 		alert "O wins!"
	// 	break;

	// 	case 7:
	// 		o = d, e, f
	// 		alert "O wins!"
	// 	break;

	// 	case 8:
	// 		o = g, h, i
	// 		alert "O wins!"
	// 	break;

	// 	case 9:
	// 		o = g, e, c
	// 		alert "O wins!"
	// 	break;

	// 	case 10:
	// 		o = a, e, i
	// 		alert "O wins!"
	// 	break;

	// }