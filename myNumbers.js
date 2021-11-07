const evens = require ('./evenNums');
const fs = require('fs');
let content = "Even Numbers : \n"

for (var i = 0; i < evens.numsArray.length; i++) {
    content += evens.numsArray[i] + "\n"
}
fs.writeFileSync('nums.txt', content);


/* Create web srver */
const http = require("http");
const server = http.createServer((req, res) => {
    fs.readFile("./nums.txt",(err, contents) =>
        {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            
            err
            ? res.end(`<h1>Error ${err}</h1>`)
            : res.end(contents);
        }
    )
});

server.listen(8000, "localhost", () => {
    console.log(`Server is running on http://localhost:8000`);
});

