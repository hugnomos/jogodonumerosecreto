//let titulo = document.querySelector(`h1`);
//titulo.innerHTML = `Jogo do Número Secreto 2.0` ;

//let paragrafo = document.querySelector (`p`)
//paragrafo.innerHTML = `Escolha um número entre 1 e 10`;
let listadeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirtextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial () {
    exibirtextoNaTela ('h1', 'Jogo do número secreto 2.0');
    exibirtextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
   
    if (chute==numeroSecreto) {
        exibirtextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirtextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute>numeroSecreto){
        exibirtextoNaTela ('p', 'O numero é menor');
        } else{
            exibirtextoNaTela ('p', 'O numero é maior');
        }

        tentativas++
        limparCampo();

    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random() * numerolimite + 1);
   let Quantidadeelementoslista = listadeNumerosSorteados.length;

   if (Quantidadeelementoslista == numerolimite) {
        listadeNumerosSorteados = [];
   }


   if (listadeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else{
    listadeNumerosSorteados.push(numeroEscolhido);
    console.log(listadeNumerosSorteados);
    return numeroEscolhido;

   }
}

function limparCampo() {
    chute = document.querySelector('Input');
    chute.value = '';

}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}