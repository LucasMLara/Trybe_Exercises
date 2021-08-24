const readLine = require('readline-sync');

const nome = readLine.question('Qual seu nome? ')
const idade = readLine.questionInt('Qual sua idade? ')

console.log(`Olá, ${nome}! Você está com ${idade} anos nas costas!`)


// console.log('Hello, world!');