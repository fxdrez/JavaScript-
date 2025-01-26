// Subscribed Button code
const buttonSub = document.querySelector('.js-subscribebtn');

function subscribe(){
  if(buttonSub.innerHTML === 'Subscribe'){
    buttonSub.innerHTML = 'Subscribed';
    buttonSub.classList.add('is-subscribed')
  }
  else if(buttonSub.innerHTML === 'Subscribed'){
    buttonSub.innerHTML = 'Subscribe';
    buttonSub.classList.remove('is-subscribed')
  }
}

buttonSub.addEventListener('click',  ()=> {
  subscribe();
});


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



