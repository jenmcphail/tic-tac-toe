//board starting
//

window.onload = startGame;

function startGame() {
	var turn = "X";

setMessage(turn + "'s turn.");

}


function setMessage(msg){
	document.getElementbyId("message").textContent = msg;
}



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