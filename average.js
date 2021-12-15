
function average(numbers) {
  
//   filtering out NaN data points
  const dataSet = numbers.filter((data) => !Number.isNaN(data));
  
  dataSet.sort((a, b) => a - b);
  
  
//   finding interquartile range (IQR) score
  var firstQuartile = dataSet[Math.floor(dataSet.length / 4)];
  
  var thirdQuartile = dataSet[Math.ceil(dataSet.length * (3 / 4)) - 1];
  
  var interquartileRange = thirdQuartile - firstQuartile;
  
  
//   Setting upper and lower limits
  var upperLimit = thirdQuartile + interquartileRange * 1.5;
  
  var lowerLimit = firstQuartile - interquartileRange * 1.5;
  
  
//   removing outliers
  var validDataSet = dataSet.filter((a) => a <= upperLimit && a >= lowerLimit );
  
  
//   finding average
  return validDataSet.reduce((p, c) => p + c, 0) / validDataSet.length;
  
}

module.exports = { average };
