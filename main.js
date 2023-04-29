//VARIABLES

const hambuger = document.querySelector('.hamburger-container');
const nav = document.querySelector('ul');

const secondBtn = document.querySelector('.hamburger-container div:nth-of-type(2)');
const firstBtn = document.querySelector('.hamburger-container div:nth-of-type(1)');
const thirdBtn = document.querySelector('.hamburger-container div:nth-of-type(3)');



//FUNCTIONS

function reveal(){
  if(nav.style.display === "none"){
    nav.style.display = "block";
  }else{
    nav.style.display = 'none';
  }
}

function secondBtnDes (){
  if(nav.style.display === 'block'){
    secondBtn.style.display = 'none';
  }else{
      secondBtn.style.display = 'block';
  }
  
}

function firstBtnRot(){
  if(nav.style.display === 'block'){
    firstBtn.classList.add('first');
}else{
  firstBtn.classList.remove('first');
}
}

function thirdBtnRot(){
  if(nav.style.display === 'block'){
    thirdBtn.classList.add('second');
}else{
  thirdBtn.classList.remove('second');
}
}

//EVENT LISTENERS

hambuger.addEventListener('click', reveal);
hambuger.addEventListener('click', secondBtnDes);
hambuger.addEventListener('click', firstBtnRot);
hambuger.addEventListener('click', thirdBtnRot);


