const Convertor = require('../lib/roman.js');

describe("Convertor", () => {
    let convertor
    
    beforeEach(() => {
        convertor = new Convertor();
    });
    
    it('converts 1 into I', () => {
        expect(convertor.fromNumberToRoman(1)).toBe("I");
    });
    
    // it('converts 2 into II', () => {
    //     expect(convertor.fromNumberToRoman(2)).toBe("II");
    // });

    // it('converts 3 into III', () => {
    //     expect(convertor.fromNumberToRoman(2)).toBe("III");
    // });
    
    it('converts 4 into IV', () => {
        expect(convertor.fromNumberToRoman(4)).toBe("IV");
    });

    it('converts 5 into V', () => {
        expect(convertor.fromNumberToRoman(5)).toBe("V");
    });

})