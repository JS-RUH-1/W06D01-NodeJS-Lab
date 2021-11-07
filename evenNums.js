exports.even = () => {
  const arr = Array.from(Array(101).keys());
  let evenNum = new Array();
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 == 0) evenNum.push(arr[i]);
  evenNum = evenNum.toString();
  return evenNum;
};
