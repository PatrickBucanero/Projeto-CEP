"use strict";

//document.getElementById("saida").textContent = "Oi";  //Mostrar o texto no lugar onde o id saida esta

const cep = document.getElementById("cep");
const saida = document.getElementById("saida");
const btnPesquisar = document.getElementById("btnPesquisar");

btnPesquisar.addEventListener("click", buscarDadosCEP);

async function buscarDadosCEP(){ //async usado para o await ser usados
    

    try{
        let urlCEP = `https://viacep.com.br/ws/${obterCEP()}/json/` ; 

        const trazerCEP = fetch(urlCEP);
        const resposta = await trazerCEP;
        const dadosJSON = await resposta.json(); //metodo json é exclusivo do response
        console.log(dadosJSON)
        saida.innerText = apresentarDadosCEP(dadosJSON);   //innerText recebe o retorno da funcao
    } catch(e){
        saida.textContent = `Erro: ${e}`;
    }

   
}


function apresentarDadosCEP(obj){
    return (!obj.erro)?
    `${obj.logradouro}, ${obj.complemento}
    ${obj.bairro}
    ${obj.localidade}/${obj.uf}` :
    "CEP inexistente."

}

function obterCEP(){
    return cep.value;
}
