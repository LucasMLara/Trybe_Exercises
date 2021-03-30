// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente! `);

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);

// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`${oddsAndEvens[5]}, ${oddsAndEvens[1]}, ${oddsAndEvens[2]}, ${oddsAndEvens[4]}, ${oddsAndEvens[3]}, ${oddsAndEvens[0]}`);




const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderNumbers = (x) => {
  let aux;
  for (let index = 0; index < oddsAndEvens.length; index += 1) {

    for (let indice = 0; indice < oddsAndEvens.length - index; indice += 1) {
      if (oddsAndEvens[indice] > oddsAndEvens[indice + 1]) {
        aux = oddsAndEvens[indice + 1];
        oddsAndEvens[indice + 1] = oddsAndEvens[indice];
        oddsAndEvens[indice] = aux;
      }
    }console.log(oddsAndEvens)
  }
  return oddsAndEvens;
};
console.log(`${orderNumbers(oddsAndEvens)}`);
