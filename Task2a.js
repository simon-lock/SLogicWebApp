var fs = require('fs');
var calc = require("./BestAndWorst.js");

// Couldn't get async version to run :( Kept saying data was undefined.
// Using sync instead.
var fileData = fs.readFileSync('AppleData.json', 'utf8');

calc.parseJsonAndCalcBestAndWorst(fileData, 7)
