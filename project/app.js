const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

const allPaths = ["/", "/about.html", "/contact-me.html"];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me.html", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});


app.use((req, res) => {
  if (!allPaths.includes("/" + req.path)) {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
