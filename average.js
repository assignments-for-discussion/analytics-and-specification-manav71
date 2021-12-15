

function outlierFilter ( numbers){
  
  var dataSet = numbers;
  
  dataSet.sort((a, b) => a - b);
   
//   finding interquartile range (IQR) score
  
var firstQuartile = dataSet[Math.floor(dataSet.length / 4)];
  
var thirdQuartile = dataSet[Math.ceil(dataSet.length * (3 / 4)) - 1];
  
var interquartileRange = thirdQuartile - firstQuartile;
  
//   Setting upper and lower limits
var upperLimit = thirdQuartile + interquartileRange * 1.5;
  
var lowerLimit = firstQuartile - interquartileRange * 1.5;
 
//   removing outliers
  
var validDataSet = dataSet.filter((a) => 
                           a <= upperLimit && a >= lowerLimit);
 
  return validDataSet;
}



function average(numbers) {
  
//   filtering out NaN data points
  
const dataSet = numbers.filter((data) => !Number.isNaN(data));

const filteredDataSet = outlierFilter(dataSet);
  
  
//   finding average
return filteredDataSet.reduce((p, c) => p + c, 0) /
                           filteredDataSet.length; 
}

module.exports = { average };
