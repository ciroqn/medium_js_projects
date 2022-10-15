// note: in this folder, there is no npm ($npm init) or express installation ($npm install express), nor ($npm i body-parser). These are needed for the
// following program to work via terminal

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
// Allows app to get data that is posted by user so that we, the developer, can use it.
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  let city = req.body.cityName;
  let apiKey = "your_API_key_here";
  let units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?&q=" + city + "&units=" + units + "&appid=" + apiKey;
  // https.get(...) gets the data from the weather API. It takes in the url that we're interested in
  https.get(url, function(response) {
    console.log(response.statusCode);

    // when data is received, 'JSON-ify' the data from OpenWeather API ready for sorting
    response.on("data", function(data) {
      // note JSON.parse() as opposed to JSON.stringify() which gives a simliar structure to JS objects
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      let temp = weatherData.main.temp;
      let description = weatherData.weather[0].description;
      let weatherIconId = weatherData.weather[0].icon;
      // See OpenWeather docs
      let iconUrl = "http://openweathermap.org/img/wn/" + weatherIconId + "@2x.png";
      res.write("<h1>The temperature in " + city + " is " + temp + " degrees Celsius.</h1>");
      res.write("<img src="+iconUrl+">");
      // Only one .send() per .post() and .get() hence the use of .write() above for multiple lines
      res.send();
    })
  });
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
