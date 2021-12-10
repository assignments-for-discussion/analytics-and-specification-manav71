
function average(numbers) {
  
  let invalidData = 0;
  
  return parseFloat(numbers.reduce((p, c)=> {
    if (isNaN(c)){
      invalidData++ ;
      return p + 0;  
    } else {
      return p + c;
    }
  }, 0)) / (numbers.length - invalidData);
  
}

module.exports = { average };
