// Função para obter o texto do textarea
function obterTexto() {
    texto = document.getElementById('textoParaCriptografar').value;
    return texto; 
}

// Função para exibir texto na tela com base no ID do elemento
function exibirTextoNaTela(id, texto) {
    let idCampo = document.getElementById(`${id}`);
    idCampo.innerHTML = texto;
}

// Função para validar se a string contém apenas letras minúsculas sem acento
function validaString(s) {
    return /^\s*[a-z][a-z\s]*\s*$/g.test(s);
}


// Função para criptografar o texto
function criptografarTexto(texto) {
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    texto = texto.toLowerCase();
    const textoCriptografado = texto.replace(/[eiaou]/g, letra => substituicoes[letra]);
    return textoCriptografado;
}

// Função para processar o botão de criptografar
function botaoCriptografar() {
    let textoMensagem = obterTexto();
    document.getElementById("mensagem__texto__imagem").style.display = "none";

    if (validaString(textoMensagem)) {
        if (textoMensagem.length > 0) {
            exibirTextoNaTela('h2', 'Criptografia');
            let textoCriptografado = criptografarTexto(textoMensagem);
            exibirTextoNaTela('p', `${textoCriptografado}`);
            document.getElementById("mensagem__button").style.display = "flex";
        } else {
            exibirTextoNaTela('h2', 'Criptografia não encontrada. O texto está vazio.');
            exibirTextoNaTela('p', ``);
            document.getElementById("mensagem__button").style.display = "none";
        }
    } else if (textoMensagem.length > 0) {
        exibirTextoNaTela('h2', `O texto"${textoMensagem}" não é válida.`);
        exibirTextoNaTela('p', `Deve conter apenas letras minúsculas e sem acento.`);
        document.getElementById("mensagem__button").style.display = "none";
    } else {
        exibirTextoNaTela('h2', 'Criptografia não encontrada. O texto está vazio.');
        exibirTextoNaTela('p', ``);
        document.getElementById("mensagem__button").style.display = "none";
    }
}

// Função para descriptografar o texto
function descriptografarTexto(textoCriptografado) {
    const substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    textoCriptografado = textoCriptografado.toLowerCase();
    const textoDescriptografado = textoCriptografado.replace(/(enter|imes|ai|ober|ufat)/g, letra => substituicoes[letra]);
    return textoDescriptografado;
}

// Função para processar o botão de descriptografar
function botaoDescriptografar() {
    let textoMensagem = obterTexto();
    document.getElementById("mensagem__texto__imagem").style.display = "none";

    if (validaString(textoMensagem)) {
        if (textoMensagem.length > 0) {
            exibirTextoNaTela('h2', 'Descriptografia');
            let textoDescriptografado = descriptografarTexto(textoMensagem);
            exibirTextoNaTela('p', `${textoDescriptografado}`);
            document.getElementById("mensagem__button").style.display = "flex";
        } else {
            exibirTextoNaTela('h2', ' Descriptografia não encontrada. O texto está vazio.');
            exibirTextoNaTela('p', ``);
            document.getElementById("mensagem__button").style.display = "none";
        }
    } else if (textoMensagem.length > 0) {
        exibirTextoNaTela('h2', `O texto "${textoMensagem}" não é válida.`);
        exibirTextoNaTela('p', `Deve conter apenas letras minúsculas e sem acento.`);
        document.getElementById("mensagem__button").style.display = "none";
    } else {
        exibirTextoNaTela('h2', ' Descriptografia não encontrada. O texto está vazio.');
        exibirTextoNaTela('p', ``);
        document.getElementById("mensagem__button").style.display = "none";
    }
}

// Função para copiar o texto para a área de transferência
function botaoCopiar() {
    let texto = document.getElementById('p').innerText;
    copiarTexto(texto);
}

// Função para copiar o texto para a área de transferência usando o Clipboard API
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto);
}
