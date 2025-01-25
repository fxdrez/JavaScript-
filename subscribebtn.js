const buttonSub = document.querySelector('.subscribebtn');

function subscribe(){
  if(buttonSub.innerHTML === 'Subscribe'){
    buttonSub.innerHTML = 'Subscribed';
  }
  else if(buttonSub.innerHTML === 'Subscribed'){
    buttonSub.innerHTML = 'Subscribe';
  }
}

buttonSub.addEventListener('click',  ()=> {
  subscribe();
});
