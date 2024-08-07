let deck; //initialize deck

window.onload = function () {
  makeDeck();
  shuffleDeck();
  getCards();
};

function makeDeck() {
  var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suit = ["H", "S", "C", "D"];
  deck = []; // Start with empty array

  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < suit.length; j++) {
      deck.push(suit[j] + "-" + value[i]);
    }
  }
  return deck;
}

function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i]; // Mixes the cards around
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}
function getCards() {
  let drawCards = [];
  for (let i = 0; i < 4; i++) {
    hidden = deck.pop();
    drawCards.push(hidden);
    console.log(hidden);
  }
  let hiddenCardImg = document.createElement("img");
  hiddenCardImg.src = "./Playing-Cards/" + hidden + ".avif";
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");
  let fourth = document.getElementById("fourth");

  first.dataset.value = drawCards[0];
  second.dataset.value = drawCards[1];
  third.dataset.value = drawCards[2];
  fourth.dataset.value = drawCards[3];

  // document.getElementById("first").src = "./Playing-Cards/" + drawCards[0] + ".avif";
  // document.getElementById("second").src = "./Playing-Cards/" + drawCards[1] + ".avif";
  // document.getElementById("third").src = "./Playing-Cards/" + drawCards[2] + ".avif";
  // document.getElementById("fourth").src = "./Playing-Cards/" + drawCards[3] + ".avif";
}