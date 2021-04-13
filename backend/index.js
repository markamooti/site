const express = require("express");
const cors = require("cors");
const { readFileSync, writeFileSync } = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
PORT = 5000;

app.get("/", (req, res) => {
  res.json({ hello: "it works!!!" });
});

app.get("/view-count", (req, res) => {
  const count = readFileSync("./count.txt", "utf-8");

  const newCount = parseInt(count) + 1;

  writeFileSync("./count.txt", newCount);

  const response = { count: newCount.toString() };

  console.log(response);

  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Its alive at http://localhost:${PORT}`);
});
