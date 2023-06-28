const listaLivros = require('./arrayOrdenado.js');
//const trocaLugar = require (`./Recursão.js`);

function busca(array,ate,de, valorBuscado){

    const meio = Math.floor((de + ate)/2);
    const atual = array[meio];

    if(valorBuscado !== atual.preco){
        return -1;
    }
    if(valorBuscado ===atual.preco){
        return meio;
    }
    if(valorBuscado < atual.preco){
        return busca(array,de, meio - 1, valorBuscado);
    }
    if(valorBuscado > atual.preco){
        return busca(array, meio + 1, ate, valorBuscado);
    }
}
console.log(busca(listaLivros,0,listaLivros.length -1,60));