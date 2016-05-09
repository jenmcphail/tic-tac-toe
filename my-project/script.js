//Tic Tac Toe
var playerA
var playerB
var message
var reset
var winner

var turn = "X"
var cells = document.getElementsByTagName("td")




// pull element tags//

//define location tags to pull into functions


// implement functions //

// getPlayerMove();
// getComputerMove();
// ui_message();
// resetGame();
// trackKeeper();



//on load
//board start
//event listeners
//game logic


window.onload = startGame();

var cells = document.querySelectorAll("td")

function startGame() {
	xoListener();
 }


function xoListener(){
  for (var i = cells.length - 1; i >= 0; i--) {
    cells[i].addEventListener("click", console.log("playXorO"));
  }
};


var turn = "X"

function playXorO(){
	if (turn == "X") {
		turn = "O";
	} else {
		turn = "X";
	};

};



// var cells = document.getElementsbyTagName("td")

// function playerMove(){
// 	for (i = 0; i < cells.length; i--)
// 		cells[i].addEventListener("click", console.log("clicked."));
// };

// switch (e){
// 	case 1:
// 		unicorn = a, b, c
// 		alert "unicorn wins!"
// 	break;

// 	case 2:
// 		unicorn = d, e, f
// 		alert "unicorn wins!"
// 	break;

// 	case 3:
// 		unicorn = g, h, i
// 		alert "unicorn wins!"
// 	break;

// 	case 4:
// 		unicorn = g, e, c
// 		alert "unicorn wins!"
// 	break;

// 	case 5:
// 		unicorn = a, e, i
// 		alert "unicorn wins!"
// 	break;

// 	case 6:
// 		t-rex = a, b, c
// 		alert "T-Rex wins!"
// 	break;

// 	case 7:
// 		t-rex = d, e, f
// 		alert "T-Rex wins!"
// 	break;

// 	case 8:
// 		t-rex = g, h, i
// 		alert "T-Rex wins!"
// 	break;

// 	case 9:
// 		t-rex = g, e, c
// 		alert "T-Rex wins!"
// 	break;

// 	case 10:
// 		t-rex = a, e, i
// 		alert "T-Rex!"
// 	break;

// }