
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

		setMessage("Hey you can't move there!");
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


//Ideas to refactor in to object-oriented code:
	// Prototype of a tic tac toe board?
	// objects for each function: 
		// x-turn, 0-turn, switch, winner
		// each function would contain a related message

//Next Steps: Attempt to refactor in to object-oriented code with starting with above ideas.
