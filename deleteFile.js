const {unlink} = require("fs");

unlink("nums.txt", () => {
    console.log("file deleted")
})