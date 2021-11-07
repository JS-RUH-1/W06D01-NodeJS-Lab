const http = require("http");
// create a server 
http.createServer((req, res) => {
    if (res) {
      res.write("Hey! I can use Node!");
      res.end();
    }
  })
  .listen(3000);

