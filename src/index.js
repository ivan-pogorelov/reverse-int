module.exports = function reverse (n) {
    
    let numberString = n.toString();
	let numberStringToArr = numberString.split('');

	if (numberStringToArr[0] === '-') {
		return numberStringToArr.reverse().join('').substring(0, numberString.length - 1);
	}

	return numberStringToArr.reverse().join('');
}
