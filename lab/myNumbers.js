const fs = require("fs");
const http = require("http");
const number = require("./evenmodule");

const myfile = () => {
  try {
    const data = fs.writeFileSync("num.txt", `${number.even}`);
    console.log("Done Writing!");
  } catch (err) {
    console.log("error Writing");
  }
};

const browser = () => {
  try {
    const data = fs.readFileSync("./num.txt", "utf8");
    console.log("Done reading!");
    http
      .createServer((req, res) => {
        if (res) {
          res.write(data);
          res.end();
        }
      })
      .listen(8000);
  } catch (err) {
    console.log("error in reading ");
  }
};

module.exports.myfile = myfile();
module.exports.readfile = browser();
