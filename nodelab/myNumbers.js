const http = require("http");
const evenNum = require("./evenNums");

let fs = require("fs");

fs.writeFile("nums.txt", "Even numbers:" + evenNum.evenNums(), function (err) {
  if (err) throw err;
  console.log("done");
});

http
  .createServer(function (req, res) {
    fs.readFile("nums.txt", function (err, data) {
      res.writeHead(200, { "content-Type": "nums.txt" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8000);
