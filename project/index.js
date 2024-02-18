const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    let filename = `.${q.pathname}`;
    if (filename === "./") {
      filename = "./project/index.html";
    } else if (
      filename !== "./project/about.html" &&
      filename !== "./project/contact-me.html" &&
      filename !== "./project/index.html"
    ) {
      filename = "./project/404.html";
    }
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-type": "text/html" });
        res.write("404 File Not Found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(8080);
