let listaDeNumerosSorteados = [];
let qtdNumerosPossiveis = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); 
}

function exibirMensagemInicial(){
exibirNaTela('h1','Jogo de acertar o número.');
exibirNaTela('p',`Escolha o número de 1 a ${qtdNumerosPossiveis}`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirNaTela('h1','Acertou!');
        let tentativas = tentativa>1? 'tentativas':'tentativa';
        let mensagemTentativas = `Parabéns, você acertou o número ${numeroSecreto} com ${tentativa} ${tentativas}`;
        exibirNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else 
        if(chute > numeroSecreto){
            exibirNaTela('h1','Tente mais uma vez!');        
            exibirNaTela('p',`O número é menor que ${chute}`);        
        }   else {
            exibirNaTela('h1','Tente mais uma vez!');
            exibirNaTela('p',`O número é maior que ${chute}`);        
    }
    tentativa++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* qtdNumerosPossiveis + 1)
    let quantdadeElementosLista = listaDeNumerosSorteados.length;

    if ( quantdadeElementosLista == qtdNumerosPossiveis){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
}