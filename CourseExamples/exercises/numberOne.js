// const firstFunction = (param1, param2, param3) => {
//   const promise = new Promise((resolve, reject) => {
//     if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') reject(Error('Informe apenas números'));
//     const result = ((param1 + param2) * param3);
//     if (result < 50) reject(Error('Valor muito baixo'));
//     resolve(result);
//   });
//   return promise;
// };
const {equal} = require('assert')


function validateType(...nums) {
  const parcialResult = nums.map(item => (typeof(item) === 'number') ? 1 : 0);
  //[1, 1, 1, 1]
  const result = parcialResult.reduce((acc, item)=>acc*item, 1);
  return Boolean(result);
}
//solid
// equal(validateType(1,1,1), true)
// equal(validateType(1,'1',1), false)

async function firstFunction(param1, param2, param3) {
  if(!validateType(param1, param2, param3)) {
    throw Error('Informe apenas números');
  }
  const result = ((param1 + param2) * param3);
  if (result < 50) throw (Error('Valor muito baixo'));
  return result;
}

firstFunction(5, 10, 15)
  .then((mathResult) => console.log(mathResult))
  .catch(({ message }) => console.log(message));

firstFunction(5, '10', 15)
  .then((mathResult) => console.log(mathResult))
  .catch(({ message }) => console.log(message));

firstFunction(1, 1, 1)
  .then((mathResult) => console.log(mathResult))
  .catch(({ message }) => console.log(message));
