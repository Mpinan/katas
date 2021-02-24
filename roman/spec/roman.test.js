const Convertor = require('../lib/roman.js');

describe("Convertor", () => {
    let convertor
    
    beforeEach(() => {
        convertor = new Convertor();
    });
    
    it('converts 1 into I', () => {
        expect(convertor.fromNumerToRoman(1)).toBe("I");
    });
    
    xit('converts 2 into II', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
    
    xit('converts 3 into III', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
    
    xit('converts 4 into IV', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
    
    xit('converts 5 into V', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
})