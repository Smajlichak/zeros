module.exports = function getZerosCount(number) {
  for (var i=5, count = 0; i<number; i=i*5){
		count = count+parseInt(number/i);}
	return count; 
}
