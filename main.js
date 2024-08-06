let deck; //initialize deck

window.onload = function(){
  makeDeck();
  shuffleDeck();
}

function makeDeck(){
  var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suit = ["H", "S", "C", "D"];
  deck = []; // Start with empty array

  for(let i = 0; i < value.length; i++){
    for(let j = 0; j < suit.length; j ++){
        deck.push(suit[j] + "-" + value[i] )
    }
  }
  return deck
}

function shuffleDeck(){
  for(let i = 0; i < deck.length; i++){
   let j = Math.floor(Math.random() * deck.length);
   let temp = deck[i]; // Mixes the cards around
      deck[i] = deck[j];
      deck[j] = temp;
  }
  return deck
}


