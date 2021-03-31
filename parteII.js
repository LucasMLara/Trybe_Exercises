// const descendMultiply = (number) => {
//   let result;
//   if (number > 0) {
//     result = 1;
//     for (let index = number; index > 1; index -= 1) {
//       result = result * index;
//       console.log(result);
//     }
//   }
// };
// descendMultiply(5);


const  longestWord = (phrase) => {
  
  let strInArray = phrase.split(' ')

  const sortedArray = strInArray.sort((a, b) => b.length-a.length)
  
  const biggestWord = sortedArray[0];
  console.log(biggestWord);
  

}

longestWord('Tiago Santos e Lucas Muniz Lara estudando feito Nabucodonosor')
