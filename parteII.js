const descendMultiply = (number) => {
  let result;
  if (number > 0) {
    result = 1;
    for (let index = number; index > 1; index -= 1) {
      result = result * index;
      console.log(result );
    }
  }
};
descendMultiply(5);
