const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// gets access to date.js which produces date for the title in index.ejs. Haivng module produces cleaner code.
const date = require(__dirname + "/date.js");

app.use(bodyParser.urlencoded({
  extended: true
}));
// So the server has access to css file
app.set("view engine", "ejs");
app.use(express.static("public"));

// This needs to be defined in the global scope, so that the res.render in the get request can use 'item'. It's only when
// the post request receives info from user that 'item' will have a value assigned to it and passed to the home route
let items = ["Have existential crisis", "Rest", "Code"];
let workItems = [];

app.get("/", function(req, res) {

  let day = date.getDate();

  // in the docs, EJS specifies that one must have a 'views' folder with a file .ejs extension. Otherwise the JS will not
  // show up in the file. The file in this case is called 'list.ejs' and is passed the outcome of the variable 'day'. Note
  // that 'kindOfDay' is what we've named the placeholder in the list.ejs file. So, the res.render(...) *renders* the file
  // with the embedded javascript and passes the .ejs file an object with a key-value pair.
  res.render("list", {listTitle: day, newListItem: items});

  // Also above, the 'newListItem' needs to be included because every time we go to the home route, the web page *expects* all
  // variables to be defined, even if 'newListItem' is not relevant *until* we get a post request.

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItem: workItems})
});

app.get("/about", function(req, res) {
  res.render("about");
})

// this gets info from the form and reassigns item the value that the user types in. It then redirects the user to the home route
// which will have the list rendered with their new list item.
app.post("/", function(req, res) {
  console.log(req.body);
  let item = req.body.newItem;
  // this if statement is necessary because the form posts to the "/" route, even if the user is posting info from the
  // "/work" route. So to sort the incoming data and make sure it's in the correct list AND route, we need this:
  if (req.body.button === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(3000, function() {
  console.log("Server running on port 3000.");
});
