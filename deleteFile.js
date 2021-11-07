const { unlink } = require("fs");

unlink("nums.txt", () => {
  console.log("nums.js deleted");
});
