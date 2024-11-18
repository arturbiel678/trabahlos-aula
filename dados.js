function verificarFormulario() {
    
    const formulario = document.getElementById('meuFormulario');
    const idade = document.getElementById('idade').value;
    
    // Checa se o formulário foi prenchido
    if (formulario.checkValidity()) {
      
        if(idade => 12){
      window.location.href = "inicio.html"; 
      }

      else{

        alert("é necessario que vc tenha mais de 18 anos")

      }
    } 
    else {
      
      alert("Por favor, preencha todos os campos obrigatórios!");
    }



}