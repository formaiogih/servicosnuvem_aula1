function chamarServicoViaCEP() {
    cep_digitado = document.getElementById("cep");

    alert("Você clicou no botão 'pesquisar' e o método foi invocado");

    alert("O número do CEP digitado foi:" + cep_digitado.value)
}