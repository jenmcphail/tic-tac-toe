window.onload = startGame();
var counter = 1;

function startGame() {
	playerTurn = " "
	setMessage("It's Unicorn's turn.")
 }


function setMessage(msg){
	document.getElementById("message").textContent = msg;
};
	

$(".cell").on("click", function(){

	if ($(this).text() === "") {

		$(this).text(playerTurn);

		if (playerTurn === " ") {
			$(this).addClass("xTurn");
			counter++
			getWinner();
		} else {
			$(this).addClass("oTurn");
			counter++
			getWinner();
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
if (playerTurn === " " ){
		playerTurn = "  ";
		setMessage("It's T-Rex's turn.")

	} else {
		playerTurn = " "
		setMessage("It's Unicorn's turn.")
	} 
};



function getWinner(){
	if (document.getElementById("1").textContent === " " && document.getElementById("2").textContent === " " && document.getElementById("3").textContent === " "||
		document.getElementById("4").textContent === " " && document.getElementById("5").textContent === " " && document.getElementById("6").textContent === " " ||
		document.getElementById("7").textContent === " " && document.getElementById("8").textContent === " " && document.getElementById("9").textContent === " " ||
		document.getElementById("1").textContent === " " && document.getElementById("5").textContent === " " && document.getElementById("9").textContent === " " ||
		document.getElementById("3").textContent === " " && document.getElementById("5").textContent === " " && document.getElementById("7").textContent === " " ||
		document.getElementById("1").textContent === " " && document.getElementById("4").textContent === " " && document.getElementById("7").textContent === " " ||
		document.getElementById("2").textContent === " " && document.getElementById("5").textContent === " " && document.getElementById("8").textContent === " " ||
		document.getElementById("3").textContent === " " && document.getElementById("6").textContent === " " && document.getElementById("9").textContent === " "){

		// alert("Unicorn won!")
		setMessage("Unicorn has won the game!")
		$(".cell").removeEventListener("click")

	} else if(document.getElementById("1").textContent === "  " && document.getElementById("2").textContent === "  " && document.getElementById("3").textContent === "  "||
		document.getElementById("4").textContent === "  " && document.getElementById("5").textContent === "  " && document.getElementById("6").textContent === "  " ||
		document.getElementById("7").textContent === "  " && document.getElementById("8").textContent === "  " && document.getElementById("9").textContent === "  " ||
		document.getElementById("1").textContent === "  " && document.getElementById("5").textContent === "  " && document.getElementById("9").textContent === "  " ||
		document.getElementById("3").textContent === "  " && document.getElementById("5").textContent === "  " && document.getElementById("7").textContent === "  " ||
		document.getElementById("1").textContent === "  " && document.getElementById("4").textContent === "  " && document.getElementById("7").textContent === "  " ||
		document.getElementById("2").textContent === "  " && document.getElementById("5").textContent === "  " && document.getElementById("8").textContent === "  " ||
		document.getElementById("3").textContent === "  " && document.getElementById("6").textContent === "  " && document.getElementById("9").textContent === "  ") {
		
		setMessage("T-rex has won the game!")


	} else {
		setMessage(playerTurn + "already won the game!")
		$(".cell").removeEventListener("click")
	}
		
}

$(".Resetbutton").on("click", function(){
	location.reload();
});