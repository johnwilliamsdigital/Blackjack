
var handTotal = 0;
var outputfield = document.getElementById("output");
var hit = document.getElementById("button-1");
var stand = document.getElementById("button-2");

hit.onclick = function () {
	Hit();
};

stand.onclick = function () {
	Stand();
};


function Hit () {
	var newCard = Draw();
	Display("You drew a "+newCard);
	handTotal = handTotal + newCard;
	
	if (handTotal > 21)  {
		Display("You lost the game");
		handTotal = 0;
	}
}

function Draw () {
	var card = Math.random() * 13;
	card = Math.ceil(card);
	if (card > 10) {
		card = 10;
	}
	return card;
}


function Display (message) {
	var newParagraph = document.createElement ("p");
	var textNode = document.createTextNode(message);
	newParagraph.appendChild(textNode);
	outputfield.appendChild(newParagraph);
}


function Stand () {
	var newCard = Draw() + Draw();
	Display("Dealer drew "+newCard);
	
	if (handTotal > newCard) {
		Display("You won the game");
	} else {
		Display("You lost the game");
	}
	handTotal = 0;
}