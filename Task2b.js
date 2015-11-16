var https = require("https");
var calc = require("./BestAndWorst.js");

if (process.argv.length < 4) {
  console.log("Invalid arguments. Process requires dataset and api key.");
  return;
}

var dataSet = process.argv[2];
var apiKey = process.argv[3];

var options = {
  host: "www.quandl.com",
  path: "/api/v3/datasets/WIKI/" + dataSet + "?api_key=" + apiKey,
  method: 'GET'
};

var getReq = https.get(options, function(response) {
  // Continuously update stream with data
  var body = '';
  response.on('data', function(d) {
    body += d;
  });
  response.on('end', function() {

    //console.log(body);
    calc.parseJsonAndCalcBestAndWorst(body, 7)

  });
});
