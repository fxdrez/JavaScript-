//what is object?
//An object groups multiple value together.
//use multiple value together

// const product = {
//   name:'apple',
//   price: 130000
// };
// console.log(product);
// console.log(typeof(product));
// console.log(product.name);
// console.log(product.price);

// product.name = "iPhone";
// console.log(product);

// //Dot Notation(.)

// product.quantities = 20;
// console.log(product);

// delete product.price;
// console.log(product)

// function calculateTax() {
//   console.log(1000 * 0.1);
// }
// calculateTax();

// function calculateVat(price) {
//   return console.log(price * 0.18);
// }
// calculateVat(5000);
// calculateVat(10000);

// function print(a, b) {
//   console.log(
//     `The a is ${a} and b is ${b} and their sum is ${
//       a + b
//     } and the difference is ${a - b}`
//   );
// }
// print(12, 6);
// print(18, 20);

// function CalcTaxOfProduct(cost, taxPer) {
//   console.log(`Tax Amount: ${cost * (taxPer * 0.01)}`);
//   console.log(`Total: ${cost + cost * (taxPer * 0.01)}`);
// }
// CalcTaxOfProduct(10000, 8);

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

const score = {
  wins: 0,
  looses: 0,
  ties: 0,
};

//Game Operation
function playGame(playerMove) {
  const computerMove = pickcomputerMovement();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Draw";
    } else if (computerMove === "paper") {
      result = "Loose";
    } else if (computerMove === "scissor") {
      result = "Win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Win";
    } else if (computerMove === "paper") {
      result = "Draw";
    } else if (computerMove === "scissor") {
      result = "Loose";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "Loose";
    } else if (computerMove === "paper") {
      result = "Win";
    } else if (computerMove === "scissor") {
      result = "Draw";
    }
  }

  if (result === "Win") {
    score.wins += 1;
  } else if (result === "Loose") {
    score.looses += 1;
  } else if (result === "Draw") {
    score.ties += 1;
  }
  console.log('i am error free')
  alert(
    `You Choose: ${playerMove} \nComputer Choose: ${computerMove}\nYou ${result} \n\nWins: ${score.wins} \nLooses: ${score.looses} \nDraws: ${score.ties}`
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

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  score.wins = 0;
  score.looses = 0;
  score.ties = 0;
  alert("\nScore has been reset");
});
