// if operator shortcut

/*Falsy Value->
false  0  ''  NaN  undefined  null
*/
// any thing except this false value is truthy value

// undefined
//let
let apple;
console.log(apple);

//const
const banana =undefined;
console.log(banana)

//NaN
console.log("text" / 5);

// normal if
if (false) {
  console.log("Truthy");
} else {
  console.log("Falsly");
}

// ternery operator
const result = true ? "Truthy" : "Falsly";
console.log(result);

//Guard Operator (&&)
// AND Operator
console.log(true && 'hello') // hello
console.log(5 && 'hello') // hello
console.log(false && 'hello') // false 
console.log(0 && 'hello') // false 
/*since the next process is guard by the first bool value*/

//Default Operator (||)
//OR Operator
console.log('EUR' || 'USD'); // EUR
console.log(false || 'USD'); // USD
/* it will take the deafult value first, if the default value is false then it will move for next */

//short form
console.log(undefined || 'USD'); // USD
//long form 
let currency;
if(!currency){
  currency='USD';
}
console.log(currency); //USD