let deck; //initialize deck
let drawCards = [];
let btn;
let points = 0;

window.onload = function beginGame(){
  gsap.to("#body", {
    clipPath: "circle(70.7% at 50% 50%)",
    duration: 1.2,
    ease: "power2.in",
  })
  playGame();
}

function playGame() {
  makeDeck();
  shuffleDeck();
  getCards();
  drawFirst();
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
// function drawFirst() {
//   let faceCards = ["J", "Q", "K", "A"];
//   let btnContainer = document.getElementById("button-area");
//   let question = document.createElement("h2");
//   document.getElementById("question-area").append(question);
//   question.innerText = "What's the card's value ?";
//   gsap.to("#first-arrow", {
//     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//     duration: .4,
//     ease: "power4.in",
//   })
//   gsap.from("#created-content", {
//     opacity: 0,
//     duration: .5,
//     ease: "power2.inOut",
//     translateY: 250,
//   })



//   for (let i = 2; i <= 10; i++) {
//     let btn = document.createElement("button");
//     document.getElementById("button-area").append(btn);
//     btn.innerText = i;
//     btnContainer.append(btn);
//     btn.addEventListener("click", () => firstCard(btn, question, i));
//   }

//   faceCards.forEach((faceCard) => {
//     let btn = document.createElement("button");
//     btn.innerText = faceCard;
//     btnContainer.append(btn);
//     btn.addEventListener("click", () => firstCard(btn, question, faceCard));
//   });
// }
function drawFirst() {
  let colors = ["Red", "Black"];
  let btnContainer = document.getElementById("button-area");
  let question = document.createElement("h2");
  document.getElementById("question-area").append(question);
  question.innerText = "What's the card's color ?";
  gsap.to("#first-arrow", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .4,
    ease: "power4.in",
  })
  gsap.from("#created-content", {
    opacity: 0,
    duration: .5,
    ease: "power2.inOut",
    translateY: 250,
  })

  colors.forEach((color) => {
    let btn = document.createElement("button");
    btn.innerText = color;
    btnContainer.append(btn);
    btn.addEventListener("click", () => firstCard(btn, question, color));
  });
}
function firstCard(btn, question, color) {
  gsap.to("#first", {
    rotateY: "85",
    duration: .2,
    onComplete: () => {
      gsap.to("#first", {
        rotateY: "5",
      })
      document.getElementById("first").src = `./Playing-Cards/${drawCards[0]}.avif`;
    }
  })
  gsap.to("#first-arrow", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: .3,
    ease: "power1.out",
  })
  
  firstActualCard = drawCards[0];

  let firstCardValue = getCardValue(firstActualCard);
  let buttonContainer = document.getElementById("button-area");
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
  question.remove();

  let getSuit = firstActualCard.split("-")[0];

  let suitNames = {
    "C": "Black",
    "D": "Red",
    "H": "Red",
    "S": "Black",
  }

  let correctAnswer = suitNames[getSuit];

  if (color === correctAnswer) {
    document.getElementById("first").style.backgroundColor = "green";
  } else {
    document.getElementById("first").style.backgroundColor = "red";
  }
  drawSecond(firstCardValue);
}
function drawSecond(firstCardValue) {
  let answers = ["Higher", "Lower"];
  let btnContainer = document.getElementById("button-area");
  let question = document.createElement("h2");
  document.getElementById("question-area").append(question);
  question.innerText = `Is the cards value higher or lower than ${firstCardValue} ?`;
  gsap.to("#second-arrow", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .4,
    ease: "power1.out",
  })
  gsap.from("#created-content", {
    opacity: 0,
    duration: .5,
    ease: "power2.inOut",
    translateY: 250,
  })

  answers.forEach((answer) => {
    let btn = document.createElement("button");
    btn.innerText = answer;
    btnContainer.append(btn);
    btn.addEventListener("click", () =>
      secondCard(firstCardValue, question, answer,)
    );
  });
}
function secondCard(firstCardValue, question, answer) {
  let secondActualCard = drawCards[1];
  let secondCardType = secondActualCard.split("-")[1]
  question.remove();
  gsap.to("#second", {
    rotateY: "85",
    duration: .2,
    onComplete: () => {
      gsap.to("#second", {
        rotateY: "5",
      })
      document.getElementById("second").src = `./Playing-Cards/${drawCards[1]}.avif`;
    }
  })
  gsap.to("#second-arrow", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: .3,
    ease: "power1.out",
  })

  let secondCardValue = getCardValue(secondActualCard);
  let buttonContainer = document.getElementById("button-area");
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
  let isHigher = secondCardValue >= firstCardValue; //if both values are the same Higher is correct
  let correctAnswer = isHigher ? "Higher" : "Lower";

  if (answer === correctAnswer) {
    document.getElementById("second").style.backgroundColor = "green";
  } else {
    document.getElementById("second").style.backgroundColor = "red";
  }
  drawThird(firstCardValue, secondCardValue, secondCardType)
}
function drawThird(firstCardValue, secondCardValue, secondCardType) {
  let answers = ["In Between", "Outside"];
  let btnContainer = document.getElementById("button-area");
  let question = document.createElement("h2");
  document.getElementById("question-area").append(question);
  question.innerText = `Is the cards value In between or outside ${firstCardValue} / ${secondCardType} ?`;
  gsap.to("#third-arrow", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .4,
    ease: "power1.out",
  })
  gsap.from("#created-content", {
    opacity: 0,
    duration: .5,
    ease: "power2.inOut",
    translateY: 250,
  })

  answers.forEach((answer) => {
    let btn = document.createElement("button");
    btn.innerText = answer;
    btnContainer.append(btn);
    btn.addEventListener("click", () =>
      thirdCard(firstCardValue, question, answer, secondCardValue)
    );
  });
}
function thirdCard(firstCardValue, question, answer, secondCardValue) {
  let thirdActualCard = drawCards[2];
  question.remove();

  let thirdCardValue = getCardValue(thirdActualCard);

  gsap.to("#third", {
    rotateY: "85",
    duration: .2,
    onComplete: () => {
      gsap.to("#third", {
        rotateY: "5",
      })
      document.getElementById("third").src = `./Playing-Cards/${drawCards[2]}.avif`;
    }
  })
  gsap.to("#third-arrow", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: .3,
    ease: "power1.out",
  })
  let buttonContainer = document.getElementById("button-area");
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }

  let minValue = Math.min(secondCardValue, firstCardValue);
  let maxValue = Math.max(secondCardValue, firstCardValue);
  
  let correctAnswer = (thirdCardValue >= minValue && thirdCardValue <= maxValue) ? "In Between" : "Outside";

  if (answer === correctAnswer) {
    document.getElementById("third").style.backgroundColor = "green";
  } else {
    document.getElementById("third").style.backgroundColor = "red";
  }
  drawFourth();

}
function drawFourth() {
  let answers = ["Clubs", "Diamonds", "Hearts", "Spades"];
  let btnContainer = document.getElementById("button-area");
  let question = document.createElement("h2");
  document.getElementById("question-area").append(question);
  question.innerText = "What's the card's suit ?";
  gsap.to("#fourth-arrow", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .4,
    ease: "power1.out",
  })
  gsap.from("#created-content", {
    opacity: 0,
    duration: .5,
    ease: "power2.inOut",
    translateY: 250,
  })

  answers.forEach((answer) => {
    let btn = document.createElement("button");
    btn.innerText = answer;
    btnContainer.append(btn);
    btn.addEventListener("click", () =>
      fourthCard(question, answer)
    );
  });
}
function fourthCard(question, answer) {
  let fourthActualCard = drawCards[3];

  question.remove();

  gsap.to("#fourth", {
    rotateY: "85",
    duration: .2,
    onComplete: () => {
      gsap.to("#fourth", {
        rotateY: "5",
      })
      document.getElementById("fourth").src = `./Playing-Cards/${drawCards[3]}.avif`;
    }
  })
  gsap.to("#fourth-arrow", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: .3,
    ease: "power1.out",
  })
  let buttonContainer = document.getElementById("button-area");
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }

  let getSuit = fourthActualCard.split("-")[0];

  let suitNames = {
    "C": "Clubs",
    "D": "Diamonds",
    "H": "Hearts",
    "S": "Spades",
  }

  let correctAnswer = suitNames[getSuit];

  if (answer === correctAnswer) {
    document.getElementById("fourth").style.backgroundColor = "green";
  } else {
    document.getElementById("fourth").style.backgroundColor = "red";
  }
  pointCounter()
  setupRestartButton()
}
function setupRestartButton() {
  let btnContainer = document.getElementById("button-area");
  let question = document.createElement("h2");
  document.getElementById("question-area").append(question);
  question.innerText = "Wanna play again ?";
  let btn = document.createElement("button");
  btn.innerText = "Restart";
  btnContainer.append(btn);
  gsap.from("#created-content", {
    opacity: 0,
    duration: .5,
    ease: "power2.inOut",
    translateY: 250,
  })
    
  btn.addEventListener("click", function() {
    // Clear existing game elements
    clearGame();
    //Reset Deck
    drawCards = [];
    // Start a new game
    playGame();
  });
}
function clearGame() {
  let cardElements = document.querySelectorAll("#first, #second, #third, #fourth");
  let arrowElements = document.querySelectorAll("#first-arrow, #second-arrow, #third-arrow, #fourth-arrow");
  arrowElements.forEach(el => {
    el.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
  })
  cardElements.forEach(el =>
    {gsap.to(el, {
    rotateY: "85",
    duration: .2,
    onComplete: () => {
      gsap.to(el, {
        rotateY: "5",
      })
      el.src = "Extras/BACK.avif"; 
    }
  })
    el.style.backgroundColor = ""; 
  });
  
  let buttonContainer = document.getElementById("button-area");
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
  
  let questionContainer = document.getElementById("question-area");
  while (questionContainer.firstChild) {
    questionContainer.removeChild(questionContainer.firstChild);
  }
}
function pointCounter(){
  let cardElements = document.querySelectorAll("#first, #second, #third, #fourth");

  cardElements.forEach(card => {
    cardResult = card.style.backgroundColor;

    if(cardResult === "green"){
      points += 2
      console.log("correct")
    } else {
      points += 0
    }

    document.getElementById("points").innerText = points

      // if(points >= 5){
      //   document.getElementById("body").style.backgroundImage = "url(./Extras/background-2.png)";
      //   console.log("hello")
      // }

    })
    
}
function getCardValue(card) {
  let result = card.split("-")[1];

  let faceCard = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  return faceCard[result] || parseInt(result);
}

