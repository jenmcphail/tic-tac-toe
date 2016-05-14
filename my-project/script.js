
window.onload = startGame();

function startGame() {
	playerTurn = "X"

	setMessage("It's " + playerTurn + "'s turn.")
 }

 function setMessage(msg){
	document.getElementById("message").textContent = msg;
};
	


$(".cell").on("click", function(){

	if ($(this).text() === "") {

		$(this).text(playerTurn);

		if (playerTurn === "X") {
			$(this).addClass("xTurn");
		} else {
			$(this).addClass("oTurn");
		}

		switchTurn();

	} else {

		setMessage("Hey! You can't move there!");
	};

});



function switchTurn(){
if (playerTurn === "X"){
		playerTurn = "O";

	} else {
		playerTurn = "X"
	}

	setMessage("It's " + playerTurn + "'s turn.")

};


$(".button").on("click", function(){
	location.reload();
});

// pseudo code for how to display message for winner and end game

// function winner(){
// 	switch statement for each case:
// 		get element by id
// 		if "X" || "O" === #1, #2, #3 || #4, #5, #6 || #7, #8, #9 || #1, #4, #7 || #2, @5, #8 || #3, #6, #9 || #1, #5, #9 || #3, #5, #7
// 			return "winner!"
// }


//Ideas to refactor in to object-oriented code:
	// Prototype of a tic tac toe board?
	// objects for each function: 
		// x-turn, 0-turn, switch, winner
		// each function would contain a related message

//Next Steps: Attempt to refactor in to object-oriented code with starting with above ideas.
