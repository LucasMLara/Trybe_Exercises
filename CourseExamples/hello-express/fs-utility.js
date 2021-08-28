const { readFile, writeFile } = require('fs').promises;

const readSimpsons = () => {
  return readFile('./simpsons.json', 'utf-8')
  .then(content => json.parse(content))

};

const writeSimpsons = (simpson)=> {
  return  writeFile('./simpsons.json', json.stringify(simpson))
};

module.exports = {
  readSimpsons,
  writeSimpsons
};