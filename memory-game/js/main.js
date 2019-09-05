console.log("Up and running!");

const cards =[
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}

];
const cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

};

function flipCard() {
	var cardId= this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length ===2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");}
		else {
			alert("So sorry, try again.")
		}
	}
};

function createBoard() {
	for (var i=0; i< cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click','flipCard()');
		cardElement.appendChild('game-board');
	}
};
createBoard();

console.log (cards.cardImage);
console.log (cards.suit);