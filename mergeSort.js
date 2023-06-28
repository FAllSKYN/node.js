const listaLivros = require(`./array.js`);

function mergeSort(array){

    if(array.length > 1){
        const meio = Math.floor(array.length/2);
        const parte1 = mergeSort(array.slice(0, meio)); 
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2);
    }
    return array; 
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        } else {
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }

    // Adiciona os elementos restantes de parte1, se houver
    while (posicaoAtualParte1 < parte1.length) {
        resultado.push(parte1[posicaoAtualParte1]);
        posicaoAtualParte1++;
    }

    // Adiciona os elementos restantes de parte2, se houver
    while (posicaoAtualParte2 < parte2.length) {
        resultado.push(parte2[posicaoAtualParte2]);
        posicaoAtualParte2++;
    }

    return resultado;
}

console.log(mergeSort(listaLivros));
