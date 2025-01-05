//toggling the subscribe and subscibed

//fetch the element by id and assign to button variable
const button = document.getElementById("subscribebtn"); 
//used to read the text when the click action is done
button.addEventListener("click", () => {
  //condition is checked and textContent is used to select the text inside the element
  if (button.textContent === "Subscribe") {
    //changing the content of button to Subscribed
    button.textContent = "Subscribed";
    //Add the css class to subscribed for color toggling
    button.classList.add("Subscribed");
    //if the condition is false it goes to else place
  } else {
    //changing the content of button to subscribe 
    button.textContent = "Subscribe";
    //removing the css class for retrive the default color 
    button.classList.remove("Subscribed");
  }
});
