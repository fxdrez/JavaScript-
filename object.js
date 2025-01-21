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


//Bracket notation
// it is the way to access the objects value
// it lets us to use properties that cant be access by the dot notation

// // Example
// const product = {
//   name : "shoes",
//   price : 25000
// };
// console.log(product);
// console.log(product.name); //dot notation
// console.log(product['name']); //bracket notation
// console.log(product.price);
// console.log(product['price']);



// // in some cases this dot notation fails such as
// const product1 = {
//   name : 'apple' ,
//   price : 300 ,
//   'devilery-time':'5 days'
// };
// console.log(product1['devilery-time']); //worked
// console.log(product1.devilery-time); //doesn't work

// so the bracket notation is used
//mostly dot is used as it is easy to use

// //Nested Object
// // Object within an object

// product5 = {
//   product : 'Chair',
//   price : 450 ,
//   rating : {
//     rate : 5,
//     count : 33
//   },
//   cart_in: function cart(){  //method- function inside the object
//     console.log('product is added to cart');

//     // Buit in object
//     console.log(typeof console); //object
//     console.log(typeof console.log); //fun
//     console.log(typeof Math); //obj
//     console.log(typeof Math.random); //fun
//   }
// }
// // Can be accesssed by using multiple dot / bracket
// console.log(product5.rating.count);
// console.log(product5['rating']['rate']);
// product5.cart_in();

// Built in Object
// JSON
// localStorage

// JSON
// JavaScript Object Notation
//   - a syntax
//   - similar to JavaScript object
// doesn't support single quote
// less feature doesnt support function
// json is more universal
// we use json -when we send data between computer 
//             -we store data

// Built in JSON object

// json.syringify is used to convert JS object to JSON object
// console.log(JSON.stringify(product5))
// console.log(typeof JSON.stringify(product5))

// json.parse is used to convert JSON object to JS object 
// console.log(JSON.parse(JSON.stringify(product5)));
// console.log(typeof JSON.parse(JSON.stringify(product5)));

// localStorage
// save the value that cant be lost by refreshing the page
// console.log(localStorage.getItem('Points'));
// localStorage.setItem('Points',5);

// Done by using object 

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

const score = JSON.parse(localStorage.getItem('score'));

console.log();

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

  
  alert(
    `You Choose: ${playerMove} \nComputer Choose: ${computerMove}\nYou ${result} \n\nWins: ${score.wins} \nLooses: ${score.looses} \nDraws: ${score.ties}`
  );

  localStorage.setItem('score',JSON.stringify(score));

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
