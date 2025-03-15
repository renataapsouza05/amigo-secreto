//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;

    if  (amigo === "") {
        alert('Por favor, insira um nome.');
    } else {
        listaDeNomes.push(amigo);
        exibirListaDeNomes();
        limparCampo();
    }
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function exibirListaDeNomes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let nome of listaDeNomes) {
        let itemLista = document.createElement('li');
        itemLista.textContent = nome;
        lista.appendChild(itemLista);
    }     
 }

 function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        alert('Adicione amigos antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
    let amigoSorteado = listaDeNomes[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<p>Amigo sorteado: ${amigoSorteado}</p>`;
 }

