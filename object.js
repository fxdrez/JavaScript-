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


// null vs undefined
// null - intentionally want something to be empty 

// function fun(paramter = 'default'){
//   console.log(paramter);
// } 
// fun(undefined); // default
// fun(null); // null
// fun(); // default


// Auto-Boxing
// feature to wrap the string in an special object and let it to use different properties and method, this is called autoboxing
// also works with other types of values such as number and booleam 
// doesnt works with null and undefined just give us and error

// console.log('hello'.length);
// console.log('hello'.toUpperCase());
// console.log(3.0.toString());
// console.log(true.toString());
// console.log(typeof true.toString());

// // object and references 
// const object1 = {
//   message : 'hello',
// };
// // object1 itself doesnt contain the member and function rather it reference to the memory location of the computer where the member and method created and store
// const object2 = object1; // copy by reference
// console.log(object1);
// console.log(object2);
// // object2 just copy the references of memory location where member and method are store

// object1.message = 'Good Job!'
// console.log(object1); 
// console.log(object2); 
// // it let us the change the const object1 value as object1 prevent us from change the value but it can't prevent the reference location not to chnage, so while using the reference we have to be carefull

// // we camt compare the object directly
// const object3 = {
//   message : 'Good Job!',
// };
// console.log(object3 === object1);
// console.log(object2 === object2);
// // comparing take place betwreen references not the value
// // when we compare object3 and object1 gives false as they have same value not references and when we compare object1 and object2 gives true as they have the same reference. if want to compare the value then have to do manually.

// // shortcut for object
// const object4 = {
//   message : 'hello',
//   price : 2
// };

// // const message = object4.message;
// const { message } = object4; // destructring ( so same as above )
// const { price} = object4;
// console.log(message,price);
// // destructring - easier way to take out properties out of an object

// // shorthand property
// const object5 = {
//   // message : message
//   message, // shorthand property
//   // method: function function1(){
//   //   console.log('method');
//   // }
//   method(){ // shorthand method 
//     console.log('method');
//   }
// }
// console.log(object5);
// object5.method();



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

const score = JSON.parse(localStorage.getItem("score"));

// if(!score) {
// score = {
//   wins : 0,
//   looses : 0,
//   ties : 0
// }
// }

// const score = JSON.parse(localStorage.getItem('score')) || {
//   wins : 0,
//   looses : 0,
//   ties : 0
// };

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

  localStorage.setItem("score", JSON.stringify(score));
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
  // localStorage.removeItem('score');
});
