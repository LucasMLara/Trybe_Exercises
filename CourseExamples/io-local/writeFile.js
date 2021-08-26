const { writeFile } = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

writeFile(nomeDoArquivo, 'Texto novo inserido com método Node "writeFile"')
  .then(() => console.log('arquivo escrito com sucesso'))
  .catch((e) => console.error(`Erro ao escrever o arquivo: ${e}`));
