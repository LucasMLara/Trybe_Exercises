const getData = require('readline-sync');
const { equal } = require('assert');

const weight = getData.questionFloat('Qual o seu peso? (Em Kg)');
const height = getData.questionFloat('Qual o sua altura? (Em cm)');

equal(weight, 80);
equal(height, 1.8);

const IMCCalculator = (weight, height) => {
  console.log(`${height}, ${weight}`);
  const IMC = (weight / (height * height));
console.log(IMC);
  if (IMC < 18.5) {
    console.log(`Seu IMC é ${IMC}! Vc está abaixo do peso recomendado!`);
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log(`Seu IMC é ${IMC}! Seu peso Ta OK!`);
  } else if (IMC >= 25 && IMC <= 29.9) {
    console.log(`Seu IMC é ${IMC}! Vc está acima do peso!`);
  } else if (IMC >= 30 && IMC <= 34.9) {
    console.log(`Seu IMC é ${IMC}! Vc está com Obesidade Grau I!`);
  } else if (IMC >= 35 && IMC <= 39.9) {
    console.log(`Seu IMC é ${IMC}! Vc está com Obesidade Grau II!`);
  } else if (IMC > 40) {
    console.log(`Seu IMC é ${IMC}! Vc está com Obesidade Grau III e IV!`);
  }else {
    console.log('ta zuado o bagulho');
  }
  return IMC;
};

IMCCalculator(weight, height);
