const path = require("path")
const express = require("express");
const app = express();

app.get("/api/", (req, res) => {
    res.json({ message: "Hello World!" });
  });

app.use(express.static(path.resolve(__dirname, "./public/")));

app.use("*", (req, res) => {
  const test = "server/public/index.html"
  const dir = path.resolve(__dirname, "./public/", "index.html");
  console.log(dir)
  res.sendFile(dir);
});


app.listen(8080, () => {
    console.log("O servidor esta rodando na url: http://localhost:8080")
});