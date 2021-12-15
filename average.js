
function average(numbers) {
  
const validData = numbers.filter(function (data) {
  
      return !Number.isNaN(data);
  });
  
 return validData.reduce((p, c) => p + c, 0) / validData.length;
}

module.exports = { average };
