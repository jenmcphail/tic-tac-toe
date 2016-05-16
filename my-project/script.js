
window.onload = startGame();

function startGame() {
	playerTurn = " "

	setMessage("It's Unicorn's turn.")

 }

 function setMessage(msg){
	document.getElementById("message").textContent = msg;
};

var counter = 1;	

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



// console.log shows the winner message, but using the set message function doesn't :( :(

function getWinner(){
	if (document.getElementById("1").textContent === " " && document.getElementById("2").textContent === " " && document.getElementById("3").textContent === " "||
		document.getElementById("4").textContent === " " && document.getElementById("5").textContent === " " && document.getElementById("6").textContent === " " ||
		document.getElementById("7").textContent === " " && document.getElementById("8").textContent === " " && document.getElementById("9").textContent === " " ||
		document.getElementById("1").textContent === " " && document.getElementById("5").textContent === " " && document.getElementById("9").textContent === " " ||
		document.getElementById("3").textContent === " " && document.getElementById("5").textContent === " " && document.getElementById("7").textContent === " " ||
		document.getElementById("1").textContent === " " && document.getElementById("4").textContent === " " && document.getElementById("7").textContent === " " ||
		document.getElementById("2").textContent === " " && document.getElementById("5").textContent === " " && document.getElementById("8").textContent === " " ||
		document.getElementById("3").textContent === " " && document.getElementById("6").textContent === " " && document.getElementById("9").textContent === " "){

		console.log("Unicorn won!")
		setMessage("Unicorn has won the game!")

	} else if(document.getElementById("1").textContent === "  " && document.getElementById("2").textContent === "  " && document.getElementById("3").textContent === "  "||
		document.getElementById("4").textContent === "  " && document.getElementById("5").textContent === "  " && document.getElementById("6").textContent === "  " ||
		document.getElementById("7").textContent === "  " && document.getElementById("8").textContent === "  " && document.getElementById("9").textContent === "  " ||
		document.getElementById("1").textContent === "  " && document.getElementById("5").textContent === "  " && document.getElementById("9").textContent === "  " ||
		document.getElementById("3").textContent === "  " && document.getElementById("5").textContent === "  " && document.getElementById("7").textContent === "  " ||
		document.getElementById("1").textContent === "  " && document.getElementById("4").textContent === "  " && document.getElementById("7").textContent === "  " ||
		document.getElementById("2").textContent === "  " && document.getElementById("5").textContent === "  " && document.getElementById("8").textContent === "  " ||
		document.getElementById("3").textContent === "  " && document.getElementById("6").textContent === "  " && document.getElementById("9").textContent === "  ") {
		
		console.log("T-Rex won")
		setMessage ("T-rex has won the game!")

	} else {
		setMessage(playerTurn + "already won the game!")
	}
		
}

$(".button").on("click", function(){
	location.reload();
});

