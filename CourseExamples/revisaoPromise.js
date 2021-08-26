const { readFile } = require('fs');

const readFilePromise = (fileName) => new Promise((resolve, reject) => {
  readFile(fileName, (err, content) => {
    if (err) return reject(err);
    resolve(content);
  });
});

// const leiaPraMim = new Promise ((OK, notOkay) => {

// });
