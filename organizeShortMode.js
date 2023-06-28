const { edGalho, edFolha } = require('./arrays');

function juntaListas(lista1, lista2) {
  // Combina as duas listas em uma nova lista
  const listaFinal = [...lista1, ...lista2]; 
// Ordena a lista com base no preço
  listaFinal.sort((produto1, produto2) => produto1.preco - produto2.preco); 

  return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));
