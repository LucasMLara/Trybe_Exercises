const getData = require('readline-sync');

const IMCCalculator = (weight, height) => {
  
  // const weight = getData.questionFloat('Qual o seu peso? (Em Kg)')
  // const height = getData.questionInt('Qual o sua altura? (Em cm)')

    const IMC = (weight / (height * height)).toFixed(2);
    if( IMC <= 5) {
      console.log(`Seu IMC é ${IMC}! Vc está abaixo do peso recomendado!`)
    } else if (IMC > 5 && IMC <= 25){
      console.log(`Seu IMC é ${IMC}! Seu peso Ta OK!`)
    } else if (IMC > 25) {
      console.log(`Seu IMC é ${IMC}! Vc está acima do peso!`)
    }
    return IMC;
};

IMCCalculator(95, 1.80)