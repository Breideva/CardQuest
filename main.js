
function makeDeck(){
  var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suit = ["H", "S", "C", "D"];
  var deck = [];

  for(let i = 0; i < value.length; i++){
    for(let j = 0; j < suit.length; j ++){
        deck.push(suit[j] + "-" + value[i] )
    }
  }
  return deck
}
