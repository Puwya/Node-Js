const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created..");
});

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello world",
  (err) => {
    if (err) throw err;
    console.log("File written to");
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "I love node js",
      (err) => {
        if (err) throw err;
        console.log("file written to");
      }
    );
  }
);

// Read File

fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.rename(
  path.join(__dirname, "/text", "hello.txt"),
  path.join(__dirname, "/text", "hello.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
