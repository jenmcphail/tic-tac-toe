
window.onload = startGame();

function startGame() {
	playerTurn = "X"

	setMessage("It's " + playerTurn + "'s turn.")

 }

 function setMessage(msg){
	document.getElementById("message").textContent = msg;
};

var counter = 1;	

$(".cell").on("click", function(){

	if ($(this).text() === "") {

		$(this).text(playerTurn);

		if (playerTurn === "X") {
			$(this).addClass("xTurn");
			counter++
		} else {
			$(this).addClass("oTurn");
			counter++
		}

		switchTurn();
		

	} else {

		setMessage("Hey! You can't move there!");
	}

	if (counter >=10){
		setMessage("It's a draw!");
	}

});



function switchTurn(){
if (playerTurn === "X"){
		playerTurn = "O";
		setMessage("It's " + playerTurn + "'s turn.")

	} else {
		playerTurn = "X"
		setMessage("It's " + playerTurn + "'s turn.")
	} 
};


$(".button").on("click", function(){
	location.reload();
});

// var checkWinner = document.querySelectorAll(".cell")

// function getWinner(){
// 	for (i = 0; i <= checkWinner.length; i++){
// 		if (document.getElementById("1").textContent === "X" && document.getElementById("#2").textContent === "X" && document.getElementById("#3").textContent === "X"){
// 			console.log("hi");
// 		}
// 	}

// }

