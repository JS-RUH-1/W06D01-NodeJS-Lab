const evenTest = require("./evenNums");
// console.log(evenTest.even());

const even = evenTest.even();
let fs = require("fs");

// Replace the file with a new one:
fs.writeFile("nums.txt", "Even numbers: " + even, function (err) {
  if (err) throw err;
  console.log("Replaced!");
});

let http = require("http");
http
  .createServer(function (req, res) {
    fs.readFile("nums.txt", "utf8", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8000);
