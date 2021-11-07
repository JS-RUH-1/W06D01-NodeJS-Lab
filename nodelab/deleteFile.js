let fs = require("fs");

fs.unlink("nums.txt", function (err) {
  if (err) throw err;
  console.log("file deleted!");
});
