class RomanConverter {

	constructor() {
		this.numbers = [1, 4, 5, 9,	10,	40, 50,	90, 100, 400, 500, 900, 1000]
		this.romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M" ]
	}

    
    fromNumberToRoman(number) {
			let numberIndex;
			this.numbers.forEach((n) => {
				if(n === number) {
					numberIndex = this.numbers.indexOf(number);
				}
				
			})
			return this.romans[numberIndex];
    }
    
}



module.exports = RomanConverter;