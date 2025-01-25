const CalcButt = document.getElementById("js-click");
CalcButt.addEventListener("click", () => {
  claculateProcess();
});

function claculateProcess() {
  const total = "";
  const inputValue = document.querySelector(".js-input");
  let cost = Number(inputValue.value); // whenever we get value from the DOM it is in string so have to convert manually
  if (cost >= 100) {
    cost = cost;
  } else if (cost < 100) {
    cost += 20;
  }
  document.querySelector(".js-result").innerHTML = `$${cost}`;
}
