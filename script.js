// const repeat = (number, action) => {
// for (let count = 0; count <= number; count += 1) {
// action(count);
// }

// };

// repeat(10, console.table);


// const repeat = (number, action) => {
//   for (let index = 0; index <= number; index += 1) {
//     action(index);
//   }
// };

// repeat(10, (number2) => {
//   if (number2 % 2 === 0) {
//     console.log(number2, 'is even');
//   }
// });

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(10, isEven); // Testa quais números serão pares;
// repeat(10, isOdd); // Testa quais números serão ímpares;



const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;


const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15));

// _________________________________________________________________________________________
// *****************************************************************************************

const maiorQue = (primeiroNumero) => {
  return (segundoNumero) => {
    console.log(segundoNumero > primeiroNumero)
  }
}
const greaterThan = maiorQue(80)(20);