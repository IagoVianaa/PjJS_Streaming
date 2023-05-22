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
