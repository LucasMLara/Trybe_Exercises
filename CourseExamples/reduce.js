const prt = require('prettier');
const fs = require('fs').promises;

async function main() {
  const file = await fs.readFile('tests.json', {encoding: 'utf-8'});
  const prettyFile = prt.format(file, {parser: 'json'})
  await fs.writeFile('tests.json', prettyFile);

}

main();