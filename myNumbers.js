let fs = require("fs");
let evenNums = require("./evenNums");

fs.writeFile("nums.txt", evenNums, function (err) {
  if (err) throw err;
  console.log("ﬁle was created successfully!");
});
