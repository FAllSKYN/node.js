const listaLivros = require('./array');

function encontraMenores(pivo, array) {
  const menores = array.filter(produto => produto.preco < pivo.preco);
  const pivoIndex = array.indexOf(pivo);
  [array[pivoIndex], array[menores.length]] = [array[menores.length], array[pivoIndex]];
  return array;
}

function divideNoPivo(array) {
  const pivo = array[Math.floor(array.length / 2)];
  console.log(pivo);
  encontraMenores(pivo, array);
  let valoresMenores = 0;

  array.forEach((atual, analisando) => {
    if (atual.preco <= pivo.preco && atual !== pivo) {
      [array[analisando], array[valoresMenores]] = [array[valoresMenores], array[analisando]];
      valoresMenores++;
    }
  });

  return array;
}

console.log(divideNoPivo(listaLivros));
