let the_http = require("http");
let the_fs = require("fs");
let the_port = process.env.PORT || 3000;
let the_host = "127.0.0.1";
let file_server = (file_location, status_code, response) => {
  the_fs.readFile(file_location, (error, data) => {
    response.writeHead(status_code, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
};
let the_server = the_http.createServer((request, response) => {
  if (request.url == "/") {
    file_server("files/index.html", 200, response);
  } else if (request.url == "/typespeed_game") {
    file_server("files/typespeed.html", 200, response);
  } else if (request.url == "/calculator") {
    file_server("files/calculator.html", 200, response);
  } else {
    file_server("files/index.html", 200, response);
  }
});
the_server.listen(the_port, () => {
  console.log(`Your server is deployed at http://${the_host}:${the_port}`);
});
