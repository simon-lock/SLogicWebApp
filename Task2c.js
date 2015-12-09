var https = require("https");
var calc = require("./BestAndWorst.js");
var moment = require("moment");

if (process.argv.length < 6) {
  console.log("Invalid arguments. Process requires dataset, api key, range, and time units.");
  return;
}

var dataSet = process.argv[2];
var apiKey = process.argv[3];
var range = process.argv[4]
var timeUnits = process.argv[5]

var daySpan;

if (timeUnits == "d") {
  daySpan = range;
}
else if (timeUnits = "w") {
  daySpan = range * 7;
}
else if (timeUnits = "m") {
  daySpan = range
}
else if (timeUnits = "y") {
  daySpan = range * 365;
}
