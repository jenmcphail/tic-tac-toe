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



//what the page should look like on load:
window.onload = startGame();


function startGame() {
	playerTurn = "X"

	setMessage("It's " + playerTurn + "'s turn.")
 }

 function setMessage(msg){
	document.getElementById("message").textContent = msg;
}

// function switchTurn() {
	

$(".cell").on("click", function(){

	if ($(this).text() === "") {

		$(this).text(playerTurn);

		console.log($(this));

		switchTurn();

	} else {

		setMessage("Hey you can't move there!");

	}


});



function switchTurn(){
if (playerTurn === "X"){
		playerTurn = "O";
	} else {
		playerTurn = "X"
	}

	setMessage("It's " + playerTurn + "'s turn.")

	// allowedMove();
};





// function playXorO(){
// 	if (turn == "X") {
// 		turn = "O";
// 	} else {
// 		turn = "X";
// 	};

// };


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