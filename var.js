let carttotal = 0;
const quantity = document.getElementById("show-quantity");
quantity.addEventListener("click", () => {
  console.log(`Cart Quantity: ${carttotal}`);
});

const addtocart = document.getElementById("add-to-cart");
addtocart.addEventListener("click", () => {
  carttotal += 1;
  console.log(`Cart Quantity: ${carttotal}`);
});

const addtwo = document.getElementById("+2");
addtwo.addEventListener("click", () => {
  carttotal =+ 2;
  console.log(`Cart Quantity: ${carttotal}`);
});

const addthree = document.getElementById("+3");
addthree.addEventListener('click', ()=>{
  carttotal = carttotal + 3;
  console.log(`Cart Quantity: ${carttotal}`);
});

const reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
  carttotal = 0;
  console.log("Cart is reset")
  console.log(`Cart Quantity: ${carttotal}`);
})