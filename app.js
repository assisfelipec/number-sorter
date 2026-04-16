
function pegarValor(tag){
    return document.querySelector(tag).value;
}

function sortear(){
    let quantidadeNumeros = parseInt(pegarValor("#quantidade"));
    let numeroMinimo = parseInt(pegarValor("#minimo"));
    let numeroMaximo = parseInt(pegarValor("#maximo"));

    if(numeroMinimo >= numeroMaximo){
        exibirTexto("#resultado label", "O número mínimo não pode ser maior ou igual o número máximo!");
        limparCampos();
        return;
    }

    if(quantidadeNumeros > numeroMaximo - numeroMinimo + 1){
        exibirTexto("#resultado label", "A quantidade de números é maior que os valores disponíveis no intervalo!");
        limparCampos();
        return;
    }

    if(numeroMaximo < 1 || quantidadeNumeros < 1 || numeroMinimo < 0){
        exibirTexto('#resultado label', "Inválido, tente novamente!");
        limparCampos();
        return;
    }

    let listaNumeros = [];
    let numeroSorteado;

    for(let contador = 0; contador < quantidadeNumeros; contador++){
        numeroSorteado = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);

        while(listaNumeros.includes(numeroSorteado)){
            numeroSorteado = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        }

        listaNumeros.push(numeroSorteado);

    }   

    let palavraSorteio = numeroMinimo > 1? "Números sorteados" : "Número sorteado";
    let MensagemSorteio = palavraSorteio + ":   " + listaNumeros.join(", ") + "."
    exibirTexto('#resultado label', MensagemSorteio);
    desbloquearBotao(true)
}

function gerarNumeroAleatorio(min, max){
    return parseInt(Math.random() * (max - min + 1) + min);
}

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemErro(){
    if(numeroMinimo < 1 || quantidadeNumeros < 1){
        exibirTexto('#resultado label', "Inválido, tente novamente!");
    }
}

function limparCampos(){
    let campos = document.querySelectorAll('.container__input');

    campos.forEach(campo => {
        campo.value = "";
    });
}

function desbloquearBotao(estado){
    let botao = document.getElementById('btn-reiniciar');
    if(estado == true){ 
        botao.classList.remove('container__botao-desabilitado') ;
        botao.classList.add('container__botao');
    }else if (estado == false){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar(){
    limparCampos();
    exibirTexto('#resultado label', "Números sorteados:  nenhum até agora");
    desbloquearBotao(false);
}


