const { readFile } = require('fs');

readFile('./arquivo.txt', (error, content) => {
  if (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
    return;
  }
  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
