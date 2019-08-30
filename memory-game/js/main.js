console.log("Up and running!");

const cards =["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[2];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped king");
if (cardsInPlay.length ===2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");}
		else {
			alert("So sorry, try again.")
		}
	}

