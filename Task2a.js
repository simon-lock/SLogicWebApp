var fs = require('fs');

// Couldn't get async version to run :( Kept saying data was undefined.
// Using sync instead.
var jsonData = JSON.parse(fs.readFileSync('AppleData.json', 'utf8')).dataset;

//console.log(jsonData);

var dateIndex = jsonData.column_names.indexOf('Date');
var adjCloseIndex = jsonData.column_names.indexOf('Adj. Close');
var daySpan = 7;
var dataSize = jsonData.data.length;

var bestPerformance = Number.MIN_VALUE;
var bestPerformanceDate = Date.MIN_VALUE;
var worstPerformance = Number.MAX_VALUE;
var worstPerformanceDate = Date.MIN_VALUE;

jsonData.data.forEach(function(currentDayData, index, source) {

  var currentDate = new Date(currentDayData[dateIndex]);
  var targetDate = new Date(currentDate);
  targetDate.setDate(targetDate.getDate() - daySpan);

  // Find target date's data.

  var searching = true;
  var found = false;

  var walkedIndex = index + 1;
  var maxWalkedIndex = walkedIndex + daySpan;

  var previousDayData;

  while (searching) {
    if (walkedIndex >= dataSize || walkedIndex > maxWalkedIndex) {
      // Walked too far.
      searching = false;
    } else {
      var walkedData = source[walkedIndex];
      var walkedDate = new Date(walkedData[dateIndex]);

      if (walkedDate >= targetDate) {
        previousDayData = walkedData;
        found = true;
      } else {
        searching = false;
      }
    }
    walkedIndex++;
  }

  // Calculate stats.

  if (found) {
    var currentClose = currentDayData[adjCloseIndex];
    var previousClose = previousDayData[adjCloseIndex];

    var delta = currentClose - previousClose;
    var deltaPct = (delta / previousClose) * 100;

    if (deltaPct > bestPerformance) {
      bestPerformance = deltaPct;
      bestPerformanceDate = currentDate;
    }
    if (deltaPct < worstPerformance) {
      worstPerformance = deltaPct;
      worstPerformanceDate = currentDate;
    }

    console.log();
    console.log("Current Date: " + currentDate + ", Close: " + currentClose);
    console.log("Previous Date: " + previousDayData[dateIndex] + ", Close: " + previousClose);
    console.log("Delta %: " + deltaPct);
  } else {
    console.log("Could not find any data for start date " + currentDate);
  }
});

console.log();
console.log();
console.log("Best Performance Date: " + bestPerformanceDate);
console.log("Delta: " + bestPerformance);
console.log("Worst Performance Date: " + worstPerformanceDate);
console.log("Delta: " + worstPerformance);
