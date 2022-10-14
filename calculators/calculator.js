// this involves other files/dependencies from npm/express, but is not in the folder for brevity... The dependencies used were in the package.json were
// express and body-parser, the latter of which is used to parse data posted by a user at a particular route.

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
  console.log(req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.post("/bmiCalculator", function(req, res) {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  let result = weight / height**2;
  res.send("Your BMI is " + result);
});

app.listen(3000, function() {
  console.log("Server starting on port 3000");
});
