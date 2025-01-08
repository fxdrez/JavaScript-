const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
  const randomNum = Math.random();
  let computerMove = "";
  let result = "";
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissor";
  }
  if (computerMove === "rock") {
    result = "Draw";
  } else if (computerMove === "paper") {
    result = "Loose";
  } else if (computerMove === "scissor") {
    result = "Win";
  }
  // console.log(`Computer Choose: ${computerMove}\nYou ${result}`); 
  alert(`You Choose Rock \nComputer Choose: ${computerMove}\nYou ${result}`);
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
  const randomNum = Math.random();
  let computerMove = "";
  let result = "";
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissor";
  }
  if (computerMove === "rock") {
    result = "Win";
  } else if (computerMove === "paper") {
    result = "Draw";
  } else if (computerMove === "scissor") {
    result = "Loose";
  }
  // console.log(`Computer Choose: ${computerMove}\nYou ${result}`);
  alert(`You Choose Paper \nComputer Choose: ${computerMove}\nYou ${result}`);
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", () => {
  const randomNum = Math.random();
  let computerMove = "";
  let result = "";
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissor";
  }
  if (computerMove === "rock") {
    result = "Loose";
  } else if (computerMove === "paper") {
    result = "Win";
  } else if (computerMove === "scissor") {
    result = "Draw";
  }
  // console.log(`Computer Choose: ${computerMove}\nYou ${result}`); 
  alert(`You Choose Scissor \nComputer Choose: ${computerMove}\nYou ${result}`);
});
