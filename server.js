const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const router = require("./src/router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", router);
app.get("/", function (req, res) {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Discord Panel App listening on port ${port}`);
});
