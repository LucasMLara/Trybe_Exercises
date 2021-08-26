const firstFunction = (param1, param2, param3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') reject(Error('Informe apenas números'));
    const result = ((param1 + param2) * param3);
    if (result < 50) reject(Error('Valor muito baixo'));
    resolve(result);
  });
  return promise;
};

firstFunction(5, 10, 15)
  .then((mathResult) => console.log(mathResult))
  .catch(({ message }) => console.log(message));

firstFunction(5, '10', 15)
  .then((mathResult) => console.log(mathResult))
  .catch(({ message }) => console.log(message));

firstFunction(1, 1, 1)
  .then((mathResult) => console.log(mathResult))
  .catch(({ message }) => console.log(message));
