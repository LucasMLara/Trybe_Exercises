// const { readFile } = require('fs'); para o método sem promises. primeira opção abaixo

// const nomeDoArquivo = 'meu-arquivo.txt';

// readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });

const { readFile } = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa
    // ao sistema operacional que houve um erro com código
  });
