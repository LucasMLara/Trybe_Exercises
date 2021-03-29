// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);


// refatorando para arrow function// 

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// refatorando função parte 2 - Ternary Operator (possível por haver apenas um if e um else)

// const testingScope = (escopo) => {
//   const ifScope = (escopo === true) ? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !': 'Não devo ser utilizada fora meu escopo (else)';
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }


// testingScope(false);

// refatorando para template literals 

const testingScope = (escopo) => {
  const ifScope = (escopo === true) ? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !': 'Não devo ser utilizada fora meu escopo (else)';
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}


testingScope(true);