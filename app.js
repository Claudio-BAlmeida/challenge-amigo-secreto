let amigos = [];

function adicionarAmigo(){
    nomeDoAmigo = document.querySelector('input').value;
    if(nomeDoAmigo === ""){
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nomeDoAmigo);
    limparCampo();
    console.log(nomeDoAmigo);
    listamigos();
}

function limparCampo(){
    nomeAmigo = document.getElementById('amigo').value = '';
}

function listamigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i=0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let nome = prompt('Qual é o seu nome?')
    let sorteio = parseInt(Math.random() * amigos.length);
    console.log(sorteio);
    let nomeSorteado = amigos[sorteio];
    console.log(nomeSorteado);
    if (amigos.includes(nomeSorteado)) {
        let indexAmigos = sorteio
        amigos.splice(indexAmigos,1);
        alert(`Parabéns ${nome}, seu amigo(a) secreto é o(a) ${nomeSorteado}`);
        document.getElementById('resultado').innerHTML = nomeSorteado;
    } else {
        if (amigos = []) {
        return listasVazias();
        } 
    }   
}

function listasVazias() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('listaAmigos').innerHTML = "";
}