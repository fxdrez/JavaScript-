const GamingToggle = document.querySelector(".gaming-button-js");
GamingToggle.addEventListener('click',()=>{
  togglebutton('.gaming-button-js');
})
const MusicToggle = document.querySelector(".music-button-js");
MusicToggle.addEventListener('click',()=>{
  togglebutton('.music-button-js');
})
const TechToggle = document.querySelector(".tech-button-js");
TechToggle.addEventListener('click',()=>{
  togglebutton('.tech-button-js')
})

function togglebutton(selector){
  const button = document.querySelector(selector);
  if(!button.classList.contains('is-toggle')){
    offprevioustoggle();
    button.classList.add('is-toggle')
  }
  else {
    button.classList.remove('is-toggle');
  }
}

function offprevioustoggle(){
  const previousButton = document.querySelector('.is-toggle');
  if(previousButton){
    previousButton.classList.remove('is-toggle');
  }
}