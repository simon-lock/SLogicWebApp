var http = require("http");

if (process.argv.length < 4) {
  console.log("Invalid arguments. Process requires dataset and api key.");
  return;
}

var dataSet = process.argv[2];
var apiKey = process.argv[3];

var options = {
  host: "www.quandl.com",
  path: "/api/v3/datasets/WIKI/" + dataSet + "?api_key=" + apiKey
};

callback = function(response) {
  console.log(response);
}

http.request(options, callback).end();
