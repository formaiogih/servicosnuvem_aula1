function chamarServicoViaCEP() {
    cep_digitado = document.getElementById("cep").value;

    // alert("Você clicou no botão 'pesquisar' e o método foi invocado");

    // alert("O número do CEP digitado foi: " + cep_digitado.value);
  
    const urlViaCEP = "https://viacep.com.br/ws/" + cep_digitado + "/json/";

    fetch(urlViaCEP)

    .then(response => {

        if(response.ok){
            // alert("Resposta OK");

            return response.json();

        } else {
            // alert("Resposta não OK");
        }
     })

    .then((data) => {
        alert(JSON.stringify(data));
        console.log(data);
    })

    .catch(error => {
        alert("ALERT: Erro ao requisitar o serviço na nuvem!")

        console.error("Erro ao requisitar o serviço na nuvem")
    })
}
