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

