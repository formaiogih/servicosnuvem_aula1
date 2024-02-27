function chamarServicoViaCEP() {
    cep_digitado = document.getElementById("cep");

    // alert("Você clicou no botão 'pesquisar' e o método foi invocado");

    // alert("O número do CEP digitado foi:" + cep_digitado.value)

    cep_digitado = "01001000";
  
    const urlViaCEP = "viacep.com.br/ws/" + cep_digitado + "/json/";

    fetch(urlViaCEP).then(response =>{

        if(response.ok){
            alert("Resposta OK");
        } else {
            alert("Resposta não OK");
        }
    })

    .then(data => {
        alert(data);
        console.log(data);
    })

    .catch(error => {
        alert("Erro ao requisitar o serviço na nuvem!")

        console.error("Erro ao requisitar o serviço na nuvem")
    })
}