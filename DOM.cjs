// DOM - Document Object Model

// title
console.log(document.title); // DOM
document.title = "changed";
// title changed to changed

// body
console.log(document.body);
console.log(typeof document.body);

// innerHTML
console.log(document.body.innerHTML);
// innerHTML gives us the control of html body and we can manupulate it as we want

// document.body.innerHTML = 'hii';
// it removes all other content written in body and show hii

// document.body.innerHTML = "<button>hii</button>";

// document.querySelector
console.log(document.querySelector("button"));
console.log(document.querySelector("body"));
// work same as document.body
console.log(document.querySelector("button").innerHTML);
// every html element has innerHTML property
document.querySelector("button")
  .innerHTML = "HELLO";
console.log(document.querySelector('.js-butt')); // it gives second button
document.querySelector('.js-butt').innerHTML = 'HII'; // changes the second button content, using class attributes
const buttonElement = document.querySelectorAll('js-butt');
console.log(buttonElement);
