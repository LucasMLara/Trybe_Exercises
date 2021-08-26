const { readFile } = require('fs').promises;

// Array de promises. pode usar 1 catch apenas para tratar caso mesmo uma das promessas falhem //

Promise.all([
  readFile('file1.txt'),
  readFile('file2.txt'),
  readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
