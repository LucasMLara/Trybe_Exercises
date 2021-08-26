const { readFile } = require('fs');

const readFilePromise = (fileName) => new Promise((resolve, reject) => {
  readFile(fileName, (err, content) => {
    if (err) reject(err);
    resolve(content);
  });
});

readFilePromise('./arquivo.txt') // experimente tirar o / entre o ponto e o nome do arquivo e observe um erro de caminho errado do arquivo //
  .then((content) => console.log(`Arquivo lido com Sucesso. Seu tamanho em Bytes é: ${content.byteLength} bytes`))
  .catch((err) => console.log(`Erro ao ler arquivo: ${err.message}`));

// exemplo de uso de promises e callbacks

readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });

// crie arquivos com os nomes do exmeplo e experimente //
