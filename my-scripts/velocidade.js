const { questionInt } = require('readline-sync');

const getSpeed = () => {
  const distance = questionInt('Qual a distância percorrida em metros ?');
  const time = questionInt('Qual foi o tempo gasto ?');
  const speed = (distance / time).toFixed(2);
  console.log(`Sua velocidade atual é ${speed}`);
  return speed;
};
getSpeed();
