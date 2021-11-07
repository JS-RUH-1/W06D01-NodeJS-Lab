let numsArray = [];

for (let num = 1; num < 100; num++) {
    if (num % 2 == 0) {
        numsArray.push(num);
    }
  }

module.exports = { numsArray }; 