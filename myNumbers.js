const { writeFile, readFile } = require("fs");
const evenNums = require("./evenNums");
const http = require("http");

writeFile("nums.txt", evenNums.join(","), (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

http.createServer((req, res) => {
    readFile("nums.txt", (err, data) => {
      res.write(data);
      res.end();
    });
}).listen(8000);

console.log(evenNums);
