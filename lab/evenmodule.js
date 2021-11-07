const evennumber = () => {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) arr.push(i);
  }
  return arr;
};

module.exports.even = evennumber();
