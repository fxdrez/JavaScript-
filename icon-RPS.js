// rock paper scissor
// computer logic
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

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  looses: 0,
  ties: 0,
};

// used as dummy
scoreBoard();

function scoreBoard() {
  document.querySelector(".js-scores")
  .innerHTML = `Wins: ${score.wins}, Looses: ${score.looses}, Draws: ${score.ties}`;
}
function resetToggle(){
  document.querySelector(".js-result").innerHTML = '';
  document.querySelector(".js-move").innerHTML = '';
}
function removeReserMessage(){
  document.querySelector(".js-reset-feedback").innerHTML = '';
}

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
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(".js-move").innerHTML = `You Choose: ${playerMove} -- Computer Choose: ${computerMove}`;
  document.querySelector(".js-result").innerHTML = `You ${result}`;
}

//Button function to click for selecting move of their choice / Player Move
const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
  playGame("rock");
  scoreBoard();
  removeReserMessage();
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
  playGame("paper");
  scoreBoard();
  removeReserMessage();
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", () => {
  playGame("scissor");
  scoreBoard();
  removeReserMessage();
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  score.wins = 0;
  score.looses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  document.querySelector(".js-reset-feedback").innerHTML =
    "You reset the score successfully!!";
  scoreBoard();
  resetToggle();
});
