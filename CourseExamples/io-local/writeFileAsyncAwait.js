const { writeFile } = require('fs').promises;

// const main = async () => {
//   try {
//     await writeFile('./meu-arquivo.txt', 'Meu textão');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// };

// main();

// const fs = require('fs').promises;

// A flag wx abre o arquivo para escrita **apenas** caso ele não exista.
// Caso o contrário, um erro será lançado

writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'w' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(err);
  });
