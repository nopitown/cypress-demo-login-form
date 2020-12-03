const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/login.html"));
});

router.use("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
