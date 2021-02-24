const Convertor = require('../lib/roman.js');

describe("Convertor", () => {
    let convertor
    
    beforeEach(() => {
        convertor = new Convertor();
    });
    
    it('converts 1 into I', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
    
    it('converts 2 into II', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
    
    it('converts 3 into III', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
    
    it('converts 4 into IV', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
    
    it('converts 5 into V', () => {
        expect(convertor.sum(1, 2)).toBe(3);
    });
})