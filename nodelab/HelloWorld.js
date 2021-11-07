const http = require("http");
const evenNum = require("./evenNums");

http
  .createServer(function (request, response) {
    console.log("created successfully");
    response.write("Hey! I can use Node!!");
    response.end();
  })
  .listen(3002);
