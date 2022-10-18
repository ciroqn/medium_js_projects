

// Require npm packages
const express = require("express");
const bodyParser = require("body-parser");
// Gets data from API (similar to the native https module in openweather API that I created). However, instead of 'getting' data
// from an external source, using https.get(...), we want to *send* data to an external source, by using https.request(...)
const request = require("request");
const https = require("https");

const app = express();
// Parse data sent via a form on the website so we can pick out relevant data
app.use(bodyParser.urlencoded({extended: true}));
// when we go to the root route, only the Bootstrap CSS works, and not the custom. This is because CSS is a local file. To
// make the local CSS work, we create a public folder, into which all static files are stored, including images.
app.use(express.static("public"))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  console.log(req.body);

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  // set up object to send to mailchimp. The parameters are specified in mailchimp docs
  let dataToSend = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  let json_data = JSON.stringify(dataToSend);


  // send data to this url. Note the paramaters which has the list, or audience id, which tells mailchimp which list the
  // data will be added to
  let url = "https://usX.api.mailchimp.com/3.0/lists/idList";

  let options = {
    method: "POST",
    auth: "marcus:apikey"
  }

  // https module sending data to mailchimp server. We then catch the data sent back in response from the mailchimp server
  const request = https.request(url, options, function(response) {

    // if the response we get back from mailchimp is OK send the success.html, if not, get user to try again
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    };

    // once we get the data, parse the data in JSON format and log it
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  // send json data to mailchimp server (i.e. let's add our subscriber!)
  request.write(json_data);
  request.end();

})

// when button pressed in /failure route, this .post() captures the 'data' and redirects the user to the home route to
// try again
app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server set up on port 3000.");
});


// API key disabled
