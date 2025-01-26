// Number() is used to convert string to number
// String() is used to convert number to string
// String(25);

// special behaviour of string ---(Type Coercion)
// console.log('25'-5); // if string only contain a number and if we - / * with number then it will convert the string to number and perform operation
// console.log('25'+5); // do the different 


// window built in object
// we dont add window as it is automatically added by JS for us
// window // Browser
// window.document // same as document we use 
// window.console.log(); // same as console.log() we use
// window.alert(); // same as alert we use

// code for amazon calculator 
const CalcButt = document.getElementById("js-click");
CalcButt.addEventListener("click", () => {
  claculateProcess();
});

function claculateProcess() {
  const inputValue = document.querySelector(".js-input");
  let cost = Number(inputValue.value); // whenever we get value from the DOM it is in string so have to convert manually
  if (cost >= 100) {
    cost = cost;
  } else if (cost < 100) {
    cost += 20;
  }
  document.querySelector(".js-result").innerHTML = `$${cost}`;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    claculateProcess();
  }
});

const typing = document.querySelector(".js-input");
typing.addEventListener("keydown", () => {
  console.log("typing..");
});
