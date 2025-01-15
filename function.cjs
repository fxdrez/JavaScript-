// // function help us to reuse the code

// function fun(){
//   console.log('hello');
//   console.log(2+2);
// }

// fun()
// fun();

// // 1st way 
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
//   return computerMove;
// }

// const computer = pickcomputerMovement();

// const rock = document.getElementById("rock");
// rock.addEventListener("click", () => {
//   let result = "";
//   if (computer === "rock") {
//     result = "Draw";
//   } else if (computer === "paper") {
//     result = "Loose";
//   } else if (computer === "scissor") {
//     result = "Win";
//   }
//   alert(
//     `You Choose: Rock \nComputer Choose: ${computer}\nYou ${result}`
//   );
// });

// const paper = document.getElementById("paper");
// paper.addEventListener("click", () => {
//   const randomNum = Math.random();
//   let result = "";
//   if (computer === "rock") {
//     result = "Win";
//   } else if (computer === "paper") {
//     result = "Draw";
//   } else if (computer === "scissor") {
//     result = "Loose";
//   }
//   alert(`You Choose: Paper \nComputer Choose: ${computer}\nYou ${result}`);
// });

// const scissor = document.getElementById("scissor");
// scissor.addEventListener("click", () => {
//   const randomNum = Math.random();
//   let result = "";
//   if (computer === "rock") {
//     result = "Loose";
//   } else if (computer === "paper") {
//     result = "Win";
//   } else if (computer === "scissor") {
//     result = "Draw";
//   }
//   alert(`You Choose: Scissor \nComputer Choose: ${computer}\nYou: ${result}`);
// });

// 2nd way 
let computerMove = "";
function pickComputerMove(){
  const randomNum = Math.random();
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissor";
  }
}
const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
  pickComputerMove();
  let result = "";
  if (computerMove === "rock") {
    result = "Draw";
  } else if (computerMove === "paper") {
    result = "Loose";
  } else if (computerMove === "scissor") {
    result = "Win";
  }
  alert(`You Choose Rock \nComputer Choose: ${computerMove}\nYou ${result}`);
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
  const randomNum = Math.random();
  pickComputerMove();
  if (computerMove === "rock") {
    result = "Win";
  } else if (computerMove === "paper") {
    result = "Draw";
  } else if (computerMove === "scissor") {
    result = "Loose";
  }
  alert(`You Choose Paper \nComputer Choose: ${computerMove}\nYou ${result}`);
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", () => {
  pickComputerMove();
  if (computerMove === "rock") {
    result = "Loose";
  } else if (computerMove === "paper") {
    result = "Win";
  } else if (computerMove === "scissor") {
    result = "Draw";
  }
  alert(`You Choose Scissor \nComputer Choose: ${computerMove}\nYou ${result}`);
});
