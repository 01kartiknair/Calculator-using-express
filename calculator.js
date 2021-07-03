// Require express in your calculator.js
//
// Setup express

const express = require("express");
const app = express();

//setup body-parser package and require it
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

//Create a root route get method with app.get()
//and
//Send the html page from the root route as the response

app.get("/", function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;
  res.send("The result of the calculation is " + String(result));
});


//Setting the /bmicalculator page
app.get("/bmicalculator", function (req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var bmi = w/(h*h);
    res.send("Your BMI is "+ String(bmi));
});

// Spin up our server on port 3000 with app.listen
app.listen(3000, function (){
  console.log("Server started on port 3000");
});
