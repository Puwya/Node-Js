const http = require("http");

// Create a server object
http
  .createServer((req, res) => {
    // Write a response
    res.write("hello");
    res.end();
  })
  .listen(3000, () => console.log("server running..."));
