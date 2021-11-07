exports.evenNums = function () {
  let arr = [];
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
};
