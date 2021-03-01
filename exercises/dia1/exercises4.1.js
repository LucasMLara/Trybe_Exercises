//Exercício 1

let a = 5;
let b = 2;
let c = 9;


let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a ** b;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

//Exercício 2

if (a > b) {
  console.log(a)
}
else {
  console.log(b)
}

//Exercício 3

if (a > b && a > c) {
  console.log(a)
} else if (b > a && b > c) {
  console.log(b)
} else {
  console.log(c)
}

//Exercício 4

let d = -4;

if (d > 0) {
  console.log('positive')
} else if (d < 0) {
  console.log('negative')
} else {
  console.log('zero')
}

//Exercício 5

let e = 45;
let f = 45;
let g = 90;

if (e + f + g === 180) {
  console.log('true')
} else if (e + f + g !== 180) {
  console.log('false')
} else {
  console.log('Erro')
}

//Exercício 6

let h = "QueEn";

switch (h.toLowerCase()) {
  case "king".toLowerCase():
    console.log('move para todos as direções em 1 casa')
    break;

  case "pawn":
    console.log('move pra cima')
    break;

  case "queen":
    console.log('move para todos os lados, quantas casas quiser')
    break;

  case "rooks":
    console.log('move para cima, baixo, esquerda direita, quantas casas quiser')
    break;

  case "bishops":
    console.log('move na diagonal')
    break;

  case "knight":
    console.log('move em L')
    break;

  default:
    console.log('Falhou miseravalmente!!!')

}

//Exercicio 7

let nota = 75;

if (nota < 0 || nota > 100) {

  console.log('Erro');

}
else if (nota >= 90) {

  console.log('A');

} else if (nota >= 80) {

  console.log('B');

} else if (nota >= 70) {

  console.log('C');

} else if (nota >= 60) {

  console.log('D');

} else if (nota >= 50) {

  console.log('E');

} else {

  console.log('F');
}

//Exercício 8

let y = 12
let x = -5
let z = 9

if (y%2 === 0 || x%2 === 0 || z%2 === 0) {
  console.log('true')
} else {
  console.log('false')
}

//Exercício 9

let y = 397
let x = -5
let z = 9

if (y%2 === 1 || x%2 === 1 || z%2 === 1) {
  console.log('true')
} else {
  console.log('false')
}

//Exercício 10

let cost = 50;
let sell = 120;
let tax = cost*0.2;

let totalCostValue = cost + tax;
let profit = sell - totalCostValue;

if (cost < 0 || sell <0) {
  console.log('Ta sonegando????')
} else {
  console.log(profit*1000)
}