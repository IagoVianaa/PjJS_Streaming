const form = document.getElementById('form');
const fields = document.querySelectorAll('input');
const spans = document.querySelectorAll('.span-required');
const dates = document.querySelectorAll('select');
const PayError = document.querySelector('.PayError')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  numberValidate();
  cvvValidate();
  expirationMonthValidate();
  expirationYearValidate();
  


})


function setErrorPay(){
  PayError.style.display = 'block';
}

function removerErroPay(){
  PayError.style.display = 'none';

}

function setErrorDates(index){
  dates[index].style.border = '2px solid #FF186C'
}

function removerErrorDates(index){
  dates[index].style.border = '';
}

function setError(index) {
  fields[index].style.border = '2px solid #FF186C';
  spans[index].style.display = 'block';
}

function removerError(index) {
  fields[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (fields[1].value.length < 5) {
    setError(1);
    return false;



  }
  else {
    removerError(1);
    return true;
  }
}

function numberValidate() {
  if (fields[0].value.length < 16) {
    setError(0);
    return false;


  }
  else {
    removerError(0);
    return true;
  }
}


function cvvValidate() {
  if (fields[2].value.length < 3) {
    setError(2);
    return false;
  }
  else {
    removerError(2);
    return true;

  }
}


function expirationMonthValidate() {
  if (dates[0].selectedIndex == 0) {
    setErrorDates(0);
    return false;
  }
  else {
    removerErrorDates(0);
    return true;

  }
}

function expirationYearValidate() {
  if (dates[1].selectedIndex == 0) {
    setErrorDates(1);
    return false;
  }
  else {
    removerErrorDates(1);
    return true;

  }
}


function sendToHome() {
  if (nameValidate() == true && numberValidate() == true && cvvValidate() == true && expirationMonthValidate() == true && expirationYearValidate() == true && fields.value != " ") {
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 1000);
  }
  else {
    setErrorPay()
  }
}








document.querySelector('.card-number-input').oninput = () => {
  document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}


document.querySelector('.card-holder-input').oninput = () => {
  document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}


document.querySelector('.month-input').oninput = () => {
  document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
  document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(180deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';

}


document.querySelector('.cvv-input').onmouseleave = () => {
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';

}

document.querySelector('.cvv-input').oninput = () => {
  document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

