import { getLista, limpaLista, adicionaNaLista, removeDaLista } from './lista.js';

const olItens = document.querySelector('#itens');
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');
const btnRemover = document.querySelector('#remover');
const pIndice = document.querySelector('#indice');

atualizarLista();

function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

btnLimpar.addEventListener('click', limparItensDeLista);

function limparItensDeLista(){
    limpaLista();
    atualizarLista();
}

btnAdicionar.addEventListener('click', adicionarItemNaLista);

function adicionarItemNaLista() {
    const valor = pEntrada.innerText;
    adicionaNaLista(valor);
    pEntrada.innerText = "";
    atualizarLista();  
}

btnRemover.addEventListener('click', removerItemNaLista);

function removerItemNaLista() {
    const indice = parseInt(pIndice.innerText);
    removeDaLista(indice-1);
    atualizarLista();
}

