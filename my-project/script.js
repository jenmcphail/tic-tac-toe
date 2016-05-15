
window.onload = startGame();

function startGame() {
	playerTurn = "X"

	setMessage("It's " + playerTurn + "'s turn.")

 }

 function setMessage(msg){
	document.getElementById("message").textContent = msg;
};

counter = 1;
	


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

// var winningCombos = document.querySelectorAll(".cell")
// console.log(winningCombos);

// var checkCellX = document.querySelector(".xTurn")

// var checkCellO = document.querySelector(".oTurn")

// function getWinner(){
// 	for (i = 0; i<=winningCombos.lenght; i++){
// 		if 
// 	}
// }

