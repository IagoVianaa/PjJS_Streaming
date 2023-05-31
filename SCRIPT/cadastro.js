<<<<<<< HEAD
document.getElementById("myForm").addEventListener("submit", function(event) {
  let firstPassword = document.querySelector('input[name=first-password]').value;
  let secondPassword = document.querySelector('input[name=second-password]').value;

  if (firstPassword != secondPassword) {
    // Impede o envio padrão do formulário
    event.preventDefault();
    swal({
      title: "Senhas não são iguais!",
      icon: "error",
    });
  } else {
    // Impede o envio padrão do formulário
    event.preventDefault();
    swal({
      title: "Cadastro realizado com sucesso!",
      icon: "success",
    }).then(function() {
      window.location.href = "index.html";
    });
    // Redireciona para a página desejada
  }
});
=======
const form = document.getElementById('form');
const fields = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const loginSpan = document.querySelector('.loginFailed')


form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  mainPasswordValidate();
  comparePassword();

})

function setError(index) {
  fields[index].style.border = '2px solid #FF186C';
  spans[index].style.display = 'block';
}

function removerError(index) {
  fields[index].style.border = '';
  spans[index].style.display = 'none';
}


function setErrorLogin(){
  loginSpan.style.display = 'block';
}

function removerErroLogin(){
  loginSpan.style.display = 'none';

}


function nameValidate() {
  if (fields[1].value.length < 3) {
    setError(1);
    return false;
    

  }
  else {
    removerError(1);
    return true;
  }
}

function emailValidate() {
  if (!emailRegex.test(fields[0].value)) {
    setError(0);
    return false;

  }
  else {
    removerError(0);
    return true;
  }
}

function mainPasswordValidate() {
  if (fields[2].value.length < 8) {
    setError(2);
    return false;
  }
  else {
    removerError(2);
    comparePassword();
    return true;
  }
}

function comparePassword() {
  if (fields[2].value == fields[3].value && fields[3].value.length >= 8) {
    removerError(3);
    return true;
  }
  else {
    setError(3);
    return false;

  }
}

function sendToHome() {
  if (nameValidate() == true && emailValidate() == true && mainPasswordValidate() == true && comparePassword() == true && fields.value != " ") {
    window.location.href = "index.html";
  }
  else {
    setErrorLogin();
  }
}


>>>>>>> 2983bd885b5455b3b5786e9b2135166c365a83af
