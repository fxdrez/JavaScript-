// // function help us to reuse the code

// function fun(){
//   console.log('hello');
//   console.log(2+2);
// }

// fun()
// fun();

// // 1st way using return function
// function pickcomputerMovement() {
//   let computerMove = "";
//   const randomNum = Math.random();
//   if (randomNum >= 0 && randomNum < 1 / 3) {
//     computerMove = "rock";
//   } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
//     computerMove = "paper";
//   } else if (randomNum >= 2 / 3 && randomNum < 1) {
//     computerMove = "scissor";
//   }
//   return computerMove; // return helps to use variable out of the function
// }

// const computerMove = pickcomputerMovement();

// const rock = document.getElementById("rock");
// rock.addEventListener("click", () => {
//   let result = "";
//   if (computerMove === "rock") {
//     result = "Draw";
//   } else if (computerMove === "paper") {
//     result = "Loose";
//   } else if (computerMove === "scissor") {
//     result = "Win";
//   }
//   alert(
//     `You Choose: Rock \nComputer Choose: ${computerMove}\nYou ${result}`
//   );
// });

// const paper = document.getElementById("paper");
// paper.addEventListener("click", () => {
//   const randomNum = Math.random();
//   let result = "";
//   if (computerMove === "rock") {
//     result = "Win";
//   } else if (computerMove === "paper") {
//     result = "Draw";
//   } else if (computerMove === "scissor") {
//     result = "Loose";
//   }
//   alert(`You Choose: Paper \nComputer Choose: ${computerMove}\nYou ${result}`);
// });

// const scissor = document.getElementById("scissor");
// scissor.addEventListener("click", () => {
//   const randomNum = Math.random();
//   let result = "";
//   if (computerMove === "rock") {
//     result = "Loose";
//   } else if (computerMove === "paper") {
//     result = "Win";
//   } else if (computerMove === "scissor") {
//     result = "Draw";
//   }
//   alert(`You Choose: Scissor \nComputer Choose: ${computerMove}\nYou: ${result}`);
// });

// 2nd way
// let computerMove = "";
// function pickComputerMove(){
//   const randomNum = Math.random();
//   if (randomNum >= 0 && randomNum < 1 / 3) {
//     computerMove = "rock";
//   } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
//     computerMove = "paper";
//   } else if (randomNum >= 2 / 3 && randomNum < 1) {
//     computerMove = "scissor";
//   }
// }
// const rock = document.getElementById("rock");
// rock.addEventListener("click", () => {
//   pickComputerMove();
//   let result = "";
//   if (computerMove === "rock") {
//     result = "Draw";
//   } else if (computerMove === "paper") {
//     result = "Loose";
//   } else if (computerMove === "scissor") {
//     result = "Win";
//   }
//   alert(`You Choose Rock \nComputer Choose: ${computerMove}\nYou ${result}`);
// });

// const paper = document.getElementById("paper");
// paper.addEventListener("click", () => {
//   const randomNum = Math.random();
//   pickComputerMove();
//   if (computerMove === "rock") {
//     result = "Win";
//   } else if (computerMove === "paper") {
//     result = "Draw";
//   } else if (computerMove === "scissor") {
//     result = "Loose";
//   }
//   alert(`You Choose Paper \nComputer Choose: ${computerMove}\nYou ${result}`);
// });

// const scissor = document.getElementById("scissor");
// scissor.addEventListener("click", () => {
//   pickComputerMove();
//   if (computerMove === "rock") {
//     result = "Loose";
//   } else if (computerMove === "paper") {
//     result = "Win";
//   } else if (computerMove === "scissor") {
//     result = "Draw";
//   }
//   alert(`You Choose Scissor \nComputer Choose: ${computerMove}\nYou ${result}`);
// });

//Parameters
//Return -> gets the value out of the function
//Parameter -> puts the value into the function

//Examples:-

function calculateTax() {
  console.log(1000 * 0.1);
}
calculateTax();

function calculateVat(price) {
  return console.log(price * 0.18);
}
calculateVat(5000);
calculateVat(10000);

function print(a, b) {
  console.log(
    `The a is ${a} and b is ${b} and their sum is ${
      a + b
    } and the difference is ${a - b}`
  );
}
print(12, 6);
print(18, 20);

function CalcTaxOfProduct(cost, taxPer) {
  console.log(`Tax Amount: ${cost * (taxPer * 0.01)}`);
  console.log(`Total: ${cost + cost * (taxPer * 0.01)}`);
}
CalcTaxOfProduct(10000, 8);

//3rd way using parameter of function

//Computer move in the game
function pickcomputerMovement() {

  let computerMove = "";

  const randomNum = Math.random();
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissor";
  }

  return computerMove;
}

const computerMove = pickcomputerMovement();

//Game Operation
function playGame(playerMove) {

  let result = '';

  if (playerMove == "rock") {
    if (computerMove === "rock") {
      result = "Draw";
    } else if (computerMove === "paper") {
      result = "Loose";
    } else if (computerMove === "scissor") {
      result = "Win";
    }

  } else if (playerMove == "paper") {
    if (computerMove === "rock") {
      result = "Win";
    } else if (computerMove === "paper") {
      result = "Draw";
    } else if (computerMove === "scissor") {
      result = "Loose";
    }

  } else if (playerMove == "scissor") {
    if (computerMove === "rock") {
      result = "Loose";
    } else if (computerMove === "paper") {
      result = "Win";
    } else if (computerMove === "scissor") {
      result = "Draw";
    }
  }

  alert(
    `You Choose: ${playerMove} \nComputer Choose: ${computerMove}\nYou ${result}`
  );
}

//Button function to click for selecting move of their choice / Player Move
const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
  playGame("rock");
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
  playGame("paper");
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", () => {
  playGame("scissor");
});
