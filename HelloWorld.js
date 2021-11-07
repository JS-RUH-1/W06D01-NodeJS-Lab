const http = require("http");

http
  .createServer(function (request, response) {
    response.write("Hey! I can use Node!");
    response.end();
  })
  .listen(3000);
